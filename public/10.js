(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/reportContainer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/inventory/reportContainer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "app-report-datatable": function appReportDatatable() {
      return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./report/datatable.vue */ "./resources/js/components/pages/inventory/report/datatable.vue"));
    },
    "app-download-excel": vue_json_excel__WEBPACK_IMPORTED_MODULE_1__["default"],
    "app-datepicker": function appDatepicker() {
      return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./report/datepicker.vue */ "./resources/js/components/pages/inventory/report/datepicker.vue"));
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
      dialog: false,
      date: {
        from: new Date().toISOString(),
        to: new Date().toISOString()
      }
    };
  },
  created: function created() {},
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
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.prepareHeader();

                _context.next = 3;
                return axios.post("/inventory/report/download", _this.date).then(function (response) {
                  var raw_collection = response.data.raw;
                  _this.data = raw_collection.map(function (item) {
                    item.code = "RI - ".concat(item.id.toString().padStart(4, "0"));
                    item.units = "".concat(item.quantity, " ").concat(item.base.name);
                    item.custom_sold = "(".concat(item.sold, ")");
                    item.custom_loss = "(".concat(item.loss, ")");
                    return item;
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
                  } else {
                    console.log(error);
                  }
                });

              case 3:
                _this.$store.commit("showSnackbar", {
                  color: true,
                  text: "Downloading..."
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    prepareHeader: function prepareHeader() {
      this.$store.commit("showSnackbar", {
        color: true,
        text: "Please wait while preparing data."
      });
      var options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      var from_date = new Date(this.date.from).toLocaleDateString("en-US", options);
      var to_date = new Date(this.date.to).toLocaleDateString("en-US", options);
      this.header = "Inventory Report ".concat(from_date, " - ").concat(to_date);
    },
    downloadFinished: function downloadFinished() {
      this.dialog = false;
      this.date.from = new Date().toISOString();
      this.date.to = new Date().toISOString();
      this.$store.commit("showSnackbar", {
        color: true,
        text: "Inventory report download finished."
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
                      _vm.dialog = !_vm.dialog
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
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
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
                                  _vm.dialog = false
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "app-download-excel",
                            {
                              staticClass:
                                "green--text text--darken-3 v-btn v-btn--flat v-btn--text theme--light v-size--default",
                              attrs: {
                                name: _vm.header,
                                header: _vm.header,
                                data: _vm.data,
                                fields: _vm.fields,
                                "before-generate": _vm.getExcelData,
                                "before-finish": _vm.downloadFinished
                              }
                            },
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
        on: { toggleChange: _vm.toggleChange }
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