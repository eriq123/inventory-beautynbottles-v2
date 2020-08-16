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
            <v-btn text outlined color="green darken-4" @click="addProduct()">
                Add
            </v-btn>
        </v-card-title>
        <v-card-text>
            <app-autocomplete
                @autocompleteSearch="productSearch"
                @loadingChange="loading = true"
                @nameChange="nameChange"
                @selectedChange="selectedChange"
                :items="product_collection"
                :label="'Product Name'"
                :loading="loading"
                :selected="selectedProduct"
                class="mx-2"
            ></app-autocomplete>
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
    components: {
        "app-autocomplete": () => import("@/components/common/autocomplete.vue")
    },
    data() {
        return {
            code: 0,
            name: null,
            product_collection: [],
            selectedProduct: null,
            loading: false
        };
    },
    methods: {
        addProduct() {
            if (this.name) {
                this.loading = true;
                axios
                    .post("/products/add", { name: this.name })
                    .then(response => {
                        this.$store.commit("showSnackbar", {
                            color: true,
                            text: `${response.data.product.name} added.`
                        });
                        this.loading = false;
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                            this.$store.commit("showSnackbar", {
                                color: false,
                                text: "Something went wrong."
                            });
                        }
                        this.loading = false;
                    });
            } else {
                this.$store.commit("showSnackbar", {
                    color: false,
                    text: "Product name is required."
                });
            }
        },
        deleteProduct() {
            if (this.code) {
                this.loading = true;
                axios
                    .post("/products/delete", {
                        id: this.code
                    })
                    .then(response => {
                        this.selectedProduct = null;
                        this.code = 0;
                        this.name = null;
                        this.$store.commit("showSnackbar", {
                            color: true,
                            text: `${response.data.product.name} deleted.`
                        });
                        this.loading = false;
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                            this.$store.commit("showSnackbar", {
                                color: false,
                                text: "Something went wrong."
                            });
                        }
                        this.loading = false;
                    });
            } else {
                this.$store.commit("showSnackbar", {
                    color: false,
                    text: "Please select product first."
                });
            }
        },
        updateProduct() {
            if (this.name && this.code > 0) {
                this.loading = true;
                axios
                    .post("/products/update", {
                        id: this.code,
                        name: this.name
                    })
                    .then(response => {
                        this.$store.commit("showSnackbar", {
                            color: true,
                            text: `${response.data.product.name} updated.`
                        });
                        this.loading = false;
                    })
                    .catch(error => {
                        if (error.response) {
                            console.log(error.response);
                            this.$store.commit("showSnackbar", {
                                color: false,
                                text: "Something went wrong."
                            });
                        }
                        this.loading = false;
                    });
            } else {
                this.$store.commit("showSnackbar", {
                    color: false,
                    text: "Please select product first."
                });
            }
        },
        productSearch() {
            axios
                .post("/products/search", {
                    name: this.name
                })
                .then(response => {
                    console.log(response.data.product);
                    if (response.data.product.length > 0) {
                        this.product_collection = response.data.product;
                    } else {
                        this.product_collection = [];
                    }
                    this.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        this.$store.commit("showSnackbar", {
                            color: false,
                            text: "Something went wrong."
                        });
                        console.log(error.response);
                    }
                    this.loading = false;
                });
        },
        nameChange(value) {
            this.name = value;
        },
        selectedChange(value) {
            this.selectedProduct = value;
        }
    },
    watch: {
        selectedProduct: function(value) {
            if (value) {
                this.code = value.id;
            } else {
                this.code = 0;
            }
            this.$emit("selectedProduct", value);
        }
    }
};
</script>
