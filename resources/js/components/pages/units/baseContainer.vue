<template>
    <v-container>
        <v-row>
            <v-col sm="10" offset-sm="1">
                <v-card flat>
                    <v-card-title>
                        <span class="mr-1">Units of Measurement:</span>

                        <app-menu
                            :menu="items"
                            :selected="menu.name"
                            @selectedmenu="selectunitsofmeasurement"
                        ></app-menu>

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
                    <v-card-text>
                        <v-row>
                            <v-col sm="12">
                                <v-data-table
                                    :headers="headers"
                                    :items="items"
                                    :loading="loading"
                                    @click:row="showConverts"
                                >
                                    <template #item.id="{item}">
                                        UNIT -
                                        {{
                                            item.id.toString().padStart(4, "0")
                                        }}
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
                                                    label="Unit Name"
                                                    v-on:keyup.enter="
                                                        submitForm
                                                    "
                                                    v-model="formData.base_name"
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
                                                    @click.stop="
                                                        showForm = !showForm
                                                    "
                                                >
                                                    Cancel
                                                </v-btn>
                                            </td>
                                        </tr>
                                    </template>
                                </v-data-table>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {
    "app-menu": () => import("@/components/common/menu"),
    },
    data() {
        return {
            headers: [
                {
                    text: "Code",
                    align: "start",
                    value: "id"
                },
                {
                    text: "Unit Name",
                    value: "name"
                },
                {
                    text: "Actions",
                    value: "actions"
                }
            ],
            items: [],
            loading: false,

            showForm: false,
            deleteForm: false,
            formData: {
                action: null,
                id: 0,
                base_name: null
            },
            itemIndex: -1,

            menu: {
                id: 0,
                name: null
            }
        };
    },
    mounted() {
        this.getBaseUnits();
    },
    methods: {
        selectunitsofmeasurement(item) {
            this.menu.id = item.id;
            this.menu.name = item.name;
        },
        getBaseUnits() {
            this.loading = true;
            axios
                .post("/units/base/view")
                .then(response => {
                    this.items = response.data.base;
                    this.resetMenu();
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
            this.formData.base_name = null;
            this.itemIndex = -1;
            this.showForm = true;
        },
        showUpdateForm(item) {
            this.formData.action = "update";
            this.formData.id = item.id;
            this.formData.base_name = item.name;
            this.itemIndex = this.items.indexOf(item);
            this.showForm = true;
        },
        deleteProcess(item) {
            if (item.id) {
                if (confirm(`Are you sure you want to delete ${item.name}`)) {
                    this.loading = true;
                    axios
                        .post("/units/base/delete", {
                            id: item.id
                        })
                        .then(response => {
                            this.$store.commit("showSnackbar", {
                                color: true,
                                text: `${response.data.base.name} deleted.`
                            });
                            this.itemIndex = this.items.indexOf(item);
                            this.items.splice(this.itemIndex, 1);
                            this.loading = false;
                            this.showForm = false;

                            if (this.menu.id == response.data.base.id) {
                                this.resetMenu();
                            }
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
            if (this.formData.base_name) {
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
                    text: "Unit name is required."
                });
            }
        },
        processAdd() {
            axios
                .post("/units/base/add", {
                    name: this.formData.base_name
                })
                .then(response => {
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `${response.data.base.name} added.`
                    });
                    this.items.push(response.data.base);
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
                .post("/units/base/update", {
                    id: this.formData.id,
                    name: this.formData.base_name
                })
                .then(response => {
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `${response.data.base.name} updated.`
                    });
                    Object.assign(
                        this.items[this.itemIndex],
                        response.data.base
                    );
                    this.loading = false;

                    if (response.data.base.id == this.menu.id) {
                        this.menu.name = response.data.base.name;
                    }
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$store.commit("errorSnackbar");
                    }
                    this.loading = false;
                });
        },
        resetMenu() {
            this.menu.id = this.items[0].id;
            this.menu.name = this.items[0].name;
        },
        showConverts(item) {
            this.$emit("showconverts", item);
        }
    },
    computed: {
        customID: function() {
            return this.formData.id > 0
                ? `UNIT - ${this.formData.id.toString().padStart(4, "0")}`
                : "N/A";
        }
    }
};
</script>
