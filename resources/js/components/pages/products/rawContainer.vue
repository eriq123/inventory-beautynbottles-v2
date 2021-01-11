<template>
  <v-container>
    <app-raw-category
      @showrawitems="showrawitems"
      v-if="!selected"
      :type="'Raw'"
    >
    </app-raw-category>

    <v-row v-if="selected">
      <v-col>
        <v-card flat>
          <v-card-title>
            <v-btn text @click="selected = false">
              <v-icon left>mdi-arrow-left</v-icon>
              <!-- Back to categories -->
            </v-btn>
            {{ this.formData.category_name }} raw items
            <v-btn
              text
              outlined
              color="green darken-4"
              class="ml-3"
              @click="showAddDialog"
              :disabled="!base_count || !convert_count"
            >
              Add
            </v-btn>

            <v-dialog v-model="showForm" max-width="500px">
              <app-raw-dialog
                :title="dialogAction"
                :categoryName="formData.category_name"
                @closedialog="showForm = false"
                @processrawsave="processrawsave"
                @processdelete="processdelete"
              >
                <template #dialogForm>
                  <v-col cols="12" class="py-0">
                    <v-text-field
                      label="Raw item name"
                      v-on:keyup.enter="processrawsave"
                      v-model="formData.name"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn text v-bind="attrs" v-on="on" @click="unitsCrud">
                          Unit of Measurement:
                        </v-btn>
                      </template>
                      <span> Update units of measurement. </span>
                    </v-tooltip>
                    <app-raw-menu
                      :menu="base_collection"
                      :selected="formData.base_name"
                      @selectedmenu="selectunitsofmeasurement"
                    ></app-raw-menu>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      type="number"
                      label="Quantity"
                      v-on:keyup.enter="processrawsave"
                      v-model="formInput.quantity"
                    >
                      <template #append-outer>
                        <app-raw-menu
                          :menu="convertFiltered"
                          :selected="convert.quantity.name"
                          @selectedmenu="selectedconvertquantity"
                        ></app-raw-menu>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <app-raw-converted-units
                      :value="formInput.quantity"
                      :convertValue="convert.quantity.value"
                      :formDataBaseName="formData.base_name"
                    ></app-raw-converted-units>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      type="number"
                      label="Reorder Point"
                      v-on:keyup.enter="processrawsave"
                      v-model="formInput.reorder_point"
                    >
                      <template #append-outer>
                        <app-raw-menu
                          :menu="convertFiltered"
                          :selected="convert.reorder_point.name"
                          @selectedmenu="selectedconvertreorderpoint"
                        ></app-raw-menu>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <app-raw-converted-units
                      :value="formInput.reorder_point"
                      :convertValue="convert.reorder_point.value"
                      :formDataBaseName="formData.base_name"
                    ></app-raw-converted-units>
                  </v-col>

                  <v-col align="center" class="py-0" v-if="qrcode">
                    <app-raw-qrcode
                      :value="qrcode"
                      level="H"
                      class="center-align"
                    ></app-raw-qrcode>
                  </v-col>
                </template>
              </app-raw-dialog>
            </v-dialog>

            <!-- <v-spacer></v-spacer> -->
          </v-card-title>
          <v-card-text>
            <p v-if="!base_count">
              Please create atleast one unit with one sub-unit:
              <v-btn text outlined @click="unitsCrud">
                Unit of Measurement
              </v-btn>
            </p>
            <p v-if="!convert_count">
              Please create atleast one sub-unit:
              <v-btn text outlined @click="unitsCrud">
                Unit of Measurement
              </v-btn>
            </p>
            <v-row>
              <v-col sm="12">
                <v-data-table
                  :headers="headers"
                  :items="items"
                  :loading="loading"
                  :search="search"
                  @click:row="showEditDialog"
                >
                  <template v-slot:top>
                    <datatable-search v-model="search"></datatable-search>
                  </template>
                  <template #item.id="{ item }">
                    RI -
                    {{ item.id.toString().padStart(4, "0") }}
                  </template>
                  <template #item.quantity="{ item }">
                    {{ item.quantity }} {{ item.base.name }}
                  </template>
                  <template #item.reorder_point="{ item }">
                    {{ item.reorder_point }}
                    {{ item.base.name }}
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    "app-raw-category": () => import("./raw/category"),
    "app-raw-menu": () => import("./raw/rawMenu"),
    "app-raw-dialog": () => import("./raw/rawDialog"),
    "app-raw-converted-units": () => import("./raw/rawConvertedUnits"),
    "app-raw-qrcode": () => import("qrcode.vue"),
    "datatable-search": () => import("@/components/common/datatable-search")
  },
  data() {
    return {
      search: null,
      selected: false,

      showForm: false,
      dialogAction: null,
      qrcode: null,

      formInput: {
        quantity: null,
        reorder_point: null
      },

      formData: {
        category_id: 0,
        category_name: null,
        name: null,
        quantity: null,
        reorder_point: null,
        base_id: 0,
        base_name: null
      },

      headers: [
        {
          text: "Code",
          align: "start",
          value: "id"
        },
        {
          text: "Raw Item Name",
          value: "name"
        },
        {
          text: "Quantity",
          value: "quantity",
          align: "end"
        },
        {
          text: "Reorder Point",
          value: "reorder_point",
          align: "end"
        }
      ],
      loading: false,
      items: [],
      itemIndex: -1,

      base_collection: [],
      convert_collection: [],
      convertFiltered: [],
      convert: {
        quantity: {
          name: null,
          value: 1
        },
        reorder_point: {
          name: null,
          value: 1
        }
      },
      base_count: true,
      convert_count: true
    };
  },
  mounted() {
    axios
      .post("/units/all")
      .then(response => {
        this.base_collection = response.data.base;
        this.convert_collection = response.data.convert;
        this.base_count = response.data.base.length > 0 ? true : false;
        this.convert_count = response.data.convert.length > 0 ? true : false;

        if (this.base_count == false && this.convert_count == false) {
          this.convert_count = true;
        }
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
          this.$store.commit("errorSnackbar");
        }
      });
  },
  methods: {
    unitsCrud() {
      window.location.href = "/units/";
    },
    convertFilter() {
      this.convertFiltered = [];
      this.convert_collection.forEach(item => {
        if (item.base_id == this.formData.base_id) {
          this.convertFiltered.push(item);
        }
      });
      this.convert.quantity.name = this.convert.reorder_point.name = this.convertFiltered[0].name;
      this.convert.quantity.value = this.convert.reorder_point.value = this.convertFiltered[0].value;
    },
    processdelete() {
      axios
        .post("/products/raw/delete", this.formData)
        .then(response => {
          this.$store.commit("showSnackbar", {
            color: true,
            text: `${response.data.raw.name} deleted.`
          });
          this.items.splice(this.itemIndex, 1);
          this.showForm = false;
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response);
            this.$store.commit("errorSnackbar");
          }
        });
    },
    processrawsave() {
      this.formData.quantity =
        this.convert.quantity.value * this.formInput.quantity;
      this.formData.reorder_point =
        this.convert.reorder_point.value * this.formInput.reorder_point;
      axios
        .post(
          this.dialogAction == "Add"
            ? "/products/raw/add"
            : "/products/raw/update",
          this.formData
        )
        .then(response => {
          const raw = response.data.raw;

          if (this.dialogAction == "Add") {
            this.$store.commit("showSnackbar", {
              color: true,
              text: `${raw.name} added.`
            });
            this.items.push(raw);
          } else {
            this.$store.commit("showSnackbar", {
              color: true,
              text: `${raw.name} has been updated.`
            });
            Object.assign(this.items[this.itemIndex], raw);
          }

          this.showForm = false;
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response);
            this.$store.commit("errorSnackbar");
          }
        });
    },
    selectedconvertquantity(item) {
      this.convert.quantity.name = item.name;
      this.convert.quantity.value = item.value;
    },
    selectedconvertreorderpoint(item) {
      this.convert.reorder_point.name = item.name;
      this.convert.reorder_point.value = item.value;
    },
    selectunitsofmeasurement(item) {
      this.formData.base_id = item.id;
      this.formData.base_name = item.name;
      this.convertFilter();
    },
    showAddDialog() {
      this.dialogAction = "Add";
      this.qrcode = null;

      this.formData.name = null;
      this.formInput.quantity = null;
      this.formInput.reorder_point = null;

      this.formData.base_id = this.base_collection[0].id;
      this.formData.base_name = this.base_collection[0].name;
      this.convertFilter();

      this.showForm = true;
    },

    showEditDialog(item) {
      this.dialogAction = "Update";
      this.qrcode = item.qr_code;
      this.itemIndex = this.items.indexOf(item);

      this.formData.id = item.id;
      this.formData.name = item.name;
      this.formInput.quantity = item.quantity;
      this.formInput.reorder_point = item.reorder_point;

      this.formData.base_id = item.base.id;
      this.formData.base_name = item.base.name;
      this.convertFilter();

      this.showForm = true;
    },

    showrawitems(item) {
      this.selected = true;
      this.formData.category_id = item.id;
      this.formData.category_name = item.name;
      this.loading = true;
      axios
        .post("/products/raw/view", {
          id: this.formData.category_id
        })
        .then(response => {
          this.items = response.data.raw;
          this.loading = false;
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response);
            this.$store.commit("errorSnackbar");
          }
          this.loading = false;
        });
    }
  },
  computed: {}
};
</script>
