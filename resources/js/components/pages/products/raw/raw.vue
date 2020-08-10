<template>
    <v-card flat>
        <v-card-title>
            Raw Item

            <v-dialog v-model="showForm" max-width="500px">
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

                <app-raw-dialog
                    :dialogCategory="dialog.category"
                    :dialogOperation="dialog.operation"
                    @deleteRaw="deleteRaw"
                    @close="close"
                    @saveUpdateRaw="saveUpdateRaw"
                >
                    <template #dialogForm>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                autofocus
                                label="Name"
                                v-model="formData.name"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                label="Quantity"
                                type="number"
                                v-model="formData.quantity"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field
                                label="Reorder point"
                                type="number"
                                v-model="formData.reorder_point"
                            ></v-text-field>
                        </v-col>
                    </template>
                </app-raw-dialog>
            </v-dialog>

            <v-spacer></v-spacer>

            <app-raw-info
                :message="'Click on table rows to update the record.'"
            ></app-raw-info>

            <v-slide-x-reverse-transition>
                <div v-if="autocomplete">
                    Filtered by: {{ selected.name.toUpperCase() }}
                </div>
            </v-slide-x-reverse-transition>
        </v-card-title>

        <v-data-table
            :headers="headers"
            :items="rawItems"
            :loading="loading"
            @click:row="editDialog"
        >
            <!-- <template v-slot:item.action="{ item }">
                <v-btn text color="blue darken-3" @click="editDialog(item)">
                    Edit
                </v-btn>
            </template> -->
        </v-data-table>
    </v-card>
</template>
<script>
export default {
    components: {
        "app-raw-dialog": () => import("./dialog.vue"),
        "app-raw-info": () => import("@/components/common/infoTooltip")
    },
    props: {
        selected: {
            type: Object
        },
        autocomplete: {
            type: Boolean
        }
    },
    data() {
        return {
            // dialog
            resetForm: {
                category_id: null,
                id: null,
                name: null,
                quantity: null,
                reorder_point: null
            },
            formData: {
                category_id: null,
                id: null,
                name: null,
                quantity: null,
                reorder_point: null
            },
            dialog: {
                operation: null,
                category: null
            },

            showForm: false,

            // datatable
            headers: [
                {
                    text: "Code",
                    align: "start",
                    value: "id"
                },
                {
                    text: "Category",
                    value: "category_name"
                },
                {
                    text: "Name",
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
                // {
                //     text: "Action",
                //     value: "action",
                //     sortable: false
                // }
            ],
            loading: false,
            rawItems: [],

            rawIndex: null
        };
    },
    mounted() {
        this.getOrFilterRaw();
    },
    methods: {
        addDialog() {
            this.closeReset();
            this.dialog.operation = "Add";
            this.dialog.category = this.selected.name;
            this.formData.category_id = this.selected.id;
        },
        closeReset() {
            this.formData = Object.assign({}, this.resetForm);
            this.rawIndex = null;
            this.dialog = {
                operation: null,
                category: null
            };
        },
        close() {
            this.showForm = false;
            this.$nextTick(() => {
                this.closeReset();
            });
        },
        deleteRaw() {
            axios
                .post("/products/raw/delete", {
                    id: this.formData.id
                })
                .then(response => {
                    this.$emit(
                        "showSnackbar",
                        `${response.data.raw.name} deleted.`
                    );
                    this.rawItems.splice(this.rawIndex, 1);
                    this.close();
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                    }
                });
        },
        editDialog(raw) {
            this.closeReset();
            this.rawIndex = this.rawItems.indexOf(raw);
            this.dialog.category = raw.category.name;
            this.formData = raw;
            this.dialog.operation = "Edit";
            this.showForm = true;
        },
        getOrFilterRaw() {
            this.loading = true;
            axios
                .post("/products/raw/view", {
                    id: this.selected.id
                })
                .then(response => {
                    this.rawItems = response.data.raw.map(raw => {
                        raw.category_name = raw.category.name;
                        return raw;
                    });
                    this.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                    }
                });
        },
        saveUpdateRaw() {
            if (this.dialog.operation == "Add") {
                axios
                    .post("/products/raw/add", this.formData)
                    .then(response => {
                        const raw = response.data.raw;
                        raw.category_name = raw.category.name;

                        this.$emit("showSnackbar", `${raw.name} added.`);
                        this.rawItems.push(raw);
                        this.close();
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                        }
                    });
            } else {
                axios
                    .post("/products/raw/update", this.formData)
                    .then(response => {
                        const raw = response.data.raw;
                        raw.category_name = raw.category.name;

                        this.$emit(
                            "showSnackbar",
                            `${raw.name} has been updated.`
                        );
                        Object.assign(this.rawItems[this.rawIndex], raw);
                        this.close();
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                        }
                    });
            }
        }
    },
    watch: {
        selected: function(value) {
            this.getOrFilterRaw();
        }
    }
};
</script>
