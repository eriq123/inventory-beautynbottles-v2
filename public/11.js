(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/assembled.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/assembled/assembled.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
    "app-autocomplete": function appAutocomplete() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/components/common/autocomplete.vue */ "./resources/js/components/common/autocomplete.vue"));
    },
    "app-raw-info": function appRawInfo() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/common/infoTooltip */ "./resources/js/components/common/infoTooltip.vue"));
    }
  },
  props: {
    autocomplete: {
      type: Boolean
    },
    selectedName: {
      type: String
    },
    selectedID: {
      type: Number
    }
  },
  data: function data() {
    return {
      selectedRaw: null,
      resetForm: {
        product_id: null,
        raw_id: null,
        quantity: null
      },
      formData: {
        product_id: null,
        raw_id: null,
        quantity: null
      },
      // datatable
      assembledItems: [],
      headers: [{
        text: "Code",
        align: "start",
        value: "id"
      }, {
        text: "Raw Item Name",
        value: "name"
      }, {
        text: "Units needed",
        value: "units_needed"
      }],
      datatable: {
        loading: false,
        assembledIndex: null
      },
      // dialog
      showForm: false,
      // autocomplete
      raw_collection: [],
      autocompleteLoading: false,
      raw_name: null
    };
  },
  methods: {
    addDialog: function addDialog() {
      this.closeReset();
      this.formData.product_id = this.selectedID;
    },
    closeReset: function closeReset() {
      this.formData = Object.assign({}, this.resetForm);
      this.selectedRaw = null;
      this.raw_name = null;
    },
    getOrFilterAssembled: function getOrFilterAssembled() {
      var _this = this;

      this.datatable.loading = true;
      axios.post("/products/assembled/view", {
        id: this.selectedID
      }).then(function (response) {
        _this.assembledItems = response.data.raw.map(function (raw) {
          raw.units_needed = raw.pivot.quantity;
          return raw;
        });
        _this.datatable.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this.$store.commit("showSnackbar", {
            color: false,
            text: "Something went wrong."
          });
        }
      });
    },
    nameChange: function nameChange(value) {
      this.raw_name = value;
    },
    rawSearch: function rawSearch() {
      var _this2 = this;

      axios.post("/products/raw/search", {
        name: this.raw_name
      }).then(function (response) {
        if (response.data.raw.length > 0) {
          _this2.raw_collection = response.data.raw;
        } else {
          _this2.raw_collection = [];
        }

        _this2.autocompleteLoading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this2.$store.commit("showSnackbar", {
            color: false,
            text: "Something went wrong."
          });
        }

        _this2.autocompleteLoading = false;
      });
    },
    saveAssemble: function saveAssemble() {
      var _this3 = this;

      if (this.formData.quantity) {
        axios.post("/products/assembled/attach", this.formData).then(function (response) {
          var raw = {
            id: _this3.formData.raw_id,
            name: _this3.raw_name,
            units_needed: _this3.formData.quantity
          };

          _this3.assembledItems.push(raw);

          _this3.$store.commit("showSnackbar", {
            color: true,
            text: "".concat(_this3.raw_name, " added.")
          });

          _this3.showForm = false;
        })["catch"](function (error) {
          if (error.response) {
            console.log(error.response);

            _this3.$store.commit("showSnackbar", {
              color: false,
              text: "Something went wrong."
            });
          }
        });
      } else {
        this.$store.commit("showSnackbar", {
          color: false,
          text: "Units needed field is required."
        });
      }
    },
    selectedChange: function selectedChange(value) {
      this.selectedRaw = value;

      if (value) {
        this.formData.raw_id = value.id;
      } else {
        this.formData.raw_id = null;
      }
    },
    deleteProduct: function deleteProduct(item) {
      var _this4 = this;

      var assembledIndex = this.assembledItems.indexOf(item);
      this.formData.product_id = this.selectedID;
      this.formData.raw_id = item.id;
      this.datatable.loading = true;
      axios.post("/products/assembled/detach", this.formData).then(function (response) {
        console.log(response.data);

        _this4.$store.commit("showSnackbar", {
          color: true,
          text: "".concat(item.name, " removed.")
        });

        _this4.assembledItems.splice(assembledIndex, 1);

        _this4.datatable.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this4.$store.commit("showSnackbar", {
            color: false,
            text: "Something went wrong."
          });
        }
      });
    }
  },
  computed: {},
  watch: {
    selectedID: function selectedID(value) {
      this.getOrFilterAssembled();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/assembled.vue?vue&type=template&id=33952220&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/assembled/assembled.vue?vue&type=template&id=33952220& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { attrs: { flat: "" } },
    [
      _c(
        "v-card-title",
        [
          _vm._v("\n        Assemble\n        "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "400px" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._g(
                          _vm._b(
                            {
                              staticClass: "ml-3",
                              attrs: {
                                text: "",
                                outlined: "",
                                color: "green darken-4",
                                disabled: !_vm.autocomplete
                              },
                              on: {
                                click: function($event) {
                                  return _vm.addDialog()
                                }
                              }
                            },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [_vm._v("Add")]
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.showForm,
                callback: function($$v) {
                  _vm.showForm = $$v
                },
                expression: "showForm"
              }
            },
            [
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [_vm._v("Add")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      disabled: "",
                                      type: "text",
                                      label: "Product",
                                      value: _vm.selectedName
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { staticClass: "pa-0", attrs: { cols: "12" } },
                                [
                                  _c("app-autocomplete", {
                                    attrs: {
                                      items: _vm.raw_collection,
                                      label: "Raw item",
                                      loading: _vm.autocompleteLoading,
                                      selected: _vm.selectedRaw
                                    },
                                    on: {
                                      autocompleteSearch: _vm.rawSearch,
                                      loadingChange: function($event) {
                                        _vm.autocompleteLoading = true
                                      },
                                      nameChange: _vm.nameChange,
                                      selectedChange: _vm.selectedChange
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
                                  _c("v-text-field", {
                                    attrs: {
                                      type: "number",
                                      label: "Units needed"
                                    },
                                    model: {
                                      value: _vm.formData.quantity,
                                      callback: function($$v) {
                                        _vm.$set(_vm.formData, "quantity", $$v)
                                      },
                                      expression: "formData.quantity"
                                    }
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
                              _vm.showForm = false
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
                          on: {
                            click: function($event) {
                              return _vm.saveAssemble()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Save\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("app-raw-info", {
            attrs: { message: "Click on table row to remove an item." }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.assembledItems,
          loading: _vm.datatable.loading
        },
        on: { "click:row": _vm.deleteProduct }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/products/assembled/assembled.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/pages/products/assembled/assembled.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assembled_vue_vue_type_template_id_33952220___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assembled.vue?vue&type=template&id=33952220& */ "./resources/js/components/pages/products/assembled/assembled.vue?vue&type=template&id=33952220&");
/* harmony import */ var _assembled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assembled.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/assembled/assembled.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _assembled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assembled_vue_vue_type_template_id_33952220___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assembled_vue_vue_type_template_id_33952220___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/assembled/assembled.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/assembled/assembled.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/assembled/assembled.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assembled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assembled.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/assembled.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assembled_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/assembled/assembled.vue?vue&type=template&id=33952220&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/assembled/assembled.vue?vue&type=template&id=33952220& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assembled_vue_vue_type_template_id_33952220___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assembled.vue?vue&type=template&id=33952220& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/assembled.vue?vue&type=template&id=33952220&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assembled_vue_vue_type_template_id_33952220___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assembled_vue_vue_type_template_id_33952220___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);