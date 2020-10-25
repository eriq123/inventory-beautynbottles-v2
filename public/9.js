(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/reportContainer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/inventory/reportContainer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "app-report-datatable": function appReportDatatable() {
      return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./report/datatable.vue */ "./resources/js/components/pages/inventory/report/datatable.vue"));
    },
    "app-download-excel": vue_json_excel__WEBPACK_IMPORTED_MODULE_0__["default"],
    "app-datepicker": function appDatepicker() {
      return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./report/datepicker.vue */ "./resources/js/components/pages/inventory/report/datepicker.vue"));
    }
  },
  data: function data() {
    return {
      toggle: {
        state: false,
        loading: false,
        disabled: false
      },
      fields: {
        Code: "code",
        "Raw Item": "name",
        Purchase: "purchase",
        Rts: "rts",
        Sold: "custom_sold",
        Loss: "custom_loss",
        "Available units": "units"
      },
      data: [],
      header: null,
      dialog: {
        show: false
      },
      date: {
        from: new Date().toISOString(),
        to: new Date().toISOString()
      }
    };
  },
  created: function created() {
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var today = new Date().toLocaleDateString("en-US", options);
    this.header = "Inventory Report ".concat(today);
  },
  methods: {
    savefromdate: function savefromdate(date) {
      this.date.from = date;
    },
    savetodate: function savetodate(date) {
      this.date.to = date;
    },
    toggleChange: function toggleChange(value) {
      this.toggle.disabled = this.toggle.loading = value;
    },
    getExcelData: function getExcelData(value) {
      this.data = value.map(function (item) {
        item.code = "RI - ".concat(item.id.toString().padStart(4, "0"));
        item.units = "".concat(item.quantity, " ").concat(item.base.name);
        item.custom_sold = "(".concat(item.sold, ")");
        item.custom_loss = "(".concat(item.loss, ")");
        return item;
      });
    }
  },
  computed: {
    switchLabel: function switchLabel() {
      return this.toggle.state == true ? "Products" : "Raw Items";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/reportContainer.vue?vue&type=template&id=2bfee118&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/inventory/reportContainer.vue?vue&type=template&id=2bfee118& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
              _c(
                "v-btn",
                {
                  attrs: { text: "", color: "pink accent-2" },
                  on: {
                    click: function($event) {
                      _vm.dialog.show = !_vm.dialog.show
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v("mdi-download")
                  ]),
                  _vm._v("\n                Download Report\n            ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "350px" },
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
                      _c("v-card-title", [
                        _vm._v(
                          "\n                        Inventory report\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c("app-datepicker", {
                            attrs: { date: _vm.date.from, label: "Start Date" },
                            on: { savedate: _vm.savefromdate }
                          }),
                          _vm._v(" "),
                          _c("app-datepicker", {
                            attrs: { date: _vm.date.to, label: "End Date" },
                            on: { savedate: _vm.savetodate }
                          })
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
                                  _vm.dialog.show = false
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { text: "", color: "green darken-3" } },
                            [
                              _vm._v(
                                "\n                            Save\n                        "
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
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("app-report-datatable", {
        attrs: { toggleState: _vm.toggle.state },
        on: { toggleChange: _vm.toggleChange, getExcelData: _vm.getExcelData }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/inventory/reportContainer.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/pages/inventory/reportContainer.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reportContainer_vue_vue_type_template_id_2bfee118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportContainer.vue?vue&type=template&id=2bfee118& */ "./resources/js/components/pages/inventory/reportContainer.vue?vue&type=template&id=2bfee118&");
/* harmony import */ var _reportContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/inventory/reportContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reportContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reportContainer_vue_vue_type_template_id_2bfee118___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reportContainer_vue_vue_type_template_id_2bfee118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/inventory/reportContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/inventory/reportContainer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/inventory/reportContainer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reportContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/reportContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reportContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/inventory/reportContainer.vue?vue&type=template&id=2bfee118&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pages/inventory/reportContainer.vue?vue&type=template&id=2bfee118& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportContainer_vue_vue_type_template_id_2bfee118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./reportContainer.vue?vue&type=template&id=2bfee118& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/reportContainer.vue?vue&type=template&id=2bfee118&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportContainer_vue_vue_type_template_id_2bfee118___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reportContainer_vue_vue_type_template_id_2bfee118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);