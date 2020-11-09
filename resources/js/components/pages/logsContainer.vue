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
                    >
                        <template #item.user="{item}">
                            {{ item.user.first_name }}
                            {{ item.user.last_name }}
                        </template>
                        <template #item.date="{item}">
                            {{ item.created_at }}
                        </template>
                        <template #item.custom_quantity="{item}">
                            {{ item.quantity }} {{ item.raw.base.name }}
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            headers: [
                ,
                {
                    text: "YYYY-MM-DD",
                    value: "date"
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
                    value: "user"
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
