<template>
    <v-container>
        <v-row>
            <v-col
                sm="8"
                offset-sm="2"
                md="6"
                offset-md="3"
                lg="6"
                offset-lg="3"
                xl="4"
                offset-xl="4"
            >
                <app-assembled-crud
                    @selectedProduct="selectedProduct"
                    @showSnackbar="showSnackbar"
                ></app-assembled-crud>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <app-assembled
                    :autocomplete="autocomplete"
                    :selectedName="selected.name"
                    :selectedID="selected.id"
                    @showSnackbar="showSnackbar"
                ></app-assembled>
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
        "app-assembled-crud": () => import("./assembled/crud.vue"),
        "app-assembled": () => import("./assembled/assembled.vue")
    },
    data() {
        return {
            // product selection
            selected: {
                id: null,
                name: null
            },
            selectedRaws: [],
            autocomplete: false,

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
        selectedProduct(value) {
            if (value) {
                this.selected = value;
                this.selectedRaws = value.raws;
                this.autocomplete = true;
            } else {
                this.selected = {
                    id: null,
                    name: null
                };
                this.autocomplete = false;
            }
            // this.getOrFilterAssembled();
        },
        showSnackbar(message, color = "success") {
            this.snackbar.text = message;
            this.snackbar.color = color;
            this.snackbar.visible = true;
        }
    }
};
</script>
