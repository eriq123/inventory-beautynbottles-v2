<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :loading="loading"
        :show-expand="toggleState"
        :expanded.sync="expanded"
        @click:row="openExpanded"
    >
        <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
                <v-chip-group column>
                    <v-chip v-for="(raw, index) in item.raws" :key="index">
                        {{ raw.quantity }} x {{ raw.name }}
                    </v-chip>
                </v-chip-group>
            </td>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-btn
                fab
                x-small
                outlined
                color="green darken-4"
                @click.stop="$emit('addaction', item)"
            >
                <v-icon>
                    mdi-plus
                </v-icon>
            </v-btn>
            <v-btn
                fab
                x-small
                outlined
                color="red darken-4"
                @click.stop="$emit('minusaction', item)"
            >
                <v-icon>
                    mdi-minus
                </v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
export default {
    props: {
        toggleState: {
            required: true,
            type: Boolean
        }
    },
    data() {
        return {
            expanded: [],
            headers: [],
            items: [],
            loading: false,
            productHeader: [
                {
                    text: "Code",
                    align: "start",
                    value: "id"
                },
                {
                    text: "Product",
                    align: "start",
                    value: "name"
                },
                // {
                //     text: "Raw items",
                //     align: "start",
                //     value: "raw_item"
                // },
                {
                    text: "Actions",
                    value: "actions"
                }
            ],
            rawHeader: [
                {
                    text: "Code",
                    align: "start",
                    value: "id"
                },
                {
                    text: "Category",
                    align: "start",
                    value: "category_name"
                },
                {
                    text: "Raw Item",
                    align: "start",
                    value: "name"
                },
                {
                    text: "Quantity",
                    value: "quantity"
                },
                {
                    text: "Actions",
                    value: "actions"
                }
            ]
        };
    },
    created() {
        this.getProductRaw();
    },
    methods: {
        openExpanded(value) {
            if (this.toggleState) {
                const index = this.expanded.indexOf(value);
                if (index === -1) {
                    this.expanded.push(value);
                } else {
                    this.expanded.splice(index, 1);
                }
            }
        },
        getProductRaw() {
            this.items = [];
            this.loading = true;
            this.$emit("toggleChange", true);
            axios
                .post("/inventory/flow/toggle", {
                    toggle: this.toggleState
                })
                .then(response => {
                    console.log(response.data);
                    if (this.toggleState) {
                        this.headers = this.productHeader;
                    } else {
                        this.headers = this.rawHeader;
                    }

                    if (response.data.items.length > 0) {
                        if (response.data.toggle) {
                            this.items = response.data.items;
                        } else {
                            this.items = response.data.items.map(item => {
                                item.category_name = item.category.name;
                                return item;
                            });
                        }
                    } else {
                        this.items = [];
                    }
                    this.loading = false;
                    this.$emit("toggleChange", false);
                })
                .catch(error => {
                    console.log(error.response);
                    this.loading = false;
                    this.$emit("toggleChange", false);
                });
        }
    },

    watch: {
        toggleState: function(value) {
            this.getProductRaw();
            this.expanded = [];
        }
    }
};
</script>
