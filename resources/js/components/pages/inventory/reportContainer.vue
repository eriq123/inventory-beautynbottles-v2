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
                <app-download-excel
                    class="pink--text text--accent-2 v-btn v-btn--flat v-btn--text theme--light v-size--default"
                    :name="header"
                    :header="header"
                    :data="data"
                    :fields="fields"
                >
                    Download report
                </app-download-excel>
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
        "app-download-excel": JsonExcel
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
            header: null
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
