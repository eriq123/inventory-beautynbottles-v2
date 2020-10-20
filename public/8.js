(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    dialogShow: {
      type: Boolean,
      "default": false
    },
    action: {
      type: String
    },
    title: {
      type: String
    },
    switchState: {
      type: Boolean
    },
    id: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      add: {
        "true": "Purchase",
        "false": "RTS"
      },
      minus: {
        "true": "Sold",
        "false": "Loss"
      }
    };
  },
  methods: {
    saveProductRaw: function saveProductRaw() {
      this.$emit("saveproductraw", {
        action: this.action,
        status: this.toggleLabel,
        id: this.id
      });
    }
  },
  computed: {
    showDialog: {
      get: function get() {
        return this.dialogShow;
      },
      set: function set() {
        this.$emit("dialogshowchange");
      }
    },
    toggleDialog: {
      get: function get() {
        return this.switchState;
      },
      set: function set() {
        this.$emit("togglechangestate");
      }
    },
    toggleLabel: function toggleLabel() {
      if (this.action == "add") {
        return this.switchState == true ? this.add["true"] : this.add["false"];
      } else {
        return this.switchState == true ? this.minus["true"] : this.minus["false"];
      }
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=template&id=564fac90&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=template&id=564fac90& ***!
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
    "v-dialog",
    {
      attrs: { "max-width": "500px" },
      model: {
        value: _vm.showDialog,
        callback: function($$v) {
          _vm.showDialog = $$v
        },
        expression: "showDialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v(_vm._s(this.title))
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                { attrs: { "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { sm: "4" } },
                    [
                      _c("v-switch", {
                        attrs: {
                          inset: "",
                          ripple: "",
                          color: _vm.action == "add" ? "success" : "error",
                          label: _vm.toggleLabel
                        },
                        model: {
                          value: _vm.toggleDialog,
                          callback: function($$v) {
                            _vm.toggleDialog = $$v
                          },
                          expression: "toggleDialog"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-col", { attrs: { sm: "8" } }, [_vm._t("quantity")], 2)
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
                      return _vm.$emit("dialogshowchange")
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
                      return _vm.saveProductRaw()
                    }
                  }
                },
                [_vm._v("Save")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/inventory/flow/dialog.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/pages/inventory/flow/dialog.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialog_vue_vue_type_template_id_564fac90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog.vue?vue&type=template&id=564fac90& */ "./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=template&id=564fac90&");
/* harmony import */ var _dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dialog_vue_vue_type_template_id_564fac90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dialog_vue_vue_type_template_id_564fac90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/inventory/flow/dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=template&id=564fac90&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=template&id=564fac90& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_template_id_564fac90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dialog.vue?vue&type=template&id=564fac90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/inventory/flow/dialog.vue?vue&type=template&id=564fac90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_template_id_564fac90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_template_id_564fac90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);