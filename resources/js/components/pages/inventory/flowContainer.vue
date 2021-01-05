<template>
    <v-container>
        <v-row>
            <v-col>
                <v-switch
                    class="ml-3"
                    v-model="toggle.state"
                    inset
                    ripple
                    :disabled="toggle.disabled"
                    :loading="toggle.disabled"
                    :label="`Filtered by: ${switchLabel}`"
                >
                </v-switch>
                <app-flow-datatable
                    :toggleState="toggle.state"
                    @toggleChange="toggleChange"
                    @datatableclick="datatableclick"
                    :updatedItem="updatedItem"
                >
                </app-flow-datatable>
                <app-flow-dialog
                    :title="dialog.title"
                    :action="dialog.action"
                    :dialogShow="dialog.show"
                    @dialogshowchange="dialog.show = false"
                    :switchState="dialog.toggle"
                    @togglechangestate="dialog.toggle = !dialog.toggle"
                    @saveproductraw="saveproductraw"
                    :id="dialog.id"
                    :toggleState="toggle.state"
                >
                    <template #quantity>
                        <v-col sm="8" v-if="toggle.state">
                            <v-text-field
                                autofocus
                                type="number"
                                label="Quantity"
                                v-model="dialog.quantity"
                            ></v-text-field>
                        </v-col>
                        <v-row v-if="!toggle.state">
                            <v-col cols="6">
                                <v-text-field
                                    type="number"
                                    label="Quantity"
                                    v-model="dialog.quantity"
                                    :loading="dialog.loading"
                                >
                                    <template #append-outer>
                                        <app-raw-menu
                                            :menu="convert.collection"
                                            :selected="convert.name"
                                            @selectedmenu="selectedmenu"
                                        ></app-raw-menu>
                                    </template>
                                </v-text-field>
                            </v-col>

                            <v-col cols="6">
                                <app-raw-converted-units
                                    :value="dialog.quantity"
                                    :convertValue="convert.value"
                                    :formDataBaseName="dialog.base_name"
                                ></app-raw-converted-units>
                            </v-col>
                        </v-row>
                    </template>
                </app-flow-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    components: {
        "app-flow-datatable": () => import("./flow/datatable.vue"),
        "app-flow-dialog": () => import("./flow/dialog.vue"),
        "app-raw-menu": () => import("../products/raw/rawMenu"),
        "app-raw-converted-units": () =>
            import("../products/raw/rawConvertedUnits")
    },
    data() {
        return {
            toggle: {
                state: false,
                loading: false,
                disabled: false
            },

            dialog: {
                show: false,
                toggle: true,

                title: null,
                quantity: null,
                id: 0,
                action: null,
                loading: false,
                base_name: null
            },
            stocks: 0,
            updatedItem: {},
            convert: {
                collection: [],
                name: null,
                value: null
            }
        };
    },
    methods: {
        datatableclick(data) {
            if (this.toggle.state) {
                this.dialog.title = data.item.name;
            } else {
                this.dialog.base_name = data.item.base.name;
                this.dialog.title = `${data.item.category.name} - ${data.item.name}`;
            }
            this.dialog.action = data.action;
            this.dialog.quantity = null;

            this.stocks = data.item.quantity;
            this.dialog.id = data.item.id;

            this.dialog.toggle = this.dialog.show = true;

            this.dialog.loading = true;

            if (!this.toggle.state) {
                axios
                    .post("/units/convert/view", {
                        id: data.item.base_id
                    })
                    .then(response => {
                        this.convert.collection = response.data.convert;
                        if (response.data.convert.length > 0) {
                            this.convert.name = response.data.convert[0].name;
                            this.convert.value = response.data.convert[0].value;
                        } else {
                            this.$store.commit("showSnackbar", {
                                color: false,
                                text:
                                    "Sub-unit is required. Please add one then try again."
                            });
                        }

                        this.dialog.loading = false;
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                            if (error.response.data.error_message) {
                                this.$store.commit("showSnackbar", {
                                    color: false,
                                    text: error.response.data.error_message
                                });
                            } else {
                                this.$store.commit("errorSnackbar");
                            }
                        } else {
                            console.log(error);
                        }
                    });
            }
        },
        selectedmenu(item) {
            this.convert.name = item.name;
            this.convert.value = item.value;
        },
        saveproductraw(form) {
            const formData = {
                id: form.id,
                status: form.status,
                action: form.action,
                type: this.switchLabel
            };

            if (this.toggle.state) {
                formData.quantity = this.dialog.quantity;
            } else {
                formData.quantity = this.dialog.quantity * this.convert.value;
            }

            axios
                .post("/inventory/flow/store", formData)
                .then(response => {
                    console.log(response.data);
                    if (!this.toggle.state) {
                        this.updatedItem = response.data.raw;
                    }

                    this.dialog.show = false;
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `Record has been updated!`
                    });
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        if (error.response.data.error_message) {
                            this.$store.commit("showSnackbar", {
                                color: false,
                                text: error.response.data.error_message
                            });
                        } else {
                            this.$store.commit("errorSnackbar");
                        }
                    }
                });
        },
        toggleChange(value) {
            this.toggle.disabled = this.toggle.loading = value;
        }
    },
    computed: {
        switchLabel() {
            return this.toggle.state == true ? "Products" : "Raw Items";
        }
    }
};
</script>
