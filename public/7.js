(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/rawContainer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/rawContainer.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "app-raw-category": function appRawCategory() {
      return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./raw/category.vue */ "./resources/js/components/pages/products/raw/category.vue"));
    },
    "app-raw": function appRaw() {
      return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./raw/raw.vue */ "./resources/js/components/pages/products/raw/raw.vue"));
    }
  },
  data: function data() {
    return {
      // autocomplete
      autocomplete: false,
      selected: {
        id: null,
        name: null
      },
      // snackbar
      snackbar: {
        color: "success",
        text: null,
        timeout: 2000,
        visible: false
      }
    };
  },
  methods: {
    selectedCategory: function selectedCategory(value) {
      if (value) {
        this.selected = value;
        this.autocomplete = true;
      } else {
        this.selected = {
          id: null,
          name: null
        };
        this.autocomplete = false;
      }
    },
    showSnackbar: function showSnackbar(message) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
      this.snackbar.text = message;
      this.snackbar.color = color;
      this.snackbar.visible = true;
    }
  }
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
      _c(
        "v-row",
        [
          _c(
            "v-col",
            {
              attrs: {
                sm: "8",
                "offset-sm": "2",
                md: "6",
                "offset-md": "3",
                xl: "4",
                "offset-xl": "4"
              }
            },
            [
              _c("app-raw-category", {
                on: {
                  selectedCategory: _vm.selectedCategory,
                  showSnackbar: _vm.showSnackbar
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c("app-raw", {
                attrs: {
                  selected: _vm.selected,
                  autocomplete: _vm.autocomplete
                },
                on: { showSnackbar: _vm.showSnackbar }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("app-snackbar", {
        attrs: {
          color: _vm.snackbar.color,
          text: _vm.snackbar.text,
          timeout: _vm.snackbar.timeout,
          visible: _vm.snackbar.visible
        },
        on: {
          hideSnackbar: function($event) {
            _vm.snackbar.visible = false
          }
        }
      })
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