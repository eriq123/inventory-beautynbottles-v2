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
                <v-btn
                    text
                    color="pink accent-2"
                    @click="dialog.show = !dialog.show"
                >
                    <v-icon left>mdi-download</v-icon>
                    Download Report
                </v-btn>

                <v-dialog v-model="dialog.show" max-width="350px">
                    <v-card>
                        <v-card-title>
                            Inventory report
                        </v-card-title>
                        <v-card-text>
                            <app-datepicker
                                :date="date.from"
                                @savedate="savefromdate"
                                :label="`Start Date`"
                            ></app-datepicker>

                            <app-datepicker
                                :date="date.to"
                                @savedate="savetodate"
                                :label="`End Date`"
                            ></app-datepicker>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text @click="dialog.show = false"
                                >Cancel</v-btn
                            >
                            <v-btn text color="green darken-3">
                                Save
                            </v-btn>
                            <!-- <app-download-excel
                                class="green--text text--darken-3 v-btn v-btn--flat v-btn--text theme--light v-size--default"
                                :name="header"
                                :header="header"
                                :data="data"
                                :fields="fields"
                            >
                                Save
                            </app-download-excel> -->
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
        <app-report-datatable
            :toggleState="toggle.state"
            @toggleChange="toggleChange"
            @getExcelData="getExcelData"
        ></app-report-datatable>
    </v-container>
</template>
<script>
import JsonExcel from "vue-json-excel";

export default {
    components: {
        "app-report-datatable": () => import("./report/datatable.vue"),
        "app-download-excel": JsonExcel,
        "app-datepicker": () => import("./report/datepicker.vue")
    },
    data() {
        return {
            toggle: {
                state: false,
                loading: false,
                disabled: false
            },
            fields: {
                Code: "code",
                "Raw Item": "name",
                Purchase: "purchase",
                Rts: "rts",
                Sold: "custom_sold",
                Loss: "custom_loss",
                "Available units": "units"
            },
            data: [],
            header: null,
            dialog: {
                show: false
            },

            date: {
                from: new Date().toISOString(),
                to: new Date().toISOString()
            }
        };
    },
    created() {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        const today = new Date().toLocaleDateString("en-US", options);

        this.header = `Inventory Report ${today}`;
    },
    methods: {
        savefromdate(date) {
            this.date.from = date;
        },
        savetodate(date) {
            this.date.to = date;
        },
        toggleChange(value) {
            this.toggle.disabled = this.toggle.loading = value;
        },
        getExcelData(value) {
            this.data = value.map(item => {
                item.code = `RI - ${item.id.toString().padStart(4, "0")}`;
                item.units = `${item.quantity} ${item.base.name}`;
                item.custom_sold = `(${item.sold})`;
                item.custom_loss = `(${item.loss})`;
                return item;
            });
        }
    },
    computed: {
        switchLabel() {
            return this.toggle.state == true ? "Products" : "Raw Items";
        }
    }
};
</script>
