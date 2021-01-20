<template>
  <v-container>
    <v-slide-x-reverse-transition mode="out-in">
      <categories-layout
        :headers="datatable.headers"
        :items="datatable.items"
        :loading="datatable.loading"
        :isSelected="category.isSelected"
        :categoryName="category.name"
        @onCreate="onCreate"
        @onEdit="onEdit"
        @onDelete="onDelete"
        @onBack="onBack"
        @showItems="showItems"
        v-if="!product.isSelected"
      >
        <template #qr v-if="!product.isSelected">
          <v-spacer></v-spacer>
          <v-btn
            text
            color="pink accent-2"
            class="d-none d-lg-block"
            @click="qrLink"
          >
            <v-icon left>mdi-qrcode-scan</v-icon>
            Assembled Products
          </v-btn>
        </template>
        <template #info-alert>
          <info-alert :text="alertText" />
        </template>
        <template #dialog>
          <crud-dialog
            v-model="dialog.show"
            :title="dialog.title"
            @submit="submit"
          >
            <v-row no-gutters>
              <v-col sm="12">
                <v-text-field
                  label="Code"
                  v-model="form.code"
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col sm="12">
                <v-text-field
                  label="Name"
                  v-model="form.name"
                  autofocus
                  v-on:keyup.enter="submit"
                ></v-text-field>
              </v-col>
            </v-row>
          </crud-dialog>
        </template>
      </categories-layout>
      <products-assembly
        v-if="product.isSelected"
        :id="product.id"
        :name="product.name"
        :qr="product.qr_code"
        @onBack="onBack"
      ></products-assembly>
    </v-slide-x-reverse-transition>
  </v-container>
</template>
<script>
export default {
  components: {
    "categories-layout": () =>
      import("@/components/pages/products/categories/index"),
    "crud-dialog": () =>
      import("@/components/pages/products/categories/dialog"),
    "info-alert": () => import("@/components/common/info-alert"),
    "products-assembly": () => import("./assembly")
  },
  data() {
    return {
      category: {
        id: 0,
        name: null,
        isSelected: false
      },
      datatable: {
        headers: [
          {
            text: "Code",
            align: "start",
            value: "code"
          },
          {
            text: "Name",
            align: "start",
            sortable: true,
            value: "name"
          },
          {
            text: "Actions",
            value: "actions",
            align: "center",
            sortable: false
          }
        ],
        items: [],
        loading: false
      },
      dialog: {
        show: false,
        title: "N/A"
      },
      form: {
        code: "N/A",
        id: 0,
        name: "N/A"
      },
      itemIndex: -1,
      product: {
        id: 0,
        name: null,
        isSelected: false
      },
      type: "product"
    };
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    async loadItems() {
      this.datatable.loading = true;
      if (!this.category.isSelected) {
        await axios
          .post("/products/category/view", {
            type: this.type
          })
          .then(response => {
            this.datatable.items = response.data.category;
          });
      } else {
        await axios
          .get(`/products/category/${this.category.id}`)
          .then(response => {
            this.datatable.items = response.data.products;
          });
      }
      this.datatable.loading = false;
    },

    showItems(items) {
      if (!this.product.isSelected) {
        if (!this.category.isSelected) {
          this.category = items;
          this.category.isSelected = true;
        } else {
          this.product = items;
          this.product.isSelected = true;
        }
        this.loadItems();
      }
    },

    onBack() {
      const reset = {
        id: 0,
        name: null,
        isSelected: false
      };

      this.product.isSelected == true
        ? (this.product = reset)
        : (this.category = reset);

      this.loadItems();
    },

    onCreate() {
      this.dialog.title = "Create";
      this.itemIndex = -1;
      this.formData();
    },

    onEdit(item) {
      this.dialog.title = "Update";
      this.formData(item.id, item.code, item.name);
      this.itemIndex = this.datatable.items.indexOf(item);
    },

    formData(id = 0, code = "N/A", name = "") {
      this.form.id = id;
      this.form.code = code;
      this.form.name = name;
      this.dialog.show = true;
    },

    submit() {
      if (this.form.name) {
        this.dialog.show = false;
        this.datatable.loading = true;

        this.itemIndex == -1 ? this.onStore() : this.onUpdate();
      } else {
        this.$store.commit("showSnackbar", {
          color: false,
          text: "Category name is required."
        });
      }
    },

    async onStore() {
      if (!this.category.isSelected) {
        await axios
          .post("/products/category/add", {
            name: this.form.name,
            type: this.type
          })
          .then(response => {
            this.$store.commit("showSnackbar", {
              color: true,
              text: `${response.data.category.name} added.`
            });
            this.datatable.items.unshift(response.data.category);
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response);
              this.$store.commit("errorSnackbar");
            }
          });
      } else {
        await axios
          .post("/products/add", {
            name: this.form.name,
            category_id: this.category.id
          })
          .then(response => {
            this.$store.commit("showSnackbar", {
              color: true,
              text: `${response.data.product.name} added.`
            });
            this.datatable.items.unshift(response.data.product);
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response);
              this.$store.commit("errorSnackbar");
            }
          });
      }
      this.datatable.loading = false;
    },

    async onUpdate() {
      if (!this.category.isSelected) {
        await axios
          .post("/products/category/update", {
            id: this.form.id,
            name: this.form.name
          })
          .then(response => {
            console.log("category update");
            this.$store.commit("showSnackbar", {
              color: true,
              text: `${response.data.category.name} updated.`
            });
            Object.assign(
              this.datatable.items[this.itemIndex],
              response.data.category
            );
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response);
              this.$store.commit("errorSnackbar");
            }
          });
      } else {
        await axios
          .post("/products/update", {
            id: this.form.id,
            name: this.form.name
          })
          .then(response => {
            console.log("products update");
            this.$store.commit("showSnackbar", {
              color: true,
              text: `${response.data.product.name} updated.`
            });
            Object.assign(
              this.datatable.items[this.itemIndex],
              response.data.product
            );
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response);
              this.$store.commit("errorSnackbar");
            }
          });
      }
      this.datatable.loading = false;
    },

    async onDelete(item) {
      if (confirm(`Are you sure you want to delete ${item.name}`)) {
        this.datatable.loading = true;
        if (!this.category.isSelected) {
          await axios
            .post("/products/category/delete", {
              id: item.id
            })
            .then(response => {
              this.$store.commit("showSnackbar", {
                color: true,
                text: `${response.data.category.name} deleted.`
              });
              this.itemIndex = this.datatable.items.indexOf(item);
              this.datatable.items.splice(this.itemIndex, 1);
              this.dialog.show = false;
            })
            .catch(error => {
              if (error.response) {
                console.log(error.response);
                this.$store.commit("errorSnackbar");
              }
            });
        } else {
          await axios
            .post("/products/delete", {
              id: item.id
            })
            .then(response => {
              this.$store.commit("showSnackbar", {
                color: true,
                text: `${response.data.product.name} deleted.`
              });
              this.itemIndex = this.items.indexOf(item);
              this.items.splice(this.itemIndex, 1);
            })
            .catch(error => {
              if (error.response) {
                console.log(error.response);
                this.$store.commit("errorSnackbar");
              }
            });
        }
        this.datatable.loading = false;
      }
    },

    qrLink() {
      window.location.href = "/qr/products";
    }
  },

  computed: {
    alertText() {
      return this.category.isSelected == false
        ? "Click on table rows to view raw items."
        : "Click on table rows to view products.";
    }
  }
};
</script>