(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/category.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/raw/category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "app-autocomplete": function appAutocomplete() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/components/common/autocomplete.vue */ "./resources/js/components/common/autocomplete.vue"));
    }
  },
  data: function data() {
    return {
      category_collection: [],
      code: 0,
      loading: false,
      name: null,
      selectedCategory: null
    };
  },
  methods: {
    addCategory: function addCategory() {
      var _this = this;

      if (this.name) {
        this.loading = true;
        axios.post("/products/category/add", {
          name: this.name
        }).then(function (response) {
          _this.$emit("showSnackbar", "".concat(response.data.category.name, " added."));

          _this.loading = false;
        })["catch"](function (error) {
          if (error.response) {
            console.log(error.response);

            _this.$emit("showSnackbar", "Something went wrong.", "red darken-1");
          }

          _this.loading = false;
        });
      } else {
        this.$emit("showSnackbar", "Category name is required.", "red darken-1");
      }
    },
    categorySearch: function categorySearch() {
      var _this2 = this;

      axios.post("/products/category/search", {
        name: this.name
      }).then(function (response) {
        if (response.data.category.length > 0) {
          _this2.category_collection = response.data.category;
        } else {
          _this2.category_collection = [];
        }

        _this2.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          _this2.$emit("showSnackbar", "Something went wrong.", "red darken-1");

          console.log(error.response);
        }

        _this2.loading = false;
      });
    },
    deleteCategory: function deleteCategory() {
      var _this3 = this;

      this.loading = true;

      if (this.code) {
        axios.post("/products/category/delete", {
          id: this.code
        }).then(function (response) {
          _this3.selectedCategory = null;
          _this3.code = 0;
          _this3.name = null;

          _this3.$emit("showSnackbar", "".concat(response.data.category.name, " deleted."));

          _this3.loading = false;
        })["catch"](function (error) {
          if (error.response) {
            console.log(error.response);

            _this3.$emit("showSnackbar", "Something went wrong.", "red darken-1");
          }

          _this3.loading = false;
        });
      } else {
        this.$emit("showSnackbar", "Please select category first.", "red darken-1");
      }
    },
    updateCategory: function updateCategory() {
      var _this4 = this;

      if (this.name && this.code > 0) {
        this.loading = true;
        axios.post("/products/category/update", {
          id: this.code,
          name: this.name
        }).then(function (response) {
          _this4.$emit("showSnackbar", "".concat(response.data.category.name, " updated."));

          _this4.loading = false;
        })["catch"](function (error) {
          if (error.response) {
            console.log(error.response);

            _this4.$emit("showSnackbar", "Something went wrong.", "red darken-1");
          }

          _this4.loading = false;
        });
      } else {
        this.$emit("showSnackbar", "Please select category first.", "red darken-1");
      }
    },
    nameChange: function nameChange(value) {
      this.name = value;
    },
    selectedChange: function selectedChange(value) {
      this.selectedCategory = value;
    }
  },
  watch: {
    selectedCategory: function selectedCategory(value) {
      if (value) {
        this.code = value.id;
      } else {
        this.code = 0;
      }

      this.$emit("selectedCategory", value);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/category.vue?vue&type=template&id=bbdd076c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/raw/category.vue?vue&type=template&id=bbdd076c& ***!
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
    "v-card",
    { attrs: { outlined: "" } },
    [
      _c(
        "v-card-title",
        [
          _vm._v("\n        Category\n\n        "),
          _c(
            "v-slide-x-reverse-transition",
            [
              _vm.selectedCategory
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
                              _vm.selectedCategory = null
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
                  return _vm.addCategory()
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
          _c("app-autocomplete", {
            staticClass: "mx-2",
            attrs: {
              items: _vm.category_collection,
              label: "Category Name",
              loading: _vm.loading,
              selected: _vm.selectedCategory
            },
            on: {
              autocompleteSearch: _vm.categorySearch,
              loadingChange: function($event) {
                _vm.loading = true
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
        "v-card-actions",
        [
          _c(
            "v-btn",
            {
              attrs: { text: "", color: "blue darken-3" },
              on: {
                click: function($event) {
                  return _vm.updateCategory()
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
                  return _vm.deleteCategory()
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

/***/ "./resources/js/components/pages/products/raw/category.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/category.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_bbdd076c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=bbdd076c& */ "./resources/js/components/pages/products/raw/category.vue?vue&type=template&id=bbdd076c&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/raw/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_bbdd076c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_bbdd076c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/raw/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/raw/category.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/category.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/raw/category.vue?vue&type=template&id=bbdd076c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/category.vue?vue&type=template&id=bbdd076c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_bbdd076c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=bbdd076c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/category.vue?vue&type=template&id=bbdd076c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_bbdd076c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_bbdd076c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);