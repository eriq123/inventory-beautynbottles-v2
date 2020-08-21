<template>
    <v-container>
        <app-assembled-products
            @showrawitems="showrawitems"
            v-if="!selected"
        ></app-assembled-products>
        <!-- <v-row>
            <v-col> -->
        <!-- <app-assembled
                    :autocomplete="autocomplete"
                    :selectedName="selected.name"
                    :selectedID="selected.id"
                ></app-assembled> -->
        <!-- </v-col>
        </v-row> -->
    </v-container>
</template>

<script>
export default {
    components: {
        "app-assembled-crud": () => import("./assembled/crud.vue"),
        "app-assembled": () => import("./assembled/assembled.vue"),
        "app-assembled-products": () => import("./assembled/products")
    },
    data() {
        return {
            selected: false,

            showForm: false,
            dialogAction: null,
            qrcode: null,

            formData: {
                category_id: 0,
                category_name: null,
                name: null,
                quantity: null,
                reorder_point: null,
                base_id: 0,
                base_name: null
            },

            headers: [
                {
                    text: "Code",
                    align: "start",
                    value: "id"
                },
                {
                    text: "Raw Item Name",
                    value: "name"
                },
                {
                    text: "Quantity",
                    value: "quantity"
                },
                {
                    text: "Reorder Point",
                    value: "reorder_point"
                }
            ],
            loading: false,
            items: [],
            itemIndex: -1
        };
    },
    methods: {
        showrawitems(item) {
            this.selected = true;
            this.formData.category_id = item.id;
            this.formData.category_name = item.name;
            this.loading = true;
            axios
                .post("/products/raw/view", {
                    id: this.formData.category_id
                })
                .then(response => {
                    this.items = response.data.raw;
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
    }
};
</script>
