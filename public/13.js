(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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
      return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./raw/category */ "./resources/js/components/pages/products/raw/category.vue"));
    }
  },
  data: function data() {
    return {
      selected: false,
      category: {},
      showForm: false,
      formData: {
        action: null,
        id: 0,
        name: null
      },
      headers: [{
        text: "Code",
        align: "start",
        value: "id"
      }, {
        text: "Raw Item Name",
        value: "name"
      }, {
        text: "Quantity",
        value: "quantity"
      }, {
        text: "Description",
        value: "unit"
      }, {
        text: "Reorder Point",
        value: "reorder_point"
      }],
      loading: false,
      items: [],
      itemIndex: -1
    };
  },
  mounted: function mounted() {},
  methods: {
    showrawitems: function showrawitems(item) {
      var _this = this;

      this.selected = true;
      this.category = item;
      this.loading = true;
      axios.post("/products/raw/view", {
        id: this.category.id
      }).then(function (response) {
        _this.items = response.data.raw;
        _this.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this.errorAlert();
        }

        _this.loading = false;
      });
    },
    showAddForm: function showAddForm() {},
    errorAlert: function errorAlert() {
      this.$store.commit("showSnackbar", {
        color: false,
        text: "Something went wrong."
      });
    }
  },
  computed: {
    customID: function customID() {
      return this.formData.id > 0 ? "RI - ".concat(this.formData.id.toString().padStart(4, "0")) : "N/A";
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
      !_vm.selected
        ? _c("app-raw-category", { on: { showrawitems: _vm.showrawitems } })
        : _vm._e(),
      _vm._v(" "),
      _vm.selected
        ? _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c("app-raw-dialog"),
                      _vm._v(" "),
                      _c(
                        "v-card-title",
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(this.category.name) +
                              " raw items\n                    "
                          ),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ml-3",
                              attrs: {
                                text: "",
                                outlined: "",
                                color: "green darken-4"
                              },
                              on: { click: _vm.showAddForm }
                            },
                            [
                              _vm._v(
                                "\n                        Add\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "" },
                              on: {
                                click: function($event) {
                                  _vm.selected = false
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        Back to categories\n                    "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.items,
                          loading: _vm.loading
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "item.id",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _vm._v(
                                    "\n                        RI - " +
                                      _vm._s(
                                        item.id.toString().padStart(4, "0")
                                      ) +
                                      "\n                    "
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          773962090
                        )
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
        : _vm._e()
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