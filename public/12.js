(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/report/datatable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/inventory/report/datatable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    toggleState: {
      required: true,
      type: Boolean
    }
  },
  data: function data() {
    return {
      expanded: [],
      headers: [],
      items: [],
      loading: false,
      productHeader: [{
        text: "Code",
        align: "start",
        value: "id"
      }, {
        text: "Product",
        align: "start",
        value: "name"
      }, {
        text: "Assembled",
        value: "purchase"
      }],
      rawHeader: [{
        text: "Code",
        align: "start",
        value: "id"
      }, {
        text: "Category",
        align: "start",
        value: "category_name"
      }, {
        text: "Raw Item",
        align: "start",
        value: "name"
      }, {
        text: "Purchase",
        value: "purchase"
      }, {
        text: "RTS",
        value: "rts"
      }, {
        text: "Sold",
        value: "sold"
      }, {
        text: "Loss",
        value: "loss"
      }, {
        text: "Available Units",
        value: "quantity"
      }, {
        text: "Remark",
        value: "remark"
      }],
      itemIndex: -1
    };
  },
  created: function created() {
    this.getProductRaw();
  },
  methods: {
    openExpanded: function openExpanded(value) {
      if (this.toggleState) {
        var index = this.expanded.indexOf(value);

        if (index === -1) {
          this.expanded.push(value);
        } else {
          this.expanded.splice(index, 1);
        }
      }
    },
    getProductRaw: function getProductRaw() {
      var _this = this;

      this.items = [];
      this.loading = true;
      this.$emit("toggleChange", true);
      axios.post("/inventory/toggle", {
        toggle: this.toggleState
      }).then(function (response) {
        console.log(response.data);

        if (_this.toggleState) {
          _this.headers = _this.productHeader;
        } else {
          _this.headers = _this.rawHeader;
        }

        if (response.data.items.length > 0) {
          if (response.data.toggle) {
            _this.items = response.data.items;
          } else {
            _this.items = response.data.items.map(function (item) {
              item.category_name = item.category.name;
              return item;
            });
          }
        } else {
          _this.items = [];
        }

        _this.loading = false;

        _this.$emit("toggleChange", false);
      })["catch"](function (error) {
        console.log(error);

        _this.$store.commit("errorSnackbar");

        _this.loading = false;

        _this.$emit("toggleChange", false);
      });
    }
  },
  watch: {
    toggleState: function toggleState(value) {
      this.getProductRaw();
      this.expanded = [];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/report/datatable.vue?vue&type=template&id=7f8f0192&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/inventory/report/datatable.vue?vue&type=template&id=7f8f0192& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.items,
      loading: _vm.loading,
      "show-expand": _vm.toggleState,
      expanded: _vm.expanded
    },
    on: {
      "update:expanded": function($event) {
        _vm.expanded = $event
      },
      "click:row": _vm.openExpanded
    },
    scopedSlots: _vm._u(
      [
        {
          key: "expanded-item",
          fn: function(ref) {
            var headers = ref.headers
            var item = ref.item
            return [
              _c(
                "td",
                { attrs: { colspan: headers.length } },
                [
                  _c(
                    "v-chip-group",
                    { attrs: { column: "" } },
                    _vm._l(item.raws, function(raw, index) {
                      return _c("v-chip", { key: index }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(raw.pivot.quantity) +
                            " x " +
                            _vm._s(raw.name) +
                            "\n                "
                        )
                      ])
                    }),
                    1
                  )
                ],
                1
              )
            ]
          }
        },
        {
          key: "item.remark",
          fn: function(ref) {
            var item = ref.item
            return [
              item.quantity <= item.reorder_point
                ? _c(
                    "v-btn",
                    { attrs: { icon: "", color: "red darken-4", dark: "" } },
                    [_c("v-icon", [_vm._v("mdi-exclamation-thick")])],
                    1
                  )
                : _c(
                    "v-btn",
                    { attrs: { icon: "", color: "green darken-4", dark: "" } },
                    [_c("v-icon", [_vm._v("mdi-check-bold")])],
                    1
                  )
            ]
          }
        },
        _vm.toggleState
          ? {
              key: "item.id",
              fn: function(ref) {
                var item = ref.item
                return [
                  _vm._v(
                    "\n        AP - " +
                      _vm._s(item.id.toString().padStart(4, "0")) +
                      "\n    "
                  )
                ]
              }
            }
          : {
              key: "item.id",
              fn: function(ref) {
                var item = ref.item
                return [
                  _vm._v(
                    "\n        RI - " +
                      _vm._s(item.id.toString().padStart(4, "0")) +
                      "\n    "
                  )
                ]
              }
            },
        {
          key: "item.sold",
          fn: function(ref) {
            var item = ref.item
            return [_vm._v(" (" + _vm._s(item.sold) + ") ")]
          }
        },
        {
          key: "item.loss",
          fn: function(ref) {
            var item = ref.item
            return [_vm._v(" (" + _vm._s(item.loss) + ") ")]
          }
        },
        {
          key: "item.quantity",
          fn: function(ref) {
            var item = ref.item
            return [
              _vm._v(
                "\n        " +
                  _vm._s(item.quantity) +
                  " " +
                  _vm._s(item.base.name) +
                  "\n    "
              )
            ]
          }
        }
      ],
      null,
      true
    )
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/inventory/report/datatable.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/pages/inventory/report/datatable.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datatable_vue_vue_type_template_id_7f8f0192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatable.vue?vue&type=template&id=7f8f0192& */ "./resources/js/components/pages/inventory/report/datatable.vue?vue&type=template&id=7f8f0192&");
/* harmony import */ var _datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datatable.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/inventory/report/datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _datatable_vue_vue_type_template_id_7f8f0192___WEBPACK_IMPORTED_MODULE_0__["render"],
  _datatable_vue_vue_type_template_id_7f8f0192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/inventory/report/datatable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/inventory/report/datatable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/inventory/report/datatable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./datatable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/report/datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/inventory/report/datatable.vue?vue&type=template&id=7f8f0192&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pages/inventory/report/datatable.vue?vue&type=template&id=7f8f0192& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_template_id_7f8f0192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./datatable.vue?vue&type=template&id=7f8f0192& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/report/datatable.vue?vue&type=template&id=7f8f0192&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_template_id_7f8f0192___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datatable_vue_vue_type_template_id_7f8f0192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);