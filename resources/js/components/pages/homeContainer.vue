<template>
    <v-container>
        <v-row>
            <v-col sm="12" md="8" offset-md="2">
                <vue-qr-reader responsive="true" :code-scanned="qrScanned" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import "vue-qr-reader";
export default {
    data() {
        return {};
    },
    methods: {
        qrScanned(event) {
            // console.log(event.detail[0]);
            console.log(event);
            console.log("i scanned");
        },
        errorCaptured(error) {
            switch (error.name) {
                case "NotAllowedError":
                    this.$commit("showSnackbar", {
                        color: false,
                        text: "Camera permission denied."
                    });
                    break;
                case "NotFoundError":
                    this.$commit("showSnackbar", {
                        color: false,
                        text: "There is no connected camera."
                    });
                    break;
                case "NotSupportedError":
                    this.$commit("showSnackbar", {
                        color: false,
                        text:
                            "Seems like this page is served in non-secure context."
                    });
                    break;
                case "NotReadableError":
                    this.$commit("showSnackbar", {
                        color: false,
                        text:
                            "Couldn't access your camera. Is it already in use?"
                    });
                    break;
                case "OverconstrainedError":
                    this.$commit("showSnackbar", {
                        color: false,
                        text: "Constraints don't match any installed camera."
                    });
                    break;
                default:
                    // this.errorMessage = "UNKNOWN ERROR: " + error.message;
                    console.log(error);
                    this.$commit("errorSnackbar");
            }
            console.log(error);
        }
    }
};
</script>
