(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/raw.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/raw/raw.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "app-raw-dialog": function appRawDialog() {
      return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./dialog.vue */ "./resources/js/components/pages/products/raw/dialog.vue"));
    },
    "app-raw-info": function appRawInfo() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/common/infoTooltip */ "./resources/js/components/common/infoTooltip.vue"));
    }
  },
  props: {
    selected: {
      type: Object
    },
    autocomplete: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      // dialog
      resetForm: {
        category_id: null,
        id: null,
        name: null,
        quantity: null,
        reorder_point: null
      },
      formData: {
        category_id: null,
        id: null,
        name: null,
        quantity: null,
        reorder_point: null
      },
      dialog: {
        operation: null,
        category: null
      },
      showForm: false,
      // datatable
      headers: [{
        text: "Code",
        align: "start",
        value: "id"
      }, {
        text: "Category",
        value: "category_name"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Quantity",
        value: "quantity"
      }, {
        text: "Reorder Point",
        value: "reorder_point"
      } // {
      //     text: "Action",
      //     value: "action",
      //     sortable: false
      // }
      ],
      loading: false,
      rawItems: [],
      rawIndex: null
    };
  },
  mounted: function mounted() {
    this.getOrFilterRaw();
  },
  methods: {
    addDialog: function addDialog() {
      this.closeReset();
      this.dialog.operation = "Add";
      this.dialog.category = this.selected.name;
      this.formData.category_id = this.selected.id;
    },
    closeReset: function closeReset() {
      this.formData = Object.assign({}, this.resetForm);
      this.rawIndex = null;
      this.dialog = {
        operation: null,
        category: null
      };
    },
    close: function close() {
      var _this = this;

      this.showForm = false;
      this.$nextTick(function () {
        _this.closeReset();
      });
    },
    deleteRaw: function deleteRaw() {
      var _this2 = this;

      axios.post("/products/raw/delete", {
        id: this.formData.id
      }).then(function (response) {
        _this2.$emit("showSnackbar", "".concat(response.data.raw.name, " deleted."));

        _this2.rawItems.splice(_this2.rawIndex, 1);

        _this2.close();
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);
        }
      });
    },
    editDialog: function editDialog(raw) {
      this.closeReset();
      this.rawIndex = this.rawItems.indexOf(raw);
      this.dialog.category = raw.category.name;
      this.formData = raw;
      this.dialog.operation = "Edit";
      this.showForm = true;
    },
    getOrFilterRaw: function getOrFilterRaw() {
      var _this3 = this;

      this.loading = true;
      axios.post("/products/raw/view", {
        id: this.selected.id
      }).then(function (response) {
        _this3.rawItems = response.data.raw.map(function (raw) {
          raw.category_name = raw.category.name;
          return raw;
        });
        _this3.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);
        }
      });
    },
    saveUpdateRaw: function saveUpdateRaw() {
      var _this4 = this;

      if (this.dialog.operation == "Add") {
        axios.post("/products/raw/add", this.formData).then(function (response) {
          var raw = response.data.raw;
          raw.category_name = raw.category.name;

          _this4.$emit("showSnackbar", "".concat(raw.name, " added."));

          _this4.rawItems.push(raw);

          _this4.close();
        })["catch"](function (error) {
          if (error.response) {
            console.log(error.response);
          }
        });
      } else {
        axios.post("/products/raw/update", this.formData).then(function (response) {
          var raw = response.data.raw;
          raw.category_name = raw.category.name;

          _this4.$emit("showSnackbar", "".concat(raw.name, " has been updated."));

          Object.assign(_this4.rawItems[_this4.rawIndex], raw);

          _this4.close();
        })["catch"](function (error) {
          if (error.response) {
            console.log(error.response);
          }
        });
      }
    }
  },
  watch: {
    selected: function selected(value) {
      this.getOrFilterRaw();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/raw.vue?vue&type=template&id=40f3da8c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/raw/raw.vue?vue&type=template&id=40f3da8c& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
          _vm._v("\n        Raw Item\n\n        "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "500px" },
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
              _c("app-raw-dialog", {
                attrs: {
                  dialogCategory: _vm.dialog.category,
                  dialogOperation: _vm.dialog.operation
                },
                on: {
                  deleteRaw: _vm.deleteRaw,
                  close: _vm.close,
                  saveUpdateRaw: _vm.saveUpdateRaw
                },
                scopedSlots: _vm._u([
                  {
                    key: "dialogForm",
                    fn: function() {
                      return [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", sm: "6" } },
                          [
                            _c("v-text-field", {
                              attrs: { autofocus: "", label: "Name" },
                              model: {
                                value: _vm.formData.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.formData, "name", $$v)
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
                          { attrs: { cols: "12", sm: "6" } },
                          [
                            _c("v-text-field", {
                              attrs: { label: "Quantity", type: "number" },
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
                        ),
                        _vm._v(" "),
                        _c(
                          "v-col",
                          { attrs: { cols: "12", sm: "6" } },
                          [
                            _c("v-text-field", {
                              attrs: { label: "Reorder point", type: "number" },
                              model: {
                                value: _vm.formData.reorder_point,
                                callback: function($$v) {
                                  _vm.$set(_vm.formData, "reorder_point", $$v)
                                },
                                expression: "formData.reorder_point"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("app-raw-info", {
            attrs: { message: "Click on table rows to update the record." }
          }),
          _vm._v(" "),
          _c("v-slide-x-reverse-transition", [
            _vm.autocomplete
              ? _c("div", [
                  _vm._v(
                    "\n                Filtered by: " +
                      _vm._s(_vm.selected.name.toUpperCase()) +
                      "\n            "
                  )
                ])
              : _vm._e()
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.rawItems,
          loading: _vm.loading
        },
        on: { "click:row": _vm.editDialog }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/products/raw/raw.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/raw.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _raw_vue_vue_type_template_id_40f3da8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw.vue?vue&type=template&id=40f3da8c& */ "./resources/js/components/pages/products/raw/raw.vue?vue&type=template&id=40f3da8c&");
/* harmony import */ var _raw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raw.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/raw/raw.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _raw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _raw_vue_vue_type_template_id_40f3da8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _raw_vue_vue_type_template_id_40f3da8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/raw/raw.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/raw/raw.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/raw.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_raw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./raw.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/raw.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_raw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/raw/raw.vue?vue&type=template&id=40f3da8c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/raw.vue?vue&type=template&id=40f3da8c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_raw_vue_vue_type_template_id_40f3da8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./raw.vue?vue&type=template&id=40f3da8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/raw.vue?vue&type=template&id=40f3da8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_raw_vue_vue_type_template_id_40f3da8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_raw_vue_vue_type_template_id_40f3da8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);