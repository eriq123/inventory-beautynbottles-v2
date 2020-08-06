<template>
    <v-card outlined>
        <v-card-title>
            Category

            <v-slide-x-reverse-transition>
                <v-chip outlined class="mx-2" v-if="selectedCategory">
                    Code: {{ this.code || 0 }}
                    <v-icon small class="ml-3" @click="selectedCategory = null"
                        >mdi-close</v-icon
                    >
                </v-chip>
            </v-slide-x-reverse-transition>

            <v-spacer></v-spacer>
            <v-btn text outlined color="green darken-4" @click="addCategory()"
                >Add</v-btn
            >
        </v-card-title>
        <v-card-text>
            <v-autocomplete
                :search-input.sync="name"
                :loading="loading"
                :items="category_collection"
                v-model="selectedCategory"
                item-text="name"
                item-value="id"
                return-object
                no-filter
                hide-no-data
                hide-details
                clearable
                outlined
                class="mx-2"
                label="Category Name"
                color="pink accent-1"
            ></v-autocomplete>
        </v-card-text>
        <v-card-actions>
            <v-btn text color="blue darken-3" @click="updateCategory()"
                >Edit</v-btn
            >
            <v-btn text color="red darken-3" @click="deleteCategory()"
                >Delete</v-btn
            >
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: {},
    data() {
        return {
            code: null,
            category_collection: [],
            debounceTimer: 0,
            loading: false,
            name: null,
            selectedCategory: null
        };
    },
    methods: {
        addCategory() {
            // console.log("i am add category method");
            if (this.name) {
                this.loading = true;
                axios
                    .post("/products/category/add", { name: this.name })
                    .then(response => {
                        this.$emit(
                            "showSnackbar",
                            `${response.data.category.name} added.`
                        );
                        // console.log(response.data);
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
                    "Category name is required.",
                    "red darken-1"
                );
            }
        },
        categorySearch() {
            axios
                .post("/products/category/search", {
                    name: this.name
                })
                .then(response => {
                    if (response.data.category.length > 0) {
                        this.category_collection = response.data.category;
                    } else {
                        this.category_collection = [];
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
                    // console.log("i am debounce function.");
                    this.categorySearch();
                    this.loading = false;
                }.bind(this),
                delay
            );
        },
        deleteCategory() {
            console.log("i am delete category method");
            if (this.code) {
                axios
                    .post("/products/category/delete", {
                        id: this.code
                    })
                    .then(response => {
                        this.selectedCategory = null;
                        this.code = 0;
                        this.name = null;
                        this.$emit(
                            "showSnackbar",
                            `${response.data.category.name} deleted.`
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
                    "Please select category first.",
                    "red darken-1"
                );
            }
        },
        updateCategory() {
            if (this.name && this.code > 0) {
                axios
                    .post("/products/category/update", {
                        id: this.code,
                        name: this.name
                    })
                    .then(response => {
                        console.log(response.data);

                        this.$emit(
                            "showSnackbar",
                            `${response.data.category.name} updated.`
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
                    "Please select category first.",
                    "red darken-1"
                );
            }
        }
    },
    watch: {
        name(value) {
            this.debounceSearch();
        },
        selectedCategory(value) {
            if (value) {
                this.code = value.id;
            } else {
                this.code = 0;
            }
            this.$emit("selectedCategory", value);
        }
    }
};
</script>
