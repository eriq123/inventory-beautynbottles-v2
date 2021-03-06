<template>
  <v-container>
    <v-row>
      <v-col
        sm="12"
        md="8"
        offset-md="2"
        lg="4"
        offset-lg="4"
        class="pink--text text--accent-2 text-center"
      >
        <h1>Qr Code Scanner</h1>
        <p>Place your eshop qr code here.</p>
        <vue-qr-reader
          responsive="true"
          @code-scanned="qrScanned"
          @error-captured="errorCaptured"
          :use-back-camera="backCamera"
          :draw-on-found="drawOnFound"
          :stop-on-scan="stopOnScan"
        />
      </v-col>
    </v-row>
    <v-dialog v-model="dialog.show" max-width="450px">
      <v-card>
        <v-progress-linear :indeterminate="dialog.loading"></v-progress-linear>
        <v-card-title>
          <span class="headline">{{ this.dialog.title }}</span>
        </v-card-title>
        <v-card-text>
          <v-col cols="12" v-if="form.type == 'Products'">
            <v-text-field
              type="number"
              label="Quantity"
              v-model="dialog.quantity"
            >
            </v-text-field>
          </v-col>
          <v-row v-if="form.type == 'Raw item'">
            <v-col cols="10" offset="1">
              <v-text-field
                type="number"
                label="Quantity"
                v-model="dialog.quantity"
                :loading="dialog.loading"
              >
                <template #append-outer>
                  <app-menu
                    :menu="convert.collection"
                    :label="convert.name"
                    @onSelect="selectedmenu"
                  ></app-menu>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="10" offset="1">
              <app-converted-units
                :quantity="dialog.quantity"
                :convertValue="convert.value"
                :label="dialog.base_name"
              ></app-converted-units>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog.show = !dialog.show">Cancel</v-btn>
          <v-btn text color="green darken-3" @click="processQRCode">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row class="my-5">
      <v-col
        sm="12"
        md="8"
        offset-md="2"
        lg="4"
        offset-lg="4"
        class="pink--text text--accent-2"
      >
        <p class="text-center">FAQs</p>

        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(faq, i) in faqs" :key="i">
            <v-expansion-panel-header>
              {{ faq.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="text-justify">
              <span class="font-weight-light">{{ faq.answer }}</span>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import "vue-qr-reader";
export default {
  props: {
    user: {
      required: true
    }
  },
  components: {
    "app-menu": () => import("@/components/common/menu"),
    "app-converted-units": () => import("@/components/common/converted-units")
  },
  data() {
    return {
      backCamera: true,
      drawOnFound: true,
      stopOnScan: true,
      eventDetail: null,
      dialog: {
        show: false,
        title: null,
        disabled: true,
        loading: true,
        base_name: null,
        quantity: null
      },

      form: {
        id: 0,
        type: null,
        quantity: null,
        action: null,
        status: null
      },
      convert: {
        collection: [],
        name: null,
        value: null
      },
      base: {
        collection: []
      },
      faqs: [
        {
          question: "How am i supposed to use the qr scanner?",
          answer:
            "Make sure the qr code is seen clearly, once identified it will show you a border around the qr and a dialog will pop up."
        },
        {
          question: "Camera permission denied?",
          answer:
            "Please make sure to allow the usage of your back camera, then try again."
        },
        {
          question: "Unknown qr code. Please try again error?",
          answer:
            "Only qr codes that are generated in this website can be scanned, if that is the case, please check the updated qr code list as the code may have been updated or deleted."
        }
      ]
    };
  },
  methods: {
    processQRCode() {
      if (this.form.type == "Products") {
        this.form.quantity = this.dialog.quantity;
      } else {
        this.form.quantity = this.dialog.quantity * this.convert.value;
      }
      this.dialog.show = false;
      axios
        .post("/inventory/flow/store", this.form)
        .then(response => {
          console.log(response.data);

          this.$store.commit("showSnackbar", {
            color: true,
            text: `Record has been updated!`
          });
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response);
            if (error.response.data.error_message) {
              this.$store.commit("showSnackbar", {
                color: false,
                text: error.response.data.error_message
              });
            } else {
              this.$store.commit("errorSnackbar");
            }
          }
        });
    },
    qrScanned(event) {
      this.eventDetail = event.detail[0];

      const parts = this.eventDetail.split("-");

      if (parts[0] == "eshopbnb") {
        this.dialog.title = "N/A";
        if (parts[1] == "RI") {
          this.form.id = parts[2];
          this.form.type = "Raw item";
          if (this.user.is_admin) {
            this.form.action = "minus";
            this.form.status = "Purchase";
          } else {
            this.form.action = "add";
            this.form.status = "Sold";
          }
          this.prepareRawDialog(parts[2]);
        } else if (parts[1] == "AP") {
          this.form.id = parts[2];
          this.form.type = "Products";
          if (this.user.is_admin) {
            this.form.action = "minus";
            this.form.status = "Sold";
          } else {
            this.form.action = "minus";
            this.form.status = "Sold";
          }
          this.prepareProductDialog(parts[2]);
        } else {
          this.unknownQRCodeAlert();
        }
      } else {
        this.unknownQRCodeAlert();
      }
    },

    async prepareRawDialog(id) {
      this.dialog.show = this.dialog.loading = true;
      await axios
        .post("/home/raw", {
          id: id
        })
        .then(response => {
          const raw = response.data.raw;
          this.dialog.title = `${raw.category.name} - ${raw.name}`;
          this.dialog.base_name = raw.base.name;
          this.convert.collection = response.data.convert;

          this.convertNameAndValue();
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response);
            if (error.response.data.error) {
              this.$store.commit("showSnackbar", {
                color: false,
                text: error.response.data.error
              });
            } else {
              this.$store.commit("errorSnackbar");
            }
          } else {
            console.log(error);
          }
        });
      this.dialog.loading = false;
    },
    async prepareProductDialog(id) {
      this.dialog.show = this.dialog.loading = true;
      await axios
        .post("/home/product", {
          id: id
        })
        .then(response => {
          console.log(response.data);
          this.dialog.title = response.data.product.name;
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response);
            if (error.response.data.error) {
              this.$store.commit("showSnackbar", {
                color: false,
                text: error.response.data.error
              });
            } else {
              this.$store.commit("errorSnackbar");
            }
          } else {
            console.log(error);
          }
        });
      this.dialog.loading = false;
    },
    convertNameAndValue() {
      if (this.convert.collection.length > 0) {
        this.convert.name = this.convert.collection[0].name;
        this.convert.value = this.convert.collection[0].value;
      } else {
        this.$store.commit("showSnackbar", {
          color: false,
          text: "Sub-unit is required. Please add one then try again."
        });
        this.dialog.show = false;
      }
    },
    unknownQRCodeAlert() {
      this.$store.commit("showSnackbar", {
        color: false,
        text: "Unknown QR code. Please try again."
      });
    },
    selectedmenu(item) {
      this.convert.name = item.name;
      this.convert.value = item.value;
    },
    errorCaptured(error) {
      switch (error.name) {
        case "NotAllowedError":
          this.$store.commit("showSnackbar", {
            color: false,
            text: "Camera permission denied."
          });
          break;
        case "NotFoundError":
          this.$store.commit("showSnackbar", {
            color: false,
            text: "There is no connected camera."
          });
          break;
        case "NotSupportedError":
          this.$store.commit("showSnackbar", {
            color: false,
            text: "Seems like this page is served in non-secure context."
          });
          break;
        case "NotReadableError":
          this.$store.commit("showSnackbar", {
            color: false,
            text: "Couldn't access your camera. Is it already in use?"
          });
          break;
        case "OverconstrainedError":
          this.$store.commit("showSnackbar", {
            color: false,
            text: "Constraints don't match any installed camera."
          });
          break;
        default:
          // this.errorMessage = "UNKNOWN ERROR: " + error.message;
          console.log(error);
          this.$store.commit("errorSnackbar");
      }
      console.log(error);
    }
  }
};
</script>
