<template>
    <v-container id="pdfPrint">
        <v-row id="excludeFromPDF">
            <v-col cols="12">
                <v-btn text @click="processPrint" color="pink accent-2">
                    <v-icon left>mdi-download</v-icon>
                    <h3>Download in PDF format</h3>
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="pa-2" v-for="(newItem, index) in items" :key="index">
            <v-col cols="12">
                <h2 style="text-align:center;">
                    {{ customTitle }}
                </h2>
            </v-col>
            <v-col cols="3" v-for="(item, index) in newItem" :key="index">
                <p style="text-align:center;margin-bottom:16px;">
                    {{ item.name }}
                </p>
                <app-qrcode
                    :value="item.qr_code"
                    level="H"
                    style="text-align:center;"
                ></app-qrcode>

                <div
                    class="pageBreaker"
                    v-if="index % 23 == 0 && index !== 0"
                ></div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    components: {
        "app-qrcode": () => import("qrcode.vue")
    },
    props: {
        items: {
            required: true
        },
        route: {
            required: true
        }
    },
    data() {
        return {};
    },
    methods: {
        async processPrint() {
            $("#excludeFromPDF").hide();
            const element = document.getElementById("pdfPrint");
            const filename = `${this.customTitle} QR codes.pdf`;
            const opt = {
                margin: 1,
                filename: filename,
                image: { type: "jpeg", quality: 1 },
                html2canvas: { scale: 2 },
                pagebreak: { mode: "avoid-all", before: ".pageBreaker" },
                jsPDF: { format: "a4", orientation: "portrait" }
            };

            await html2pdf()
                .set(opt)
                .from(element)
                .save();

            $("#excludeFromPDF").show();
            this.$store.commit("showSnackbar", {
                color: true,
                text: "PDF has been downloaded."
            });
        }
    },
    computed: {
        customTitle() {
            return this.route == "/qr/products"
                ? "Assembled Products"
                : "Raw Items";
        }
    }
};
</script>
