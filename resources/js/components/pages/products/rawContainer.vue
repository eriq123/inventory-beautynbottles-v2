<template>
    <v-container>
        <app-raw-category
            @showrawitems="showrawitems"
            v-if="!selected"
        ></app-raw-category>
        <v-row v-if="selected">
            <v-col>
                <v-card flat>
                    <v-card-title>
                        {{ this.formData.category_name }} raw items
                        <v-btn
                            text
                            outlined
                            color="green darken-4"
                            class="ml-3"
                            @click="showAddForm"
                        >
                            Add
                        </v-btn>

                        <v-dialog v-model="showForm" max-width="500px">
                            <app-raw-dialog
                                :title="dialogAction"
                                :categoryName="formData.category_name"
                                @closedialog="showForm = false"
                                @processadd="processadd"
                            >
                                <template #dialogForm>
                                    <v-col cols="12" class="py-0">
                                        <v-text-field
                                            label="Raw item name"
                                            v-model="formData.name"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        Unit of Measurement:
                                        <app-raw-menu
                                            :menu="base_collection"
                                            :selected="formData.base_name"
                                            @selectedmenu="
                                                selectunitsofmeasurement
                                            "
                                        ></app-raw-menu>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field
                                            type="number"
                                            label="Quantity"
                                            v-model="formData.quantity"
                                        >
                                            <template #append-outer>
                                                <app-raw-menu
                                                    :menu="convertFiltered"
                                                    :selected="
                                                        convert.quantity.name
                                                    "
                                                    @selectedmenu="
                                                        selectedconvertquantity
                                                    "
                                                ></app-raw-menu>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <app-raw-converted-units
                                        :value="formData.quantity"
                                        :convertValue="convert.quantity.value"
                                        :formDataBaseName="formData.base_name"
                                    ></app-raw-converted-units>

                                    <v-col cols="6">
                                        <v-text-field
                                            type="number"
                                            label="Reorder Point"
                                            v-model="formData.reorder_point"
                                        >
                                            <template #append-outer>
                                                <app-raw-menu
                                                    :menu="convertFiltered"
                                                    :selected="
                                                        convert.reorder_point
                                                            .name
                                                    "
                                                    @selectedmenu="
                                                        selectedconvertreorderpoint
                                                    "
                                                ></app-raw-menu>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <app-raw-converted-units
                                        :value="formData.reorder_point"
                                        :convertValue="
                                            convert.reorder_point.value
                                        "
                                        :formDataBaseName="formData.base_name"
                                    ></app-raw-converted-units>
                                </template>
                            </app-raw-dialog>
                        </v-dialog>

                        <v-spacer></v-spacer>

                        <v-btn text @click="selected = false">
                            <v-icon left>mdi-arrow-left</v-icon>
                            Back to categories
                        </v-btn>
                    </v-card-title>

                    <v-data-table
                        :headers="headers"
                        :items="items"
                        :loading="loading"
                    >
                        <template #item.id="{item}">
                            RI - {{ item.id.toString().padStart(4, "0") }}
                        </template>
                        <template #item.quantity="{item}">
                            {{ item.quantity }} {{ item.base.name }}
                        </template>
                        <template #item.reorder_point="{item}">
                            {{ item.reorder_point }} {{ item.base.name }}
                        </template>
                        <!-- <template #item.qr="{item}">
                            <app-qr-code
                                :value="item.qr"
                                level="H"
                            ></app-qr-code>
                        </template> -->
                    </v-data-table>
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
        "app-raw-converted-units": () => import("./raw/rawConvertedUnits")
    },
    data() {
        return {
            selected: false,

            showForm: false,
            dialogAction: null,

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
                    value: "quantity"
                },
                {
                    text: "Reorder Point",
                    value: "reorder_point"
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
            }
        };
    },
    mounted() {
        axios
            .post("/units/all")
            .then(response => {
                this.base_collection = response.data.base;
                this.convert_collection = response.data.convert;
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                    this.errorAlert();
                }
            });
    },
    methods: {
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
        processadd() {
            this.formData.quantity =
                this.convert.quantity.value * this.formData.quantity;
            this.formData.reorder_point =
                this.convert.reorder_point.value * this.formData.reorder_point;
            axios
                .post(
                    this.dialogAction == "Add"
                        ? "/products/raw/add"
                        : "/products/raw/update",
                    this.formData
                )
                .then(response => {
                    const raw = response.data.raw;
                    raw.category_name = raw.category.name;

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
                        // Object.assign(this.items[this.itemIndex], raw);
                    }

                    this.showForm = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.errorAlert();
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
        showAddForm() {
            this.dialogAction = "Add";

            this.formData.name = null;
            this.formData.quantity = null;
            this.formData.reorder_point = null;

            this.formData.base_id = this.base_collection[0].id;
            this.formData.base_name = this.base_collection[0].name;
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
                    console.log(response.data.raw);
                    this.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.errorAlert();
                    }
                    this.loading = false;
                });
        },
        errorAlert() {
            this.$store.commit("showSnackbar", {
                color: false,
                text: "Something went wrong."
            });
        }
    },
    computed: {}
};
</script>
