<template>
    <v-container>
        <v-row>
            <v-col sm="12" md="12">
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
                <vue-excel-xlsx
                    v-if="!toggle.state"
                    type="button"
                    class="pink--text text--accent-2 v-btn v-btn--flat v-btn--text theme--light v-size--default"
                    :data="excelData"
                    :columns="columns"
                    :filename="filename"
                    :sheetname="filename"
                >
                    Download report
                </vue-excel-xlsx>
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
export default {
    components: {
        "app-report-datatable": () => import("./report/datatable.vue")
    },
    data() {
        return {
            toggle: {
                state: false,
                loading: false,
                disabled: false
            },
            filename: "Eshop Beauty N Bottles",

            columns: [
                {
                    label: "Code",
                    field: "code"
                },
                {
                    label: "Raw Item",
                    field: "name"
                },
                {
                    label: "Purchase",
                    field: "purchase"
                },
                {
                    label: "RTS",
                    field: "rts"
                },
                {
                    label: "Sold",
                    field: "custom_sold"
                },
                {
                    label: "Loss",
                    field: "custom_loss"
                },
                {
                    label: "Available Units",
                    field: "units"
                }
            ],
            data: [],
            excelData: []
        };
    },
    methods: {
        toggleChange(value) {
            this.toggle.disabled = this.toggle.loading = value;
        },
        getExcelData(value) {
            this.data = value;
            this.excelData = this.data.map(item => {
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
