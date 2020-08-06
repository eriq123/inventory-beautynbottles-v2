<template>
    <v-card outlined>
        <v-card-title>
            Product

            <v-slide-x-reverse-transition>
                <v-chip outlined class="mx-2" v-if="selectedProduct">
                    Code: {{ this.code || 0 }}
                    <v-icon small class="ml-3" @click="selectedProduct = null"
                        >mdi-close</v-icon
                    >
                </v-chip>
            </v-slide-x-reverse-transition>

            <v-spacer></v-spacer>
            <v-btn text outlined color="green darken-4" @click="addProduct()"
                >Add</v-btn
            >
        </v-card-title>
        <v-card-text>
            <v-autocomplete
                :search-input.sync="name"
                :loading="loading"
                :items="product_collection"
                v-model="selectedProduct"
                item-text="name"
                item-value="id"
                return-object
                no-filter
                hide-no-data
                hide-details
                clearable
                outlined
                class="mx-2"
                label="Product Name"
                color="pink accent-1"
            ></v-autocomplete>
        </v-card-text>
        <v-card-actions>
            <v-btn text color="blue darken-3" @click="updateProduct()"
                >Edit</v-btn
            >
            <v-btn text color="red darken-3" @click="deleteProduct()"
                >Delete</v-btn
            >
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            code: null,
            loading: false,
            name: null,
            product_collection: [],
            selectedProduct: null,
            debounceTimer: 0
        };
    },
    methods: {
        addProduct() {
            if (this.name) {
                this.loading = true;
                axios
                    .post("/products/add", { name: this.name })
                    .then(response => {
                        console.log(response);
                        this.$emit(
                            "showSnackbar",
                            `${response.data.product.name} added.`
                        );
                        this.loading = false;
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                            this.$emit(
                                "showSnackbar",
                                "Something went wrong.",
                                "red darken-1"
                            );
                        }
                        this.loading = false;
                    });
            } else {
                this.$emit(
                    "showSnackbar",
                    "Product name is required.",
                    "red darken-1"
                );
            }
        },
        deleteProduct() {
            if (this.code) {
                axios
                    .post("/products/delete", {
                        id: this.code
                    })
                    .then(response => {
                        this.selectedProduct = null;
                        this.code = 0;
                        this.name = null;
                        this.$emit(
                            "showSnackbar",
                            `${response.data.product.name} deleted.`
                        );
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                            this.$emit(
                                "showSnackbar",
                                "Something went wrong.",
                                "red darken-1"
                            );
                        }
                    });
            } else {
                this.$emit(
                    "showSnackbar",
                    "Please select product first.",
                    "red darken-1"
                );
            }
        },
        updateProduct() {
            if (this.name && this.code > 0) {
                axios
                    .post("/products/update", {
                        id: this.code,
                        name: this.name
                    })
                    .then(response => {
                        console.log(response.data);

                        this.$emit(
                            "showSnackbar",
                            `${response.data.product.name} updated.`
                        );
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);

                            this.$emit(
                                "showSnackbar",
                                "Something went wrong.",
                                "red darken-1"
                            );
                        }
                    });
            } else {
                this.$emit(
                    "showSnackbar",
                    "Please select product first.",
                    "red darken-1"
                );
            }
        },
        productSearch() {
            axios
                .post("/products/search", {
                    name: this.name
                })
                .then(response => {
                    if (response.data.product.length > 0) {
                        this.product_collection = response.data.product;
                    } else {
                        this.product_collection = [];
                    }
                })
                .catch(error => {
                    if (error.response) {
                        this.$emit(
                            "showSnackbar",
                            "Something went wrong.",
                            "red darken-1"
                        );
                        console.log(error.response);
                    }
                });
        },
        debounceSearch(delay = 300) {
            clearTimeout(this.debounceTimer);
            this.loading = true;

            this.debounceTimer = setTimeout(
                function() {
                    this.productSearch();
                    this.loading = false;
                }.bind(this),
                delay
            );
        }
    },

    watch: {
        name(value) {
            this.debounceSearch();
        },
        selectedProduct(value) {
            if (value) {
                this.code = value.id;
            } else {
                this.code = 0;
            }
            // this.$emit("selectedProduct", value);
        }
    }
};
</script>
