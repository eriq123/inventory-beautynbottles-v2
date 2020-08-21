<template>
    <v-card flat>
        <v-card-title>
            Assemble
            <v-dialog v-model="showForm" max-width="400px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        text
                        outlined
                        color="green darken-4"
                        class="ml-3"
                        @click="addDialog()"
                        v-bind:disabled="!autocomplete"
                        v-bind="attrs"
                        v-on="on"
                        >Add</v-btn
                    >
                </template>

                <v-card>
                    <v-card-title>
                        <span class="headline">Add</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        disabled
                                        type="text"
                                        label="Product"
                                        :value="selectedName"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" class="pa-0">
                                    <app-autocomplete
                                        @autocompleteSearch="rawSearch"
                                        @loadingChange="
                                            autocompleteLoading = true
                                        "
                                        @nameChange="nameChange"
                                        @selectedChange="selectedChange"
                                        :items="raw_collection"
                                        :label="'Raw item'"
                                        :loading="autocompleteLoading"
                                        :selected="selectedRaw"
                                    ></app-autocomplete>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        type="number"
                                        label="Units needed"
                                        v-model="formData.quantity"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="showForm = false">Cancel</v-btn>
                        <v-btn
                            text
                            color="green darken-3"
                            @click="saveAssemble()"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-spacer></v-spacer>

            <app-raw-info
                :message="'Click on table row to remove an item.'"
            ></app-raw-info>
        </v-card-title>

        <v-data-table
            :headers="headers"
            :items="assembledItems"
            :loading="datatable.loading"
            @click:row="deleteProduct"
        >
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    components: {
        "app-autocomplete": () =>
            import("@/components/common/autocomplete.vue"),
        "app-raw-info": () => import("@/components/common/infoTooltip")
    },
    props: {
        autocomplete: {
            type: Boolean
        },
        selectedName: {
            type: String
        },
        selectedID: {
            type: Number
        }
    },
    data() {
        return {
            selectedRaw: null,

            resetForm: {
                product_id: null,
                raw_id: null,
                quantity: null
            },
            formData: {
                product_id: null,
                raw_id: null,
                quantity: null
            },

            // datatable
            assembledItems: [],
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
                    text: "Units needed",
                    value: "units_needed"
                }
            ],
            datatable: {
                loading: false,
                assembledIndex: null
            },
            // dialog
            showForm: false,

            // autocomplete
            raw_collection: [],
            autocompleteLoading: false,
            raw_name: null
        };
    },
    methods: {
        addDialog() {
            this.closeReset();
            this.formData.product_id = this.selectedID;
        },
        closeReset() {
            this.formData = Object.assign({}, this.resetForm);
            this.selectedRaw = null;
            this.raw_name = null;
        },
        getOrFilterAssembled() {
            this.datatable.loading = true;
            axios
                .post("/products/assembled/view", {
                    id: this.selectedID
                })
                .then(response => {
                    this.assembledItems = response.data.raw.map(raw => {
                        raw.units_needed = raw.pivot.quantity;
                        return raw;
                    });
                    this.datatable.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                });
        },
        nameChange(value) {
            this.raw_name = value;
        },
        rawSearch() {
            axios
                .post("/products/raw/search", {
                    name: this.raw_name
                })
                .then(response => {
                    if (response.data.raw.length > 0) {
                        this.raw_collection = response.data.raw;
                    } else {
                        this.raw_collection = [];
                    }
                    this.autocompleteLoading = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                    this.autocompleteLoading = false;
                });
        },

        saveAssemble() {
            if (this.formData.quantity) {
                axios
                    .post("/products/assembled/attach", this.formData)
                    .then(response => {
                        const raw = {
                            id: this.formData.raw_id,
                            name: this.raw_name,
                            units_needed: this.formData.quantity
                        };
                        this.assembledItems.push(raw);
                        this.$store.commit("showSnackbar", {
                            color: true,
                            text: `${this.raw_name} added.`
                        });
                        this.showForm = false;
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                            this.$store.commit("errorSnackbar");
                        }
                    });
            } else {
                this.$store.commit("showSnackbar", {
                    color: false,
                    text: "Units needed field is required."
                });
            }
        },
        selectedChange(value) {
            this.selectedRaw = value;
            if (value) {
                this.formData.raw_id = value.id;
            } else {
                this.formData.raw_id = null;
            }
        },
        deleteProduct(item) {
            const assembledIndex = this.assembledItems.indexOf(item);
            this.formData.product_id = this.selectedID;
            this.formData.raw_id = item.id;
            this.datatable.loading = true;
            axios
                .post("/products/assembled/detach", this.formData)
                .then(response => {
                    console.log(response.data);
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `${item.name} removed.`
                    });
                    this.assembledItems.splice(assembledIndex, 1);
                    this.datatable.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                });
        }
    },
    computed: {},
    watch: {
        selectedID: function(value) {
            this.getOrFilterAssembled();
        }
    }
};
</script>
