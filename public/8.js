(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/categories/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/categories/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    categoryName: {
      type: String
    },
    headers: {
      type: Array
    },
    isSelected: {
      type: Boolean
    },
    items: {
      type: Array
    },
    loading: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      search: null
    };
  },
  components: {
    "datatable-search": function datatableSearch() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/components/common/datatable-search */ "./resources/js/components/common/datatable-search.vue"));
    },
    "main-layout": function mainLayout() {
      return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! @/components/layouts/categories-product/index */ "./resources/js/components/layouts/categories-product/index.vue"));
    }
  },
  methods: {
    clickedRow: function clickedRow(item) {
      this.$emit("showItems", item);
    }
  },
  computed: {
    cardTitle: function cardTitle() {
      var _this$categoryName;

      return (_this$categoryName = this.categoryName) !== null && _this$categoryName !== void 0 ? _this$categoryName : "Category";
    }
  },
  watch: {
    items: {
      handler: function handler(val, oldVal) {
        this.search = null;
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/categories/index.vue?vue&type=template&id=6c3cc638&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/categories/index.vue?vue&type=template&id=6c3cc638& ***!
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
  return _c("main-layout", {
    scopedSlots: _vm._u(
      [
        {
          key: "info-alert",
          fn: function() {
            return [_vm._t("info-alert")]
          },
          proxy: true
        },
        {
          key: "card-title",
          fn: function() {
            return [
              _vm.isSelected
                ? _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          return _vm.$emit("onBack")
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { left: "" } }, [
                        _vm._v("mdi-arrow-left")
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._t("card-title", [_vm._v(" " + _vm._s(_vm.cardTitle) + " ")]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ml-3",
                  attrs: { text: "", outlined: "", color: "green darken-4" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("onCreate")
                    }
                  }
                },
                [_vm._v("\n      Create\n    ")]
              ),
              _vm._v(" "),
              _vm._t("qr"),
              _vm._v(" "),
              _vm._t("dialog")
            ]
          },
          proxy: true
        },
        {
          key: "datatable",
          fn: function() {
            return [
              _c("v-data-table", {
                attrs: {
                  headers: _vm.headers,
                  items: _vm.items,
                  loading: _vm.loading,
                  search: _vm.search
                },
                on: { "click:row": _vm.clickedRow },
                scopedSlots: _vm._u([
                  {
                    key: "top",
                    fn: function() {
                      return [
                        _c("datatable-search", {
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-btn",
                          {
                            attrs: { text: "", color: "blue darken-4" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.$emit("onEdit", item)
                              }
                            }
                          },
                          [_vm._v("\n          Update\n        ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { text: "", color: "red darken-4" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.$emit("onDelete", item)
                              }
                            }
                          },
                          [_vm._v("\n          Delete\n        ")]
                        )
                      ]
                    }
                  }
                ])
              })
            ]
          },
          proxy: true
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

/***/ "./resources/js/components/pages/products/categories/index.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/pages/products/categories/index.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6c3cc638___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6c3cc638& */ "./resources/js/components/pages/products/categories/index.vue?vue&type=template&id=6c3cc638&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/categories/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6c3cc638___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6c3cc638___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/categories/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/categories/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/products/categories/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/categories/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/categories/index.vue?vue&type=template&id=6c3cc638&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/categories/index.vue?vue&type=template&id=6c3cc638& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6c3cc638___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6c3cc638& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/categories/index.vue?vue&type=template&id=6c3cc638&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6c3cc638___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6c3cc638___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);