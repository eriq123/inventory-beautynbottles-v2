<template>
    <v-container>
        <v-row>
            <v-col sm="12" md="8" offset-md="2">
                <vue-qr-reader
                    responsive="true"
                    :code-scanned="qrScanned"
                    :use-back-camera="backCamera"
                    :draw-on-found="drawOnFound"
                />
                <v-btn text @click="backCamera = !backCamera">
                    use back camera
                </v-btn>
                <v-btn text @click="drawOnFound = !drawOnFound">
                    draw on found
                </v-btn>
            </v-col>
        </v-row>
        Event: {{ eventFound }}
    </v-container>
</template>
<script>
import "vue-qr-reader";
export default {
    data() {
        return {
            backCamera: true,
            drawOnFound: true,
            eventFound: null
        };
    },
    methods: {
        qrScanned(event) {
            // console.log(event.detail[0]);
            console.log(event);
            alert(event);
            this.eventFound = null;
            this.eventFound = event.detail[0];
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
