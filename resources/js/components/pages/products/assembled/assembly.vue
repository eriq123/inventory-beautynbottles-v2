<template>
  <main-layout>
    <template #info-alert>
      <info-alert
        text="Tip: Search and select raw item, then click the add button."
      />
    </template>
    <template #card-title>
      <v-btn text>
        <v-icon left @click="$emit('onBack')">mdi-arrow-left</v-icon>
      </v-btn>
      {{ name }}
      <crud-dialog v-model="dialog.show" :title="dialog.title" @submit="submit">
        <v-row no-gutters>
          <v-col sm="12">
            <v-text-field
              disabled
              label="Category Name"
              :value="dialog.category_name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col sm="12">
            <v-text-field
              disabled
              label="Raw Item Name"
              :value="dialog.raw_name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col sm="12">
            <v-text-field
              label="Quantity"
              autofocus
              type="number"
              clearable
              v-model="form.quantity"
              @click:clear="form.quantity = ''"
              v-on:keyup.enter="submit"
            >
              <template #append-outer>
                <app-menu
                  :menu="dialog.units"
                  :label="dialog.menu_label"
                  @onSelect="onMenuSelect"
                ></app-menu>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col sm="12">
            <app-converted-units
              :quantity="form.quantity"
              :convertValue="dialog.converted_value"
              :label="dialog.converted_label"
            ></app-converted-units>
          </v-col>
        </v-row>
      </crud-dialog>
    </template>

    <template #card-text>
      <v-row>
        <v-col cols="3" md="2">
          <app-qrcode :value="qr" level="H" class="text-center"> </app-qrcode>
        </v-col>
        <v-col cols="6" md="8">
          <v-autocomplete
            @keydown.enter="onCreate"
            v-model="autocomplete.selected"
            :search-input.sync="autocomplete.name"
            :loading="autocomplete.loading"
            :items="autocomplete.items"
            item-text="name"
            item-value="id"
            placeholder="Search raw items..."
            label="Raw Items"
            hint="Click the add button after selecting your preferred raw item."
            persistent-hint
            return-object
            clearable
            open-on-clear
            color="pink accent-1"
          ></v-autocomplete>
        </v-col>
        <v-col cols="3" md="2">
          <v-btn
            text
            outlined
            color="green darken-4"
            class="ml-3"
            :loading="dialog.loading"
            :disabled="!autocomplete.selected"
            @click="onCreate"
          >
            Add
          </v-btn>
        </v-col>
      </v-row>
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
          <v-btn text color="red darken-4" @click.stop="onDelete(item)">
            Delete
          </v-btn>
        </template>
      </v-data-table>
    </template>
  </main-layout>
