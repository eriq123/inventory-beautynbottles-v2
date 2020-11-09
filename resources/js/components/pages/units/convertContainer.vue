<template>
    <v-container>
        <app-base-unit
            @showconverts="showconverts"
            v-if="!selected"
        ></app-base-unit>

        <v-row v-if="selected">
            <v-col sm="10" offset-sm="1">
                <v-card flat>
                    <v-card-title>
                        {{ this.base_name }}

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
                            <v-icon left>mdi-arrow-left</v-icon>
                            Back to units of measurement
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col sm="12">
                                <v-data-table
                                    :headers="headers"
                                    :items="items"
                                    :loading="loading"
                                >
                                    <template #item.id="{item}">
                                        SUB-UNIT -
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
                                                    v-model="formData.name"
                                                ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field
                                                    type="number"
                                                    label="Quantity"
                                                    v-on:keyup.enter="
                                                        submitForm
                                                    "
                                                    v-model="formData.value"
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
        "app-base-unit": () => import("./baseContainer")
    },
    data() {
        return {
            selected: false,
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
                    text: "Quantity",
                    value: "value",
                    align: "end"
                },
                {
                    text: "Actions",
                    value: "actions"
                }
            ],
            items: [],
            loading: false,
            formData: {
                id: 0,
                base_id: 0,
                name: null,
                value: null,
                action: "add"
            },
            itemIndex: -1,
            showForm: false,

            base_name: null
        };
    },
    methods: {
        showAddForm() {
            this.formData.action = "add";
            this.formData.id = 0;
            this.formData.name = null;
            this.formData.value = null;
            this.itemIndex = -1;
            this.showForm = true;
        },
        showUpdateForm(item) {
            this.formData.action = "update";
            this.formData.id = item.id;
            this.formData.name = item.name;
            this.formData.value = item.value;
            this.itemIndex = this.items.indexOf(item);
            this.showForm = true;
        },
        deleteProcess(item) {
            if (item.id) {
                if (confirm(`Are you sure you want to delete ${item.name}`)) {
                    this.loading = true;
                    axios
                        .post("/units/convert/delete", {
                            id: item.id
                        })
                        .then(response => {
                            this.$store.commit("showSnackbar", {
                                color: true,
                                text: `${response.data.convert.name} deleted.`
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
            if (this.formData.name && this.formData.value >= 0) {
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
                .post("/units/convert/add", this.formData)
                .then(response => {
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `${response.data.convert.name} added.`
                    });
                    this.items.push(response.data.convert);
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
                .post("/units/convert/update", this.formData)
                .then(response => {
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `${response.data.convert.name} updated.`
                    });
                    Object.assign(
                        this.items[this.itemIndex],
                        response.data.convert
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
        showconverts(item) {
            this.selected = true;
            this.formData.base_id = item.id;
            this.base_name = item.name;
            this.loading = true;
            axios
                .post("/units/convert/view", {
                    id: this.formData.base_id
                })
                .then(response => {
                    this.items = response.data.convert;
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
    },
    computed: {
        customID: function() {
            return this.formData.id > 0
                ? `SUB-UNIT - ${this.formData.id.toString().padStart(4, "0")}`
                : "N/A";
        }
    }
};
</script>
