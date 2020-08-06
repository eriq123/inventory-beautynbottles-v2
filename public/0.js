(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/crud.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/assembled/crud.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      code: null,
      loading: false,
      name: null,
      product_collection: [],
      selectedProduct: null,
      debounceTimer: 0
    };
  },
  methods: {
    addProduct: function addProduct() {
      var _this = this;

      if (this.name) {
        this.loading = true;
        axios.post("/products/add", {
          name: this.name
        }).then(function (response) {
          console.log(response);

          _this.$emit("showSnackbar", "".concat(response.data.product.name, " added."));

          _this.loading = false;
        })["catch"](function (error) {
          if (error.response) {
            console.log(error.response);

            _this.$emit("showSnackbar", "Something went wrong.", "red darken-1");
          }

          _this.loading = false;
        });
      } else {
        this.$emit("showSnackbar", "Product name is required.", "red darken-1");
      }
    },
    deleteProduct: function deleteProduct() {
      var _this2 = this;

      if (this.code) {
        axios.post("/products/delete", {
          id: this.code
        }).then(function (response) {
          _this2.selectedProduct = null;
          _this2.code = 0;
          _this2.name = null;

          _this2.$emit("showSnackbar", "".concat(response.data.product.name, " deleted."));
        })["catch"](function (error) {
          if (error.response) {
            console.log(error.response);

            _this2.$emit("showSnackbar", "Something went wrong.", "red darken-1");
          }
        });
      } else {
        this.$emit("showSnackbar", "Please select product first.", "red darken-1");
      }
    },
    updateProduct: function updateProduct() {
      var _this3 = this;

      if (this.name && this.code > 0) {
        axios.post("/products/update", {
          id: this.code,
          name: this.name
        }).then(function (response) {
          console.log(response.data);

          _this3.$emit("showSnackbar", "".concat(response.data.product.name, " updated."));
        })["catch"](function (error) {
          if (error.response) {
            console.log(error.response);

            _this3.$emit("showSnackbar", "Something went wrong.", "red darken-1");
          }
        });
      } else {
        this.$emit("showSnackbar", "Please select product first.", "red darken-1");
      }
    },
    productSearch: function productSearch() {
      var _this4 = this;

      axios.post("/products/search", {
        name: this.name
      }).then(function (response) {
        if (response.data.product.length > 0) {
          _this4.product_collection = response.data.product;
        } else {
          _this4.product_collection = [];
        }
      })["catch"](function (error) {
        if (error.response) {
          _this4.$emit("showSnackbar", "Something went wrong.", "red darken-1");

          console.log(error.response);
        }
      });
    },
    debounceSearch: function debounceSearch() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
      clearTimeout(this.debounceTimer);
      this.loading = true;
      this.debounceTimer = setTimeout(function () {
        this.productSearch();
        this.loading = false;
      }.bind(this), delay);
    }
  },
  watch: {
    name: function name(value) {
      this.debounceSearch();
    },
    selectedProduct: function selectedProduct(value) {
      if (value) {
        this.code = value.id;
      } else {
        this.code = 0;
      } // this.$emit("selectedProduct", value);

    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/crud.vue?vue&type=template&id=15ca0d40&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/assembled/crud.vue?vue&type=template&id=15ca0d40& ***!
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
    "v-card",
    { attrs: { outlined: "" } },
    [
      _c(
        "v-card-title",
        [
          _vm._v("\n        Product\n\n        "),
          _c(
            "v-slide-x-reverse-transition",
            [
              _vm.selectedProduct
                ? _c(
                    "v-chip",
                    { staticClass: "mx-2", attrs: { outlined: "" } },
                    [
                      _vm._v(
                        "\n                Code: " +
                          _vm._s(this.code || 0) +
                          "\n                "
                      ),
                      _c(
                        "v-icon",
                        {
                          staticClass: "ml-3",
                          attrs: { small: "" },
                          on: {
                            click: function($event) {
                              _vm.selectedProduct = null
                            }
                          }
                        },
                        [_vm._v("mdi-close")]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { text: "", outlined: "", color: "green darken-4" },
              on: {
                click: function($event) {
                  return _vm.addProduct()
                }
              }
            },
            [_vm._v("Add")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-autocomplete", {
            staticClass: "mx-2",
            attrs: {
              "search-input": _vm.name,
              loading: _vm.loading,
              items: _vm.product_collection,
              "item-text": "name",
              "item-value": "id",
              "return-object": "",
              "no-filter": "",
              "hide-no-data": "",
              "hide-details": "",
              clearable: "",
              outlined: "",
              label: "Product Name",
              color: "pink accent-1"
            },
            on: {
              "update:searchInput": function($event) {
                _vm.name = $event
              },
              "update:search-input": function($event) {
                _vm.name = $event
              }
            },
            model: {
              value: _vm.selectedProduct,
              callback: function($$v) {
                _vm.selectedProduct = $$v
              },
              expression: "selectedProduct"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c(
            "v-btn",
            {
              attrs: { text: "", color: "blue darken-3" },
              on: {
                click: function($event) {
                  return _vm.updateProduct()
                }
              }
            },
            [_vm._v("Edit")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { text: "", color: "red darken-3" },
              on: {
                click: function($event) {
                  return _vm.deleteProduct()
                }
              }
            },
            [_vm._v("Delete")]
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

/***/ "./resources/js/components/pages/products/assembled/crud.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/pages/products/assembled/crud.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _crud_vue_vue_type_template_id_15ca0d40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.vue?vue&type=template&id=15ca0d40& */ "./resources/js/components/pages/products/assembled/crud.vue?vue&type=template&id=15ca0d40&");
/* harmony import */ var _crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/assembled/crud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _crud_vue_vue_type_template_id_15ca0d40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _crud_vue_vue_type_template_id_15ca0d40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/assembled/crud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/assembled/crud.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/products/assembled/crud.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./crud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/crud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/assembled/crud.vue?vue&type=template&id=15ca0d40&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/assembled/crud.vue?vue&type=template&id=15ca0d40& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crud_vue_vue_type_template_id_15ca0d40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./crud.vue?vue&type=template&id=15ca0d40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembled/crud.vue?vue&type=template&id=15ca0d40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crud_vue_vue_type_template_id_15ca0d40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crud_vue_vue_type_template_id_15ca0d40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);