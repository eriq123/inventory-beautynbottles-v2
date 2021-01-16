<template>
  <main-layout>
    <template #card-title>
      <v-btn text>
        <v-icon left @click="$emit('onBack')">mdi-arrow-left</v-icon>
      </v-btn>
      {{ name }}
      <v-btn
        text
        outlined
        color="green darken-4"
        class="ml-3"
        @click="onCreate"
      >
        Create
      </v-btn>

      <crud-dialog v-model="dialog.show" :title="dialog.title" @submit="submit">
        <v-row no-gutters>
          <v-col sm="12">
            <v-text-field
              label="Category Name"
              :value="name"
              disabled
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col sm="12">
            <v-text-field
              label="Raw Item Name"
              v-model="form.name"
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- base -->
        <v-row>
          <v-col cols="12">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on" @click="unitslink">
                  Unit of Measurement:
                </v-btn>
              </template>
              <span> Update </span>
            </v-tooltip>
            <app-menu
              :menu="units"
              :label="dialog.unit_label"
              @onSelect="onSelectBase"
            ></app-menu>
          </v-col>
        </v-row>
        <!-- quantity -->
        <v-row no-gutters>
          <v-col cols="6">
            <v-text-field
              type="number"
              label="Quantity"
              v-on:keyup.enter="submit"
              v-model="form.quantity"
            >
              <template #append-outer>
                <app-menu
                  :menu="dialog.converts"
                  :label="dialog.conversion.quantity.label"
                  @onSelect="onSelectQuantity"
                ></app-menu>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <app-converted-units
              :quantity="form.quantity"
              :convertValue="dialog.conversion.quantity.value"
              :label="dialog.unit_label"
            ></app-converted-units>
          </v-col>
        </v-row>
        <!-- reorder point -->
        <v-row no-gutters class="mb-3">
          <v-col cols="6">
            <v-text-field
              type="number"
              label="Reorder point"
              v-on:keyup.enter="submit"
              v-model="form.reorder_point"
            >
              <template #append-outer>
                <app-menu
                  :menu="dialog.converts"
                  :label="dialog.conversion.reorder_point.label"
                  @onSelect="onSelectReorderPoint"
                ></app-menu>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <app-converted-units
              :quantity="form.reorder_point"
              :convertValue="dialog.conversion.reorder_point.value"
              :label="dialog.unit_label"
            ></app-converted-units>
          </v-col>
        </v-row>
        <v-row no-gutters v-if="dialog.qr_code">
          <v-col align="center" class="py-0">
            <app-qrcode
              :value="dialog.qr_code"
              level="H"
              class="center-align"
            ></app-qrcode>
          </v-col>
        </v-row>
      </crud-dialog>
    </template>

    <template #datatable>
      <v-data-table
        :headers="datatable.headers"
        :items="datatable.items"
        :loading="datatable.loading"
        :search="datatable.search"
      >
        <template v-slot:top>
          <datatable-search v-model="datatable.search"></datatable-search>
        </template>

        <template #item.actions="{ item }">
          <v-btn text color="blue darken-4" @click.stop="onEdit(item)">
            Update
          </v-btn>
          <!-- @click.stop="onDelete(item)" -->
          <v-btn text color="red darken-4"> Delete </v-btn>
        </template>
      </v-data-table>
    </template>
  </main-layout>
