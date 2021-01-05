<template>
    <v-row>
        <v-col sm="10" offset-sm="1">
            <v-card flat>
                <v-card-title>
                    Products
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

                    <v-btn text color="pink accent-2" @click="productQR">
                        <v-icon left>mdi-qrcode-scan</v-icon>
                        Assembled Product qr codes
                    </v-btn>
                </v-card-title>

                <v-data-table
                    :headers="headers"
                    :items="items"
                    :loading="loading"
                    :search="search"
                    @click:row="productSelected"
                >
                    <template v-slot:top>
                        <datatable-search v-model="search"></datatable-search>
                    </template>
                    <template #item.id="{item}">
                        AP - {{ item.id.toString().padStart(4, "0") }}
                    </template>
                    <template #item.actions="{item}">
                        <v-btn
                            text
                            color="blue darken-4"
                            @click.stop="showUpdateForm(item)"
                            >Update</v-btn
                        >
                        <v-btn
                            text
                            color="red darken-4"
                            @click.stop="processDelete(item)"
                            >Delete</v-btn
                        >
                    </template>

                    <template #body.prepend v-if="showForm">
                        <tr>
                            <td>
                                {{ customID }}
                            </td>
                            <td>
                                <v-text-field
                                    autofocus
                                    label="Product Name"
                                    v-on:keyup.enter="submitForm"
                                    v-model="formData.product_name"
                                ></v-text-field>
                            </td>
                            <td>
                                <v-btn
                                    text
                                    outlined
                                    color="green darken-4"
                                    class="ml-1 my-1"
                                    @click.stop="submitForm"
                                >
                                    Save
                                </v-btn>
                                <v-btn
                                    text
                                    outlined
                                    class="ml-1 my-1"
                                    @click.stop="showForm = !showForm"
                                >
                                    Cancel
                                </v-btn>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        rawItemsReady: {
            type: Boolean
        }
    },
    components: {
        "datatable-search": () => import("@/components/common/datatable-search")
    },
    data() {
        return {
            search: null,
            headers: [
                {
                    text: "Code",
                    align: "start",
                    value: "id"
                },
                {
                    text: "Product Name",
                    align: "start",
                    value: "name"
                },
                {
                    text: "Actions",
                    value: "actions",
                    sortable: false
                }
            ],
            items: [],
            loading: false,

            showForm: false,
            deleteForm: false,
            formData: {
                action: null,
                id: 0,
                product_name: null
            },
            itemIndex: -1
        };
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        productQR() {
            window.location.href = "/qr/products";
        },
        showAddForm() {
            this.formData.action = "add";
            this.formData.id = 0;
            this.formData.product_name = null;
            this.itemIndex = -1;
            this.showForm = true;
        },
        showUpdateForm(item) {
            this.formData.action = "update";
            this.formData.id = item.id;
            this.formData.product_name = item.name;
            this.itemIndex = this.items.indexOf(item);
            this.showForm = true;
        },
        submitForm() {
            if (this.formData.product_name) {
                this.loading = true;
                if (this.formData.action == "add") {
                    this.processAdd();
                } else {
                    this.processUpdate();
                }
                this.showForm = false;
            } else {
                this.$store.commit("showSnackbar", {
                    color: false,
                    text: "Product name is required."
                });
            }
        },
        async getProducts() {
            this.loading = true;
            await axios
                .post("/products/view")
                .then(response => {
                    this.items = response.data.product;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                });
            this.loading = false;
        },
        async processAdd() {
            await axios
                .post("/products/add", {
                    name: this.formData.product_name
                })
                .then(response => {
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `${response.data.product.name} added.`
                    });
                    console.log(response.data.product);
                    this.items.push(response.data.product);
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                });
            this.loading = false;
        },
        async processUpdate() {
            await axios
                .post("/products/update", {
                    id: this.formData.id,
                    name: this.formData.product_name
                })
                .then(response => {
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `${response.data.product.name} updated.`
                    });
                    Object.assign(
                        this.items[this.itemIndex],
                        response.data.product
                    );
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                });
            this.loading = false;
        },
        async processDelete(item) {
            if (item.id) {
                if (confirm(`Are you sure you want to delete ${item.name}`)) {
                    this.loading = true;
                    await axios
                        .post("/products/delete", {
                            id: item.id
                        })
                        .then(response => {
                            this.$store.commit("showSnackbar", {
                                color: true,
                                text: `${response.data.product.name} deleted.`
                            });
                            this.itemIndex = this.items.indexOf(item);
                            this.items.splice(this.itemIndex, 1);
                            this.showForm = false;
                        })
                        .catch(error => {
                            if (error.response) {
                                console.log(error.response);
                                this.$store.commit("errorSnackbar");
                            }
                        });
                    this.loading = false;
                }
            } else {
                this.$store.commit("errorSnackbar");
            }
        },
        productSelected(item) {
            if (this.rawItemsReady) {
                this.$emit("productselected", item);
            } else {
                this.$store.commit("showSnackbar", {
                    color: false,
                    text: "Raw items are still loading..."
                });
            }
        }
    },
    computed: {
        customID: function() {
            return this.formData.id > 0
                ? `AP - ${this.formData.id.toString().padStart(4, "0")}`
                : "N/A";
        }
    }
};
</script>
