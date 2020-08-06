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
