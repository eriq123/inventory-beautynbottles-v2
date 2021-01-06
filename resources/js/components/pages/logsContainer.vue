<template>
    <v-container>
        <v-row>
            <v-col md="10" offset-md="1">
                <v-card flat>
                    <v-card-title>
                        Action Logs
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="items"
                        :loading="loading"
                        :search="search"
                    >
                        <template v-slot:top>
                            <datatable-search
                                v-model="search"
                            ></datatable-search>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    components: {
        "datatable-search": () => import("@/components/common/datatable-search")
    },
    data() {
        return {
            search: null,
            headers: [
                ,
                {
                    text: "YYYY-MM-DD",
                    value: "created_at"
                },
                {
                    text: "Code",
                    value: "custom_id"
                },
                {
                    text: "Raw item",
                    align: "start",
                    value: "raw.name"
                },
                {
                    text: "Quantity",
                    value: "custom_quantity"
                },
                {
                    text: "Action",
                    value: "status"
                },
                {
                    text: "User",
                    align: "start",
                    value: "full_name"
                }
            ],
            items: [],
            loading: false
        };
    },
    created() {
        this.getLogs();
    },
    methods: {
        getLogs() {
            this.loading = true;
            axios
                .post("/logs/view")
                .then(response => {
                    this.items = response.data.log;
                    this.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                    this.loading = false;
                });
        }
    }
};
</script>
