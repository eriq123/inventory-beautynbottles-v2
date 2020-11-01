(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_qr_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-qr-reader */ "./node_modules/vue-qr-reader/dist/vue-qr-reader.min.js");
/* harmony import */ var vue_qr_reader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_qr_reader__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      backCamera: true,
      drawOnFound: true,
      stopOnScan: true,
      eventDetail: null
    };
  },
  methods: {
    qrScanned: function qrScanned(event) {
      this.eventDetail = event.detail[0];
    },
    errorCaptured: function errorCaptured(error) {
      switch (error.name) {
        case "NotAllowedError":
          this.$commit("showSnackbar", {
            color: false,
            text: "Camera permission denied."
          });
          break;

        case "NotFoundError":
          this.$commit("showSnackbar", {
            color: false,
            text: "There is no connected camera."
          });
          break;

        case "NotSupportedError":
          this.$commit("showSnackbar", {
            color: false,
            text: "Seems like this page is served in non-secure context."
          });
          break;

        case "NotReadableError":
          this.$commit("showSnackbar", {
            color: false,
            text: "Couldn't access your camera. Is it already in use?"
          });
          break;

        case "OverconstrainedError":
          this.$commit("showSnackbar", {
            color: false,
            text: "Constraints don't match any installed camera."
          });
          break;

        default:
          // this.errorMessage = "UNKNOWN ERROR: " + error.message;
          console.log(error);
          this.$commit("errorSnackbar");
      }

      console.log(error);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
            { attrs: { sm: "12", md: "8", "offset-md": "2" } },
            [
              _c("vue-qr-reader", {
                attrs: {
                  responsive: "true",
                  "use-back-camera": _vm.backCamera,
                  "draw-on-found": _vm.drawOnFound,
                  "stop-on-scan": _vm.stopOnScan
                },
                on: { "code-scanned": _vm.qrScanned }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "" },
                  on: {
                    click: function($event) {
                      _vm.backCamera = !_vm.backCamera
                    }
                  }
                },
                [_vm._v("\n                use back camera\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "" },
                  on: {
                    click: function($event) {
                      _vm.drawOnFound = !_vm.drawOnFound
                    }
                  }
                },
                [_vm._v("\n                draw on found\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "" },
                  on: {
                    click: function($event) {
                      _vm.stopOnScan = !_vm.stopOnScan
                    }
                  }
                },
                [_vm._v("\n                stop on scan\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v("\n    Event: " + _vm._s(this.eventDetail) + "\n")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/homeContainer.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/homeContainer.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeContainer.vue?vue&type=template&id=de88dc48& */ "./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48&");
/* harmony import */ var _homeContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _homeContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/homeContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./homeContainer.vue?vue&type=template&id=de88dc48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/homeContainer.vue?vue&type=template&id=de88dc48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeContainer_vue_vue_type_template_id_de88dc48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);