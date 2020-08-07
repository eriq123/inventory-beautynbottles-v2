<template>
    <v-container>
        <v-row>
            <v-col
                sm="8"
                offset-sm="2"
                md="6"
                offset-md="3"
                xl="4"
                offset-xl="4"
            >
                <!-- this is where the product crud would be  -->
                <app-assembled-crud
                    @showSnackbar="showSnackbar"
                ></app-assembled-crud>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <!-- this is where the assembly would happen -->
                <v-card flat>
                    <v-card-title>
                        <v-row>
                            <v-col sm="12" xl="12">
                                Product Items
                            </v-col>
                        </v-row>
                        <!-- <v-dialog v-model="showForm" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    text
                                    outlined
                                    color="green darken-4"
                                    class="ml-3"
                                    v-bind="attrs"
                                    v-on="on"
                                    >Add</v-btn
                                >
                            </template>
                        </v-dialog> -->
                        <!-- 
                        <v-spacer></v-spacer>

                        <v-slide-x-reverse-transition>
                            <div v-if="autocomplete">
                                Filtered by: {{ selected.name.toUpperCase() }}
                            </div>
                        </v-slide-x-reverse-transition> -->
                    </v-card-title>

                    <v-row>
                        <v-col sm="5" offset-sm="2">
                            <v-autocomplete
                                item-text="name"
                                item-value="id"
                                return-object
                                no-filter
                                hide-no-data
                                hide-details
                                hide-selected
                                clearable
                                class="mx-2"
                                label="Product Item"
                                color="pink accent-1"
                            ></v-autocomplete>
                        </v-col>
                        <v-col sm="2">
                            <v-text-field label="Units needed"></v-text-field>
                        </v-col>
                        <v-col sm="1">
                            <v-btn
                                text
                                outlined
                                color="green darken-4"
                                class="ml-3"
                                >Add</v-btn
                            >
                        </v-col>
                    </v-row>

                    <v-data-table :headers="headers" :items="[]">
                        <template v-slot:item.action="">
                            <v-btn text color="red darken-3">
                                Remove
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>

        <app-snackbar
            :color="snackbar.color"
            :text="snackbar.text"
            :timeout="snackbar.timeout"
            :visible="snackbar.visible"
            @hideSnackbar="snackbar.visible = false"
        ></app-snackbar>
    </v-container>
</template>

<script>
export default {
    components: {
        "app-assembled-crud": () => import("./assembled/crud.vue")
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
                    text: "Raw Item Name",
                    value: "raw_item_name"
                },
                {
                    text: "Units needed",
                    value: "quantity"
                },
                {
                    text: "Action",
                    value: "action",
                    sortable: false
                }
            ],

            // snackbar
            snackbar: {
                color: "success",
                text: null,
                timeout: 2000,
                visible: false
            }
        };
    },

    methods: {
        showSnackbar(message, color = "success") {
            this.snackbar.text = message;
            this.snackbar.color = color;
            this.snackbar.visible = true;
        }
    }
};
</script>
