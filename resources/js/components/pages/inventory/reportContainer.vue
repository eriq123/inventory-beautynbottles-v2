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
                <v-btn text color="pink accent-2" @click="dialog = !dialog">
                    <v-icon left>mdi-download</v-icon>
                    Download Report
                </v-btn>

                <v-dialog v-model="dialog" max-width="350px">
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
                            <v-btn text @click="dialog = false">Cancel</v-btn>
                            <app-download-excel
                                class="green--text text--darken-3 v-btn v-btn--flat v-btn--text theme--light v-size--default"
                                :name="filename"
                                :header="header"
                                :data="data"
                                :fields="fields"
                                :before-generate="getExcelData"
                                :before-finish="downloadFinished"
                            >
                                Save
                            </app-download-excel>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
        <app-report-datatable
            :toggleState="toggle.state"
            @toggleChange="toggleChange"
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
            filename: null,
            dialog: false,

            date: {
                from: new Date().toISOString(),
                to: new Date().toISOString()
            }
        };
    },
    created() {},
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
        async getExcelData(value) {
            this.prepareHeader();

            await axios
                .post("/inventory/report/download", this.date)
                .then(response => {
                    this.data = response.data.log.map(item => {
                        if (item.raw) {
                            item.code = `RI - ${item.raw.id
                                .toString()
                                .padStart(4, "0")}`;
                            item.name = item.raw.name;
                            item.purchase = item.raw.purchase;
                            item.rts = item.raw.rts;
                            item.units = `${item.raw.quantity} ${item.raw.base.name}`;
                            item.custom_sold = `(${item.raw.sold})`;
                            item.custom_loss = `(${item.raw.loss})`;
                            return item;
                        }
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
                    } else {
                        console.log(error);
                    }
                });
            this.$store.commit("showSnackbar", {
                color: true,
                text: "Downloading..."
            });
        },
        prepareHeader() {
            this.$store.commit("showSnackbar", {
                color: true,
                text: "Please wait while preparing data."
            });
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric"
            };

            const from_date = new Date(this.date.from).toLocaleDateString(
                "en-US",
                options
            );
            const to_date = new Date(this.date.to).toLocaleDateString(
                "en-US",
                options
            );

            this.filename = `Inventory Report ${from_date} - ${to_date}`;
            this.header = `Eshop Beauty and Bottles On;ine Shop\n Inventory Report\n ${from_date} - ${to_date}`;
        },
        downloadFinished() {
            this.dialog = false;
            this.date.from = new Date().toISOString();
            this.date.to = new Date().toISOString();
            this.$store.commit("showSnackbar", {
                color: true,
                text: "Inventory report download finished."
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
