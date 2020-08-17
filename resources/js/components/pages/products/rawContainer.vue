<template>
    <v-container>
        <app-raw-category
            @showrawitems="showrawitems"
            v-if="!selected"
        ></app-raw-category>
        <v-row v-if="selected">
            <v-col>
                <v-card flat>
                    <app-raw-dialog></app-raw-dialog>
                    <v-card-title>
                        {{ this.category.name }} raw items
                        <v-btn
                            text
                            outlined
                            color="green darken-4"
                            class="ml-3"
                            @click="showAddForm"
                        >
                            Add
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn text @click="selected = false">
                            Back to categories
                        </v-btn>
                    </v-card-title>

                    <v-data-table
                        :headers="headers"
                        :items="items"
                        :loading="loading"
                    >
                        <template #item.id="{item}">
                            RI - {{ item.id.toString().padStart(4, "0") }}
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
        "app-raw-category": () => import("./raw/category")
    },
    data() {
        return {
            selected: false,
            category: {},

            showForm: false,
            formData: {
                action: null,
                id: 0,
                name: null
            },

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
                    text: "Quantity",
                    value: "quantity"
                },
                {
                    text: "Description",
                    value: "unit"
                },
                {
                    text: "Reorder Point",
                    value: "reorder_point"
                }
            ],
            loading: false,
            items: [],
            itemIndex: -1
        };
    },
    mounted() {},
    methods: {
        showrawitems(item) {
            this.selected = true;
            this.category = item;
            this.loading = true;
            axios
                .post("/products/raw/view", {
                    id: this.category.id
                })
                .then(response => {
                    this.items = response.data.raw;
                    this.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.errorAlert();
                    }
                    this.loading = false;
                });
        },
        showAddForm() {},
        errorAlert() {
            this.$store.commit("showSnackbar", {
                color: false,
                text: "Something went wrong."
            });
        }
    },
    computed: {
        customID: function() {
            return this.formData.id > 0
                ? `RI - ${this.formData.id.toString().padStart(4, "0")}`
                : "N/A";
        }
    }
};
</script>
