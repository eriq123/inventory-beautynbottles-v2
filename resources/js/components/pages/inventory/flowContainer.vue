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
                >
                    <template #quantity>
                        <v-text-field
                            autofocus
                            type="number"
                            label="Quantity"
                            v-model="dialog.quantity"
                        ></v-text-field>
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
        "app-flow-dialog": () => import("./flow/dialog.vue")
    },
    data() {
        return {
            toggle: {
                state: true,
                loading: false,
                disabled: false
            },

            dialog: {
                show: false,
                toggle: true,

                title: null,
                quantity: null,
                id: 0,
                action: null
            },
            stocks: 0,
            updatedItem: {}
        };
    },
    methods: {
        datatableclick(data) {
            if (this.toggle.state) {
                this.dialog.title = data.item.name;
            } else {
                this.dialog.title = `${data.item.category.name} - ${data.item.name}`;
            }
            this.dialog.action = data.action;
            this.dialog.quantity = null;

            this.stocks = data.item.quantity;
            this.dialog.id = data.item.id;

            this.dialog.toggle = this.dialog.show = true;
        },
        saveproductraw(form) {
            const formData = {
                id: form.id,
                quantity: this.dialog.quantity,
                status: form.status,
                action: form.action,
                type: this.switchLabel
            };

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
