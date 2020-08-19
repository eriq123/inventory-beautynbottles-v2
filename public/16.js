(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/rawContainer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/rawContainer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var qrcode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode.vue */ "./node_modules/qrcode.vue/dist/qrcode.vue.esm.js");
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
    "app-raw-category": function appRawCategory() {
      return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./raw/category */ "./resources/js/components/pages/products/raw/category.vue"));
    },
    "app-raw-menu": function appRawMenu() {
      return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./raw/rawMenu */ "./resources/js/components/pages/products/raw/rawMenu.vue"));
    },
    "app-raw-dialog": function appRawDialog() {
      return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./raw/rawDialog */ "./resources/js/components/pages/products/raw/rawDialog.vue"));
    },
    "app-raw-converted-units": function appRawConvertedUnits() {
      return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./raw/rawConvertedUnits */ "./resources/js/components/pages/products/raw/rawConvertedUnits.vue"));
    }
  },
  data: function data() {
    return {
      selected: false,
      showForm: false,
      dialogAction: null,
      formData: {
        category_id: 0,
        category_name: null,
        name: null,
        quantity: null,
        reorder_point: null,
        base_id: 0,
        base_name: null
      },
      headers: [{
        text: "Code",
        align: "start",
        value: "id"
      }, {
        text: "Raw Item Name",
        value: "name"
      }, {
        text: "Qr",
        value: "qr"
      }, {
        text: "Quantity",
        value: "quantity"
      }, // {
      //     text: "Description",
      //     value: "unit"
      // },
      {
        text: "Reorder Point",
        value: "reorder_point"
      }],
      loading: false,
      items: [],
      itemIndex: -1,
      base_collection: [],
      convert_collection: [],
      convertFiltered: [],
      convert: {
        quantity: {
          name: null,
          value: 1
        },
        reorder_point: {
          name: null,
          value: 1
        }
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.post("/units/all").then(function (response) {
      _this.base_collection = response.data.base;
      _this.convert_collection = response.data.convert;
    })["catch"](function (error) {
      if (error.response) {
        console.log(error.response);

        _this.errorAlert();
      }
    });
  },
  methods: {
    convertFilter: function convertFilter() {
      var _this2 = this;

      this.convertFiltered = [];
      this.convert_collection.forEach(function (item) {
        if (item.base_id == _this2.formData.base_id) {
          _this2.convertFiltered.push(item);
        }
      });
      this.convert.quantity.name = this.convert.reorder_point.name = this.convertFiltered[0].name;
      this.convert.quantity.value = this.convert.reorder_point.value = this.convertFiltered[0].value;
    },
    processadd: function processadd() {
      var _this3 = this;

      this.formData.quantity = this.convert.quantity.value * this.formData.quantity;
      this.formData.reorder_point = this.convert.reorder_point.value * this.formData.reorder_point;
      axios.post(this.dialogAction == "Add" ? "/products/raw/add" : "/products/raw/update", this.formData).then(function (response) {
        var raw = response.data.raw;
        raw.category_name = raw.category.name;

        if (_this3.dialogAction == "Add") {
          _this3.$store.commit("showSnackbar", {
            color: true,
            text: "".concat(raw.name, " added.")
          });

          _this3.items.push(raw);
        } else {
          _this3.$store.commit("showSnackbar", {
            color: true,
            text: "".concat(raw.name, " has been updated.")
          }); // Object.assign(this.items[this.itemIndex], raw);

        }

        _this3.showForm = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this3.errorAlert();
        }
      });
    },
    selectedconvertquantity: function selectedconvertquantity(item) {
      this.convert.quantity.name = item.name;
      this.convert.quantity.value = item.value;
    },
    selectedconvertreorderpoint: function selectedconvertreorderpoint(item) {
      this.convert.reorder_point.name = item.name;
      this.convert.reorder_point.value = item.value;
    },
    selectunitsofmeasurement: function selectunitsofmeasurement(item) {
      this.formData.base_id = item.id;
      this.formData.base_name = item.name;
      this.convertFilter();
    },
    showAddForm: function showAddForm() {
      this.dialogAction = "Add";
      this.formData.name = null;
      this.formData.quantity = null;
      this.formData.reorder_point = null;
      this.formData.base_id = this.base_collection[0].id;
      this.formData.base_name = this.base_collection[0].name;
      this.convertFilter();
      this.showForm = true;
    },
    showrawitems: function showrawitems(item) {
      var _this4 = this;

      this.selected = true;
      this.formData.category_id = item.id;
      this.formData.category_name = item.name;
      this.loading = true;
      axios.post("/products/raw/view", {
        id: this.formData.category_id
      }).then(function (response) {
        _this4.items = response.data.raw;
        console.log(response.data.raw);
        _this4.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this4.errorAlert();
        }

        _this4.loading = false;
      });
    },
    errorAlert: function errorAlert() {
      this.$store.commit("showSnackbar", {
        color: false,
        text: "Something went wrong."
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/rawContainer.vue?vue&type=template&id=6377907e&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/rawContainer.vue?vue&type=template&id=6377907e& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      !_vm.selected
        ? _c("app-raw-category", { on: { showrawitems: _vm.showrawitems } })
        : _vm._e(),
      _vm._v(" "),
      _vm.selected
        ? _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-card-title",
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(this.formData.category_name) +
                              " raw items\n                    "
                          ),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ml-3",
                              attrs: {
                                text: "",
                                outlined: "",
                                color: "green darken-4"
                              },
                              on: { click: _vm.showAddForm }
                            },
                            [
                              _vm._v(
                                "\n                        Add\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "500px" },
                              model: {
                                value: _vm.showForm,
                                callback: function($$v) {
                                  _vm.showForm = $$v
                                },
                                expression: "showForm"
                              }
                            },
                            [
                              _c("app-raw-dialog", {
                                attrs: {
                                  title: _vm.dialogAction,
                                  categoryName: _vm.formData.category_name
                                },
                                on: {
                                  closedialog: function($event) {
                                    _vm.showForm = false
                                  },
                                  processadd: _vm.processadd
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "dialogForm",
                                      fn: function() {
                                        return [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "py-0",
                                              attrs: { cols: "12" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Raw item name"
                                                },
                                                model: {
                                                  value: _vm.formData.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "formData.name"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _vm._v(
                                                "\n                                    Unit of Measurement:\n                                    "
                                              ),
                                              _c("app-raw-menu", {
                                                attrs: {
                                                  menu: _vm.base_collection,
                                                  selected:
                                                    _vm.formData.base_name
                                                },
                                                on: {
                                                  selectedmenu:
                                                    _vm.selectunitsofmeasurement
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  type: "number",
                                                  label: "Quantity"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "append-outer",
                                                      fn: function() {
                                                        return [
                                                          _c("app-raw-menu", {
                                                            attrs: {
                                                              menu:
                                                                _vm.convertFiltered,
                                                              selected:
                                                                _vm.convert
                                                                  .quantity.name
                                                            },
                                                            on: {
                                                              selectedmenu:
                                                                _vm.selectedconvertquantity
                                                            }
                                                          })
                                                        ]
                                                      },
                                                      proxy: true
                                                    }
                                                  ],
                                                  null,
                                                  false,
                                                  839093261
                                                ),
                                                model: {
                                                  value: _vm.formData.quantity,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "quantity",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "formData.quantity"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("app-raw-converted-units", {
                                            attrs: {
                                              value: _vm.formData.quantity,
                                              convertValue:
                                                _vm.convert.quantity.value,
                                              formDataBaseName:
                                                _vm.formData.base_name
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  type: "number",
                                                  label: "Reorder Point"
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "append-outer",
                                                      fn: function() {
                                                        return [
                                                          _c("app-raw-menu", {
                                                            attrs: {
                                                              menu:
                                                                _vm.convertFiltered,
                                                              selected:
                                                                _vm.convert
                                                                  .reorder_point
                                                                  .name
                                                            },
                                                            on: {
                                                              selectedmenu:
                                                                _vm.selectedconvertreorderpoint
                                                            }
                                                          })
                                                        ]
                                                      },
                                                      proxy: true
                                                    }
                                                  ],
                                                  null,
                                                  false,
                                                  4051307640
                                                ),
                                                model: {
                                                  value:
                                                    _vm.formData.reorder_point,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "reorder_point",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "formData.reorder_point"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("app-raw-converted-units", {
                                            attrs: {
                                              value: _vm.formData.reorder_point,
                                              convertValue:
                                                _vm.convert.reorder_point.value,
                                              formDataBaseName:
                                                _vm.formData.base_name
                                            }
                                          })
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  false,
                                  4087477311
                                )
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "" },
                              on: {
                                click: function($event) {
                                  _vm.selected = false
                                }
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-arrow-left")
                              ]),
                              _vm._v(
                                "\n                        Back to categories\n                    "
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.items,
                          loading: _vm.loading
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "item.id",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _vm._v(
                                    "\n                        RI - " +
                                      _vm._s(
                                        item.id.toString().padStart(4, "0")
                                      ) +
                                      "\n                    "
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.quantity",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(item.quantity) +
                                      " " +
                                      _vm._s(item.base.name) +
                                      "\n                    "
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.reorder_point",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(item.reorder_point) +
                                      " " +
                                      _vm._s(item.base.name) +
                                      "\n                    "
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.qr",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("qrcode-vue", {
                                    attrs: { value: item.qr, level: "H" }
                                  })
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          3517782302
                        )
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/products/rawContainer.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/pages/products/rawContainer.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rawContainer_vue_vue_type_template_id_6377907e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rawContainer.vue?vue&type=template&id=6377907e& */ "./resources/js/components/pages/products/rawContainer.vue?vue&type=template&id=6377907e&");
/* harmony import */ var _rawContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rawContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/rawContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _rawContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _rawContainer_vue_vue_type_template_id_6377907e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _rawContainer_vue_vue_type_template_id_6377907e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/rawContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/rawContainer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/products/rawContainer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rawContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./rawContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/rawContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rawContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/rawContainer.vue?vue&type=template&id=6377907e&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/rawContainer.vue?vue&type=template&id=6377907e& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rawContainer_vue_vue_type_template_id_6377907e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./rawContainer.vue?vue&type=template&id=6377907e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/rawContainer.vue?vue&type=template&id=6377907e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rawContainer_vue_vue_type_template_id_6377907e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rawContainer_vue_vue_type_template_id_6377907e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);