<template>
    <v-container>
        <app-assembled-products
            v-if="!selected"
            @productselected="productselected"
            :rawItemsReady="rawItemsReady"
        ></app-assembled-products>
        <v-row v-if="selected">
            <v-col>
                <v-card flat>
                    <v-card-title>
                        Assemble {{ this.product_name }}
                        <v-btn
                            text
                            outlined
                            color="green darken-4"
                            class="ml-3"
                            @click="showAddDialog"
                            :loading="dialog.loading"
                        >
                            Add
                        </v-btn>
                        <v-dialog v-model="dialog.show" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{
                                        this.dialog.action
                                    }}</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-row>
                                        <v-col sm="12">
                                            <v-text-field
                                                disabled
                                                label="Category Name"
                                                :value="dialog.category_name"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col sm="12">
                                            <v-text-field
                                                disabled
                                                label="Raw Item Name"
                                                :value="dialog.raw_name"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="6">
                                            <v-text-field
                                                type="number"
                                                label="Quantity"
                                                v-model="dialog.quantity"
                                                autofocus
                                            >
                                                <template #append-outer>
                                                    <app-raw-menu
                                                        :menu="
                                                            dialog.convert_collection
                                                        "
                                                        :selected="
                                                            dialog.convert_name
                                                        "
                                                        @selectedmenu="
                                                            selectedconvertquantity
                                                        "
                                                    ></app-raw-menu>
                                                </template>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="6">
                                            <app-raw-converted-units
                                                :value="dialog.quantity"
                                                :convertValue="
                                                    dialog.convert_value
                                                "
                                                :formDataBaseName="
                                                    dialog.base_name
                                                "
                                            ></app-raw-converted-units>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn
                                        text
                                        color="red darken-3"
                                        v-if="dialog.action == 'Update'"
                                        @click="processRemove"
                                    >
                                        Remove
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn text @click="dialog.show = false"
                                        >Cancel</v-btn
                                    >
                                    <v-btn
                                        text
                                        color="green darken-3"
                                        @click="processAddAndUpdate"
                                    >
                                        Save
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                        <v-spacer></v-spacer>

                        <v-btn text @click="selected = false">
                            <v-icon left>mdi-arrow-left</v-icon>
                            Back to Products
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col sm="3">
                                <app-assembled-qrcode
                                    :value="qr_code"
                                    level="H"
                                    class="right-align"
                                >
                                </app-assembled-qrcode>
                            </v-col>
                            <v-col sm="9">
                                <v-autocomplete
                                    v-model="autocomplete.selected"
                                    :search-input.sync="autocomplete.name"
                                    :loading="autocomplete.loading"
                                    :items="autocomplete.items"
                                    item-text="name"
                                    item-value="id"
                                    placeholder="Search..."
                                    label="Raw Items"
                                    hint="Click the add button after selecting your preferred raw item."
                                    persistent-hint
                                    return-object
                                    autofocus
                                    clearable
                                    open-on-clear
                                    color="pink accent-1"
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col sm="12">
                                <v-data-table
                                    :headers="assembled.headers"
                                    :items="assembled.items"
                                    :loading="assembled.loading"
                                    @click:row="showEditDialog"
                                >
                                    <template #item.id="{item}">
                                        RI -
                                        {{
                                            item.id.toString().padStart(4, "0")
                                        }}
                                    </template>
                                    <template #item.units_needed="{item}">
                                        {{ item.units_needed }}
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
        "app-assembled-products": () => import("./assembled/products"),
        "app-raw-menu": () => import("./raw/rawMenu"),
        "app-raw-converted-units": () => import("./raw/rawConvertedUnits"),
        "app-assembled-qrcode": () => import("qrcode.vue")
    },
    data() {
        return {
            selected: false,
            dialog: {
                action: "Add",
                show: false,
                loading: false,
                category_name: null,
                raw_name: null,
                raw_id: 0,
                product_id: 0,
                quantity: null,
                convert_collection: [],
                convert_name: null,
                convert_value: 1,
                base_name: null
            },
            product_name: null,
            autocomplete: {
                selected: null,
                items: [],
                loading: false,
                name: null
            },
            assembled: {
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
                        value: "units_needed",
                        align: "end"
                    }
                ],
                items: [],
                loading: false
            },
            rawItemsReady: false,
            duplicateAttach: false,
            qr_code: null
        };
    },
    mounted() {
        this.getAutocompleteRawItems();
    },
    methods: {
        showAddDialog() {
            if (this.autocomplete.selected) {
                console.log(this.autocomplete);
                console.log(this.dialog);
                this.dialog.action = "Add";
                this.dialog.category_name = this.autocomplete.selected.category.name;
                this.dialog.raw_name = this.autocomplete.selected.name;
                this.dialog.raw_id = this.autocomplete.selected.id;
                this.dialog.base_name = this.autocomplete.selected.base.name;
                this.dialog.show = true;
            } else {
                this.$store.commit("showSnackbar", {
                    color: false,
                    text: "Please select raw item first."
                });
            }
        },
        async showEditDialog(item) {
            this.assembled.loading = true;
            await this.getConvertByBase(item.base_id);
            this.dialog.action = "Update";
            this.dialog.category_name = item.category.name;
            this.dialog.raw_name = item.name;
            this.dialog.raw_id = item.id;
            this.dialog.base_name = item.base.name;
            this.dialog.quantity = item.pivot.quantity;
            this.assembled.loading = false;
            this.dialog.show = true;
        },
        async processAddAndUpdate() {
            if (this.dialog.action == "Add") {
                await this.attach();
            } else {
                await this.updateAttach();
            }
        },
        async processRemove() {
            this.assembled.loading = true;
            await axios
                .post("/products/assembled/detach", this.dialog)
                .then(response => {
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `${this.dialog.raw_name} removed.`
                    });
                    this.assembled.items = response.data.product.map(raw => {
                        raw.units_needed = raw.pivot.quantity;
                        return raw;
                    });
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                });
            this.assembled.loading = false;
            this.dialog.show = false;
        },
        async attach() {
            this.checkForDuplicates();
            if (!this.duplicateAttach) {
                this.dialog.quantity =
                    this.dialog.quantity * this.dialog.convert_value;
                this.assembled.loading = true;
                await axios
                    .post("/products/assembled/attach", this.dialog)
                    .then(response => {
                        this.$store.commit("showSnackbar", {
                            color: true,
                            text: `${this.dialog.raw_name} added.`
                        });
                        this.assembled.items = response.data.product.map(
                            raw => {
                                raw.units_needed = raw.pivot.quantity;
                                return raw;
                            }
                        );
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                            this.$store.commit("errorSnackbar");
                        }
                    });
                this.assembled.loading = false;
                this.dialog.show = false;
            } else {
                this.$store.commit("showSnackbar", {
                    color: false,
                    text: `This raw item already exist.`
                });
            }
        },
        async updateAttach() {
            if (this.dialog.quantity) {
                this.assembled.loading = true;
                await axios
                    .post("/products/assembled/update", this.dialog)
                    .then(response => {
                        this.$store.commit("showSnackbar", {
                            color: true,
                            text: `${this.dialog.raw_name} updated.`
                        });
                        this.assembled.items = response.data.product.map(
                            raw => {
                                raw.units_needed = raw.pivot.quantity;
                                return raw;
                            }
                        );
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                            this.$store.commit("errorSnackbar");
                        }
                    });
                this.assembled.loading = false;
                this.dialog.show = false;
            } else {
                this.$store.commit("showSnackbar", {
                    color: false,
                    text: `Quantity field is required.`
                });
            }
        },
        async getAutocompleteRawItems() {
            await axios
                .post("/products/raw/view")
                .then(response => {
                    this.autocomplete.items = response.data.raw;
                    this.rawItemsReady = true;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                });
        },
        async productselected(item) {
            this.selected = true;
            this.dialog.product_id = item.id;
            this.product_name = item.name;
            this.qr_code = item.qr_code;

            this.autocomplete.selected = null;
            this.assembled.items = [];
            this.assembled.loading = true;

            await axios
                .post("/products/assembled/view", { id: item.id })
                .then(response => {
                    this.assembled.items = response.data.raw.map(raw => {
                        raw.units_needed = raw.pivot.quantity;
                        return raw;
                    });
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                });
            this.assembled.loading = false;
        },
        async getConvertByBase(id) {
            this.dialog.quantity = null;
            await axios
                .post("/units/convertsByBase", {
                    id: id
                })
                .then(response => {
                    this.dialog.convert_collection = response.data.convert;
                    this.dialog.convert_name = this.dialog.convert_collection[0].name;
                    this.dialog.convert_value = this.dialog.convert_collection[0].value;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                });
        },
        checkForDuplicates() {
            this.duplicateAttach = false;
            this.assembled.items.forEach(item => {
                if (this.dialog.raw_id == item.id) {
                    this.duplicateAttach = true;
                }
            });
        },
        selectedconvertquantity(item) {
            this.dialog.convert_name = item.name;
            this.dialog.convert_value = item.value;
        }
    },
    watch: {
        "autocomplete.selected": async function(value, old_value) {
            if (value) {
                this.dialog.loading = true;
                await this.getConvertByBase(this.autocomplete.selected.base_id);
                this.dialog.loading = false;
            }
        }
    }
};
</script>
