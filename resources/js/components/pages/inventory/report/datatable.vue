<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :loading="loading"
        :search="search"
        :show-expand="toggleState"
        :expanded.sync="expanded"
        @click:row="openExpanded"
    >
        <template v-slot:top>
            <datatable-search v-model="search"></datatable-search>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
                <v-chip-group column>
                    <v-chip v-for="(raw, index) in item.raws" :key="index">
                        {{ raw.pivot.quantity }} x {{ raw.name }}
                    </v-chip>
                </v-chip-group>
            </td>
        </template>

        <template v-slot:item.remark="{ item }">
            <v-btn
                v-if="item.quantity <= item.reorder_point"
                icon
                color="red darken-4"
                dark
            >
                <v-icon>mdi-exclamation-thick</v-icon>
            </v-btn>
            <v-btn v-else icon color="green darken-4" dark>
                <v-icon>mdi-check-bold</v-icon>
            </v-btn>
        </template>
        <template #item.id="{item}" v-if="toggleState">
            AP - {{ item.id.toString().padStart(4, "0") }}
        </template>
        <template #item.id="{item}" v-else>
            RI - {{ item.id.toString().padStart(4, "0") }}
        </template>
        <template #item.sold="{item}"> ({{ item.sold }}) </template>
        <template #item.loss="{item}"> ({{ item.loss }}) </template>
        <template #item.quantity="{item}">
            {{ item.quantity }} {{ item.base.name }}
        </template>
    </v-data-table>
</template>

<script>
export default {
    components: {
        "datatable-search": () => import("@/components/common/datatable-search")
    },
    props: {
        toggleState: {
            required: true,
            type: Boolean
        }
    },
    data() {
        return {
            search: null,
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
                {
                    text: "Assembled",
                    value: "purchase"
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
                    text: "Purchase",
                    value: "purchase"
                },
                {
                    text: "RTS",
                    value: "rts"
                },
                {
                    text: "Sold",
                    value: "sold"
                },
                {
                    text: "Loss",
                    value: "loss"
                },
                {
                    text: "Available Units",
                    value: "quantity"
                },
                {
                    text: "Remark",
                    value: "remark"
                }
            ],
            itemIndex: -1
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
                .post("/inventory/toggle", {
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
                    console.log(error);
                    this.$store.commit("errorSnackbar");
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
