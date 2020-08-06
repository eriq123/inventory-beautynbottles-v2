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
                <app-raw-category
                    @selectedCategory="selectedCategory"
                    @showSnackbar="showSnackbar"
                ></app-raw-category>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <app-raw
                    :selected="selected"
                    :autocomplete="autocomplete"
                    @showSnackbar="showSnackbar"
                ></app-raw>
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
        "app-raw-category": () => import("./raw/category.vue"),
        "app-raw": () => import("./raw/raw.vue")
    },
    data() {
        return {
            // autocomplete
            autocomplete: false,
            selected: {
                id: null,
                name: null
            },

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
        selectedCategory(value) {
            if (value) {
                this.selected = value;
                this.autocomplete = true;
            } else {
                this.selected = {
                    id: null,
                    name: null
                };
                this.autocomplete = false;
            }
        },

        showSnackbar(message, color = "success") {
            this.snackbar.text = message;
            this.snackbar.color = color;
            this.snackbar.visible = true;
        }
    }
};
</script>