</template>
<script>
export default {
  props: {
    id: {
      required: true
    },
    name: {
      type: String
    }
  },
  components: {
    "app-converted-units": () => import("@/components/common/converted-units"),
    "app-qrcode": () => import("qrcode.vue"),
    "app-menu": () => import("@/components/common/menu"),
    "crud-dialog": () =>
      import("@/components/pages/products/categories/dialog-500"),
    "datatable-search": () => import("@/components/common/datatable-search"),
    // "info-alert": () => import("@/components/common/info-alert"),
    "main-layout": () => import("@/components/layouts/categories-product/index")
  },
  data() {
    return {
      datatable: {
        headers: [
          {
            text: "Code",
            align: "start",
            value: "code"
          },
          {
            text: "Raw Item Name",
            align: "start",
            value: "name"
          },
          {
            text: "Quantity",
            value: "units_needed",
            align: "end"
          },
          {
            text: "Reorder Point",
            value: "custom_reorder_point",
            align: "end"
          },
          {
            text: "Actions",
            value: "actions",
            align: "center",
            sortable: false
          }
        ],
        items: [],
        loading: false,
        search: null
      },
      dialog: {
        show: false,
        title: "N/A",
        qr_code: null,
        converts: [],
        conversion: {
          quantity: {
            label: null,
            value: null
          },
          reorder_point: {
            label: null,
            value: null
          }
        },
        unit_label: null
      },
      form: {
        base_id: 0,
        category_id: 0,
        name: null,
        quantity: 1,
        reorder_point: 1
      },
      itemIndex: -1,
      units: [],
      converts: []
    };
  },
  mounted() {
    this.form.category_id = this.id;
    this.loadItems();
  },
  methods: {
    async loadItems() {
      this.datatable.loading = true;

      await axios
        .post("/products/raw/view", {
          id: this.id
        })
        .then(response => {
          this.datatable.items = response.data.raw;
          this.units = response.data.base;
          this.converts = response.data.convert;
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response);
            this.$store.commit("errorSnackbar");
          }
        });

      this.datatable.loading = false;
    },

    onCreate() {
      this.dialog.title = "Add";
      this.itemIndex = -1;
      this.dialog.qr_code = null;
      this.formData();
      if (this.units.length > 0) {
        this.form.base_id = this.units[0].id;
        this.dialog.conversion.reorder_point.label = this.dialog.conversion.quantity.label = this.dialog.unit_label = this.units[0].name;
      }
      this.prepareFilteredConverts();
      this.dialog.show = true;
    },

    onEdit(item) {
      this.dialog.title = "Update";
      this.itemIndex = this.datatable.items.indexOf(item);
      this.dialog.qr_code = item.qr_code;
      this.formData(item.name, item.base_id, item.quantity, item.reorder_point);
      this.form.base_id = item.base_id;
      this.dialog.conversion.reorder_point.label = this.dialog.conversion.quantity.label = this.dialog.unit_label =
        item.base.name;

      this.prepareFilteredConverts();
      this.dialog.show = true;
    },

    formData(name = null, base_id = 0, quantity = 1, reorder_point = null) {
      this.form.name = name;
      this.form.base_id = base_id;
      this.form.quantity = quantity;
      this.form.reorder_point = reorder_point;
    },

    async prepareFilteredConverts() {
      const filterConverts = [...this.converts];
      this.dialog.converts = await filterConverts.filter(item => {
        if (item.base_id == this.form.base_id) {
          return item;
        }
      });
      console.log(this.converts);
      console.log(this.dialog.converts);
      if (this.dialog.converts.length > 0) {
        this.dialog.conversion.reorder_point.value = this.dialog.conversion.quantity.value = this.dialog.converts[0].value;
      }
    },

    async onStoreAndUpdate() {
      await axios
        .post(
          this.itemIndex == -1 ? "/products/raw/add" : "/products/raw/update",
          this.form
        )
        .then(response => {
          const raw = response.data.raw;

          if (this.itemIndex == -1) {
            this.$store.commit("showSnackbar", {
              color: true,
              text: `${raw.name} added.`
            });
            this.datatable.items.unshift(raw);
          } else {
            this.$store.commit("showSnackbar", {
              color: true,
              text: `${raw.name} has been updated.`
            });
            Object.assign(this.datatable.items[this.itemIndex], raw);
          }
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response);
            this.$store.commit("errorSnackbar");
          }
        });
      this.datatable.loading = false;
    },

    async onDelete(item) {
      if (confirm(`Are you sure you want to delete ${item.name}`)) {
        this.datatable.loading = true;
        await axios
          .post("/products/raw/delete", {
            id: item.id
          })
          .then(response => {
            this.$store.commit("showSnackbar", {
              color: true,
              text: `${response.data.raw.name} deleted.`
            });
            this.itemIndex = this.datatable.items.indexOf(item);
            this.datatable.items.splice(this.itemIndex, 1);
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response);
              this.$store.commit("errorSnackbar");
            }
          });
        this.datatable.loading = false;
      }
    },

    submit() {
      if (
        this.form.quantity >= 0 ||
        this.form.name !== null ||
        this.form.reorder_point >= 0 ||
        this.form.base_id !== 0
      ) {
        this.dialog.show = false;
        this.datatable.loading = true;

        this.form.quantity =
          this.dialog.conversion.quantity.value * this.form.quantity;
        this.form.reorder_point =
          this.dialog.conversion.reorder_point.value * this.form.reorder_point;

        this.onStoreAndUpdate();
      } else {
        this.$store.commit("showSnackbar", {
          color: false,
          text: "Please check all fields and try again."
        });
      }
    },

    onSelectBase(item) {
      this.dialog.conversion.reorder_point.label = this.dialog.conversion.quantity.label = this.dialog.unit_label =
        item.name;
      this.form.base_id = item.id;
      this.prepareFilteredConverts();
    },
    onSelectQuantity(item) {
      this.dialog.conversion.quantity.label = item.name;
      this.dialog.conversion.quantity.value = item.value;
    },
    onSelectReorderPoint(item) {
      this.dialog.conversion.reorder_point.label = item.name;
      this.dialog.conversion.reorder_point.value = item.value;
    },
    unitslink() {
      window.location.href = "/units/";
    }
  }
};
</script>