</template>
<script>
export default {
  props: {
    id: {
      required: true,
    },
    name: {
      type: String,
    },
    qr: {
      type: String,
    },
  },
  components: {
    "app-converted-units": () => import("@/components/common/converted-units"),
    "app-qrcode": () => import("qrcode.vue"),
    "app-menu": () => import("@/components/common/menu"),
    "crud-dialog": () =>
      import("@/components/pages/products/categories/dialog"),
    "datatable-search": () => import("@/components/common/datatable-search"),
    "info-alert": () => import("@/components/common/info-alert"),
    "main-layout": () =>
      import("@/components/layouts/categories-product/index"),
  },
  data() {
    return {
      autocomplete: {
        items: [],
        loading: false,
        name: null,
        selected: null,
      },
      datatable: {
        headers: [
          {
            text: "Code",
            align: "start",
            value: "code",
          },
          {
            text: "Raw Item Name",
            align: "start",
            value: "name",
          },
          {
            text: "Quantity",
            value: "units_needed",
            align: "end",
          },
          {
            text: "Actions",
            value: "actions",
            align: "center",
            sortable: false,
          },
        ],
        items: [],
        loading: false,
        search: null,
      },
      dialog: {
        category_name: null,
        converted_label: null,
        converted_value: 1,
        loading: false,
        raw_name: null,
        show: false,
        title: "N/A",
        units: [],
        menu_label: null,
      },
      form: {
        product_id: 0,
        quantity: 1,
        raw_id: 0,
      },
      itemIndex: -1,
      units: [],
    };
  },
  mounted() {
    this.form.product_id = this.id;
    this.loadItems();
  },
  methods: {
    loadItems() {
      this.datatable.loading = this.autocomplete.loading = this.dialog.loading = true;

      axios
        .post("/products/assembled/view", { id: this.id })
        .then((response) => {
          this.datatable.items = response.data.product;
          this.units = response.data.convert;
          this.datatable.loading = this.dialog.loading = false;
        })
        .then(() => {
          return axios.post("/products/raw/view");
        })
        .then((response) => {
          this.autocomplete.items = response.data.raw;
          this.autocomplete.loading = false;
        });
    },

    onCreate() {
      if (this.autocomplete.selected) {
        this.dialog.title = "Add";
        this.form.quantity = 1;
        this.dialog.category_name = this.autocomplete.selected.category.name;
        this.dialog.raw_name = this.autocomplete.selected.name;
        this.form.raw_id = this.autocomplete.selected.id;
        this.itemIndex = -1;
        this.dialog.converted_label = this.autocomplete.selected.base.name;
        this.prepareUnits(this.autocomplete.selected.base_id);
        this.dialog.show = true;
      }
    },

    onEdit(item) {
      this.dialog.title = "Update";
      this.form.quantity = item.pivot.quantity;
      this.dialog.category_name = item.category.name;
      this.dialog.raw_name = item.name;
      this.form.raw_id = item.id;
      this.itemIndex = this.datatable.items.indexOf(item);
      this.dialog.converted_label = item.base.name;
      this.prepareUnits(item.base_id);
      this.dialog.show = true;
    },

    async prepareUnits(currentID) {
      const filterUnits = [...this.units];
      this.dialog.units = await filterUnits.filter((item) => {
        if (item.base_id == currentID) {
          return item;
        }
      });

      if (this.dialog.units.length > 0) {
        this.dialog.menu_label = this.dialog.units[0].name;
        this.converted_value = this.dialog.units[0].value;
      }
    },

    async onStore() {
      await axios
        .post("/products/assembled/attach", this.form)
        .then((response) => {
          console.log(response.data.product);
          this.$store.commit("showSnackbar", {
            color: true,
            text: `${this.dialog.raw_name} added.`,
          });
          this.datatable.items = response.data.product;
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            this.$store.commit("errorSnackbar");
          }
        });
      this.datatable.loading = false;
    },

    async onUpdate() {
      await axios
        .post("/products/assembled/update", this.form)
        .then((response) => {
          this.$store.commit("showSnackbar", {
            color: true,
            text: `${this.dialog.raw_name} updated.`,
          });
          this.datatable.items = response.data.product;
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            this.$store.commit("errorSnackbar");
          }
        });
      this.datatable.loading = false;
    },

    async onDelete(item) {
      if (confirm(`Are you sure you want to delete ${item.name}`)) {
        this.form.raw_id = item.id;
        this.datatable.loading = true;
        this.dialog.raw_name = item.name;
        await axios
          .post("/products/assembled/detach", this.form)
          .then((response) => {
            this.$store.commit("showSnackbar", {
              color: true,
              text: `${this.dialog.raw_name} removed.`,
            });
            this.datatable.items = response.data.product;
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
              this.$store.commit("errorSnackbar");
            }
          });
        this.datatable.loading = false;
      }
    },

    onMenuSelect(item) {
      this.dialog.menu_label = item.name;
      this.dialog.converted_value = item.value;
    },

    submit() {
      if (this.form.quantity >= 0) {
        this.dialog.show = false;
        this.datatable.loading = true;
        this.form.quantity = this.dialog.converted_value * this.form.quantity;

        this.itemIndex == -1 ? this.onStore() : this.onUpdate();
      } else {
        this.$store.commit("showSnackbar", {
          color: false,
          text: "Quantity field is required.",
        });
      }
    },
  },
};
</script>