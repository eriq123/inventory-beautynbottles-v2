<template>
    <v-row>
        <v-col sm="10" offset-sm="1">
            <v-card flat>
                <v-card-title>
                    Category
                    <v-btn
                        text
                        outlined
                        color="green darken-4"
                        class="ml-3"
                        @click="showAddForm"
                    >
                        Add
                    </v-btn>
                </v-card-title>

                <v-data-table
                    :headers="headers"
                    :items="items"
                    :loading="loading"
                    @click:row="showRawItems"
                >
                    <template #item.id="{item}">
                        CI - {{ item.id.toString().padStart(4, "0") }}
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
                            @click.stop="deleteProcess(item)"
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
                                    label="Category Name"
                                    v-model="formData.category_name"
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
    components: {},
    data() {
        return {
            headers: [
                {
                    text: "Code",
                    align: "start",
                    value: "id"
                },
                {
                    text: "Category Name",
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
                category_name: null
            },
            itemIndex: -1
        };
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        getCategories() {
            this.loading = true;
            axios
                .post("/products/category/view")
                .then(response => {
                    this.items = response.data.category;
                    this.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                    this.loading = false;
                });
        },
        showAddForm() {
            this.formData.action = "add";
            this.formData.id = 0;
            this.formData.category_name = null;
            this.itemIndex = -1;
            this.showForm = true;
        },
        showUpdateForm(item) {
            this.formData.action = "update";
            this.formData.id = item.id;
            this.formData.category_name = item.name;
            this.itemIndex = this.items.indexOf(item);
            this.showForm = true;
        },
        deleteProcess(item) {
            if (item.id) {
                if (confirm(`Are you sure you want to delete ${item.name}`)) {
                    this.loading = true;
                    axios
                        .post("/products/category/delete", {
                            id: item.id
                        })
                        .then(response => {
                            this.$store.commit("showSnackbar", {
                                color: true,
                                text: `${response.data.category.name} deleted.`
                            });
                            this.itemIndex = this.items.indexOf(item);
                            this.items.splice(this.itemIndex, 1);
                            this.loading = false;
                            this.showForm = false;
                        })
                        .catch(error => {
                            if (error.response) {
                                console.log(error.response);
                                this.$store.commit("errorSnackbar");
                            }
                            this.loading = false;
                        });
                }
            } else {
                this.$store.commit("errorSnackbar");
            }
        },
        submitForm() {
            if (this.formData.category_name) {
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
                    text: "Category name is required."
                });
            }
        },
        processAdd() {
            axios
                .post("/products/category/add", {
                    name: this.formData.category_name
                })
                .then(response => {
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `${response.data.category.name} added.`
                    });
                    console.log(response.data.category);
                    this.items.push(response.data.category);
                    this.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                    this.loading = false;
                });
        },
        processUpdate() {
            axios
                .post("/products/category/update", {
                    id: this.formData.id,
                    name: this.formData.category_name
                })
                .then(response => {
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `${response.data.category.name} updated.`
                    });
                    Object.assign(
                        this.items[this.itemIndex],
                        response.data.category
                    );
                    this.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                    this.loading = false;
                });
        },
        showRawItems(item) {
            this.$emit("showrawitems", item);
        }
    },
    computed: {
        customID: function() {
            return this.formData.id > 0
                ? `CI - ${this.formData.id.toString().padStart(4, "0")}`
                : "N/A";
        }
    }
};
</script>
