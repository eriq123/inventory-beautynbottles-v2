(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_qr_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-qr-reader */ "./node_modules/vue-qr-reader/dist/vue-qr-reader.min.js");
/* harmony import */ var vue_qr_reader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_qr_reader__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "app-qr-menu": function appQrMenu() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./products/raw/rawMenu */ "./resources/js/components/pages/products/raw/rawMenu.vue"));
    },
    "app-qr-converted-units": function appQrConvertedUnits() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./products/raw/rawConvertedUnits */ "./resources/js/components/pages/products/raw/rawConvertedUnits.vue"));
    }
  },
  data: function data() {
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
      }
    };
  },
  methods: {
    processQRCode: function processQRCode() {
      var _this = this;

      if (this.form.type == "Products") {
        this.form.quantity = this.dialog.quantity;
      } else {
        this.form.quantity = this.dialog.quantity * this.convert.value;
      }

      this.dialog.show = false;
      axios.post("/inventory/flow/store", this.form).then(function (response) {
        console.log(response.data);

        _this.$store.commit("showSnackbar", {
          color: true,
          text: "Record has been updated!"
        });
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          if (error.response.data.error_message) {
            _this.$store.commit("showSnackbar", {
              color: false,
              text: error.response.data.error_message
            });
          } else {
            _this.$store.commit("errorSnackbar");
          }
        }
      });
    },
    qrScanned: function qrScanned(event) {
      this.eventDetail = event.detail[0];
      var parts = this.eventDetail.split("-");

      if (parts[0] == "eshopbnb") {
        this.dialog.title = "N/A";

        if (parts[1] == "RI") {
          this.form.id = parts[2];
          this.form.type = "Raw item";
          this.form.action = "add";
          this.form.status = "Purchase";
          this.prepareRawDialog(parts[2]);
        } else if (parts[1] == "AP") {
          this.form.id = parts[2];
          this.form.type = "Products";
          this.form.action = "minus";
          this.form.status = "Sold";
          this.prepareProductDialog(parts[2]);
        } else {
          this.unknownQRCodeAlert();
        }
      } else {
        this.unknownQRCodeAlert();
      }
    },
    prepareRawDialog: function prepareRawDialog(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.dialog.show = _this2.dialog.loading = true;
                _context.next = 3;
                return axios.post("/home/raw", {
                  id: id
                }).then(function (response) {
                  var raw = response.data.raw;
                  _this2.dialog.title = "".concat(raw.category.name, " - ").concat(raw.name);
                  _this2.dialog.base_name = raw.base.name;
                  _this2.convert.collection = response.data.convert;

                  _this2.convertNameAndValue();
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    if (error.response.data.error) {
                      _this2.$store.commit("showSnackbar", {
                        color: false,
                        text: error.response.data.error
                      });
                    } else {
                      _this2.$store.commit("errorSnackbar");
                    }
                  } else {
                    console.log(error);
                  }
                });

              case 3:
                _this2.dialog.loading = false;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    prepareProductDialog: function prepareProductDialog(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.dialog.show = _this3.dialog.loading = true;
                _context2.next = 3;
                return axios.post("/home/product", {
                  id: id
                }).then(function (response) {
                  console.log(response.data);
                  _this3.dialog.title = response.data.product.name;
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    if (error.response.data.error) {
                      _this3.$store.commit("showSnackbar", {
                        color: false,
                        text: error.response.data.error
                      });
                    } else {
                      _this3.$store.commit("errorSnackbar");
                    }
                  } else {
                    console.log(error);
                  }
                });

              case 3:
                _this3.dialog.loading = false;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    convertNameAndValue: function convertNameAndValue() {
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
    unknownQRCodeAlert: function unknownQRCodeAlert() {
      this.$store.commit("showSnackbar", {
        color: false,
        text: "Unknown QR code. Please try again."
      });
    },
    selectedmenu: function selectedmenu(item) {
      this.convert.name = item.name;
      this.convert.value = item.value;
    },
    errorCaptured: function errorCaptured(error) {
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
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            {
              attrs: {
                sm: "12",
                md: "8",
                "offset-md": "2",
                lg: "4",
                "offset-lg": "4"
              }
            },
            [
              _c("vue-qr-reader", {
                attrs: {
                  responsive: "true",
                  "use-back-camera": _vm.backCamera,
                  "draw-on-found": _vm.drawOnFound,
                  "stop-on-scan": _vm.stopOnScan
                },
                on: {
                  "code-scanned": _vm.qrScanned,
                  "error-captured": _vm.errorCaptured
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "450px" },
          model: {
            value: _vm.dialog.show,
            callback: function($$v) {
              _vm.$set(_vm.dialog, "show", $$v)
            },
            expression: "dialog.show"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-progress-linear", {
                attrs: { indeterminate: _vm.dialog.loading }
              }),
              _vm._v(" "),
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(this.dialog.title))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _vm.form.type == "Products"
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: { type: "number", label: "Quantity" },
                            model: {
                              value: _vm.dialog.quantity,
                              callback: function($$v) {
                                _vm.$set(_vm.dialog, "quantity", $$v)
                              },
                              expression: "dialog.quantity"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.form.type == "Raw item"
                    ? _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "10", offset: "1" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  type: "number",
                                  label: "Quantity",
                                  loading: _vm.dialog.loading
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "append-outer",
                                      fn: function() {
                                        return [
                                          _c("app-qr-menu", {
                                            attrs: {
                                              menu: _vm.convert.collection,
                                              selected: _vm.convert.name
                                            },
                                            on: {
                                              selectedmenu: _vm.selectedmenu
                                            }
                                          })
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  false,
                                  4243591161
                                ),
                                model: {
                                  value: _vm.dialog.quantity,
                                  callback: function($$v) {
                                    _vm.$set(_vm.dialog, "quantity", $$v)
                                  },
                                  expression: "dialog.quantity"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "10", offset: "1" } },
                            [
                              _c("app-qr-converted-units", {
                                attrs: {
                                  value: _vm.dialog.quantity,
                                  convertValue: _vm.convert.value,
                                  formDataBaseName: _vm.dialog.base_name
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog.show = !_vm.dialog.show
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "green darken-3" },
                      on: { click: _vm.processQRCode }
                    },
                    [_vm._v("Save")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/homeContainer.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/homeContainer.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeContainer.vue?vue&type=template&id=de88dc48& */ "./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48&");
/* harmony import */ var _homeContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _homeContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/homeContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeContainer.vue?vue&type=template&id=de88dc48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);