(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/flowContainer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/inventory/flowContainer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    "app-flow-datatable": function appFlowDatatable() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./flow/datatable.vue */ "./resources/js/components/pages/inventory/flow/datatable.vue"));
    },
    "app-flow-dialog": function appFlowDialog() {
      return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./flow/dialog.vue */ "./resources/js/components/pages/inventory/flow/dialog.vue"));
    },
    "app-raw-menu": function appRawMenu() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../products/raw/rawMenu */ "./resources/js/components/pages/products/raw/rawMenu.vue"));
    },
    "app-raw-converted-units": function appRawConvertedUnits() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../products/raw/rawConvertedUnits */ "./resources/js/components/pages/products/raw/rawConvertedUnits.vue"));
    }
  },
  data: function data() {
    return {
      toggle: {
        state: true,
        loading: false,
        disabled: false
      },
      dialog: {
        show: false,
        toggle: true,
        title: null,
        quantity: null,
        id: 0,
        action: null,
        loading: false,
        base_name: null
      },
      stocks: 0,
      updatedItem: {},
      convert: {
        collection: [],
        name: null,
        value: null
      }
    };
  },
  methods: {
    datatableclick: function datatableclick(data) {
      var _this = this;

      if (this.toggle.state) {
        this.dialog.title = data.item.name;
      } else {
        this.dialog.base_name = data.item.base.name;
        this.dialog.title = "".concat(data.item.category.name, " - ").concat(data.item.name);
      }

      this.dialog.action = data.action;
      this.dialog.quantity = null;
      this.stocks = data.item.quantity;
      this.dialog.id = data.item.id;
      this.dialog.toggle = this.dialog.show = true;
      this.dialog.loading = true;

      if (!this.toggle.state) {
        axios.post("/units/convert/view", {
          id: data.item.base_id
        }).then(function (response) {
          _this.convert.collection = response.data.convert;

          if (response.data.convert.length > 0) {
            _this.convert.name = response.data.convert[0].name;
            _this.convert.value = response.data.convert[0].value;
          } else {
            _this.$store.commit("showSnackbar", {
              color: false,
              text: "Sub-unit is required. Please add one then try again."
            });
          }

          _this.dialog.loading = false;
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
          } else {
            console.log(error);
          }
        });
      }
    },
    selectedmenu: function selectedmenu(item) {
      this.convert.name = item.name;
      this.convert.value = item.value;
    },
    saveproductraw: function saveproductraw(form) {
      var _this2 = this;

      var formData = {
        id: form.id,
        status: form.status,
        action: form.action,
        type: this.switchLabel
      };

      if (this.toggle.state) {
        formData.quantity = this.dialog.quantity;
      } else {
        formData.quantity = this.dialog.quantity * this.convert.value;
      }

      axios.post("/inventory/flow/store", formData).then(function (response) {
        console.log(response.data);

        if (!_this2.toggle.state) {
          _this2.updatedItem = response.data.raw;
        }

        _this2.dialog.show = false;

        _this2.$store.commit("showSnackbar", {
          color: true,
          text: "Record has been updated!"
        });
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          if (error.response.data.error_message) {
            _this2.$store.commit("showSnackbar", {
              color: false,
              text: error.response.data.error_message
            });
          } else {
            _this2.$store.commit("errorSnackbar");
          }
        }
      });
    },
    toggleChange: function toggleChange(value) {
      this.toggle.disabled = this.toggle.loading = value;
    }
  },
  computed: {
    switchLabel: function switchLabel() {
      return this.toggle.state == true ? "Products" : "Raw Items";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/flowContainer.vue?vue&type=template&id=0376497a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/inventory/flowContainer.vue?vue&type=template&id=0376497a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            [
              _c("v-switch", {
                staticClass: "ml-3",
                attrs: {
                  inset: "",
                  ripple: "",
                  disabled: _vm.toggle.disabled,
                  loading: _vm.toggle.disabled,
                  label: "Filtered by: " + _vm.switchLabel
                },
                model: {
                  value: _vm.toggle.state,
                  callback: function($$v) {
                    _vm.$set(_vm.toggle, "state", $$v)
                  },
                  expression: "toggle.state"
                }
              }),
              _vm._v(" "),
              _c("app-flow-datatable", {
                attrs: {
                  toggleState: _vm.toggle.state,
                  updatedItem: _vm.updatedItem
                },
                on: {
                  toggleChange: _vm.toggleChange,
                  datatableclick: _vm.datatableclick
                }
              }),
              _vm._v(" "),
              _c("app-flow-dialog", {
                attrs: {
                  title: _vm.dialog.title,
                  action: _vm.dialog.action,
                  dialogShow: _vm.dialog.show,
                  switchState: _vm.dialog.toggle,
                  id: _vm.dialog.id,
                  toggleState: _vm.toggle.state
                },
                on: {
                  dialogshowchange: function($event) {
                    _vm.dialog.show = false
                  },
                  togglechangestate: function($event) {
                    _vm.dialog.toggle = !_vm.dialog.toggle
                  },
                  saveproductraw: _vm.saveproductraw
                },
                scopedSlots: _vm._u([
                  {
                    key: "quantity",
                    fn: function() {
                      return [
                        _vm.toggle.state
                          ? _c(
                              "v-col",
                              { attrs: { sm: "8" } },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    autofocus: "",
                                    type: "number",
                                    label: "Quantity"
                                  },
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
                        !_vm.toggle.state
                          ? _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6" } },
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
                                                _c("app-raw-menu", {
                                                  attrs: {
                                                    menu:
                                                      _vm.convert.collection,
                                                    selected: _vm.convert.name
                                                  },
                                                  on: {
                                                    selectedmenu:
                                                      _vm.selectedmenu
                                                  }
                                                })
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ],
                                        null,
                                        false,
                                        726169854
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
                                  { attrs: { cols: "6" } },
                                  [
                                    _c("app-raw-converted-units", {
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
                      ]
                    },
                    proxy: true
                  }
                ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/inventory/flowContainer.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/pages/inventory/flowContainer.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flowContainer_vue_vue_type_template_id_0376497a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowContainer.vue?vue&type=template&id=0376497a& */ "./resources/js/components/pages/inventory/flowContainer.vue?vue&type=template&id=0376497a&");
/* harmony import */ var _flowContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flowContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/inventory/flowContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _flowContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _flowContainer_vue_vue_type_template_id_0376497a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _flowContainer_vue_vue_type_template_id_0376497a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/inventory/flowContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/inventory/flowContainer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/inventory/flowContainer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./flowContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/flowContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flowContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/inventory/flowContainer.vue?vue&type=template&id=0376497a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/inventory/flowContainer.vue?vue&type=template&id=0376497a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flowContainer_vue_vue_type_template_id_0376497a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./flowContainer.vue?vue&type=template&id=0376497a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/flowContainer.vue?vue&type=template&id=0376497a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flowContainer_vue_vue_type_template_id_0376497a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_flowContainer_vue_vue_type_template_id_0376497a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);