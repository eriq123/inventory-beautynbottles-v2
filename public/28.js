(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/qrContainer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/qrContainer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "app-qrcode": function appQrcode() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! qrcode.vue */ "./node_modules/qrcode.vue/dist/qrcode.vue.esm.js"));
    }
  },
  props: {
    items: {
      required: true
    }
  },
  data: function data() {
    return {};
  },
  created: function created() {
    var script = document.createElement("script");
    script.type = "application/javascript";
    script.src = "https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js";
    document.head.appendChild(script);
  },
  methods: {
    processPrint: function processPrint() {
      $("#excludeFromPDF").hide();
      var element = document.getElementById("pdfPrint");
      var opt = {
        margin: 1,
        filename: "QR Codes.pdf",
        image: {
          type: "jpeg",
          quality: 1
        },
        html2canvas: {
          scale: 2
        },
        pagebreak: {
          mode: "avoid-all",
          before: ".pageBreaker"
        },
        jsPDF: {
          format: "a4",
          orientation: "portrait"
        }
      };
      html2pdf().set(opt).from(element).save();
      $("#excludeFromPDF").show();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/qrContainer.vue?vue&type=template&id=d6e5b74c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/qrContainer.vue?vue&type=template&id=d6e5b74c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "pdfPrint" } },
    [
      _c(
        "v-row",
        { attrs: { id: "excludeFromPDF" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { text: "", color: "pink accent-2" },
                  on: { click: _vm.processPrint }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v("mdi-download")
                  ]),
                  _vm._v(" "),
                  _c("h3", [_vm._v("Download in PDF format")])
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
      _vm._l(_vm.items, function(newItem, index) {
        return _c(
          "v-row",
          { key: index, staticClass: "pa-2" },
          [
            _c("v-col", { attrs: { cols: "12" } }, [
              _c("h2", { staticStyle: { "text-align": "center" } }, [
                _vm._v("\n                Raw items\n            ")
              ])
            ]),
            _vm._v(" "),
            _vm._l(newItem, function(item, index) {
              return _c(
                "v-col",
                { key: index, attrs: { cols: "3" } },
                [
                  _c(
                    "p",
                    {
                      staticStyle: {
                        "text-align": "center",
                        "margin-bottom": "16px"
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(item.name) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("app-qrcode", {
                    staticStyle: { "text-align": "center" },
                    attrs: { value: item.qr_code, level: "H" }
                  }),
                  _vm._v(" "),
                  index % 23 == 0 && index !== 0
                    ? _c("div", { staticClass: "pageBreaker" })
                    : _vm._e()
                ],
                1
              )
            })
          ],
          2
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/qrContainer.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/qrContainer.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _qrContainer_vue_vue_type_template_id_d6e5b74c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qrContainer.vue?vue&type=template&id=d6e5b74c& */ "./resources/js/components/pages/qrContainer.vue?vue&type=template&id=d6e5b74c&");
/* harmony import */ var _qrContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qrContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/qrContainer.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _qrContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _qrContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _qrContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _qrContainer_vue_vue_type_template_id_d6e5b74c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _qrContainer_vue_vue_type_template_id_d6e5b74c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/qrContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/qrContainer.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/qrContainer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_qrContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./qrContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/qrContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_qrContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/qrContainer.vue?vue&type=template&id=d6e5b74c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/qrContainer.vue?vue&type=template&id=d6e5b74c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_qrContainer_vue_vue_type_template_id_d6e5b74c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./qrContainer.vue?vue&type=template&id=d6e5b74c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/qrContainer.vue?vue&type=template&id=d6e5b74c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_qrContainer_vue_vue_type_template_id_d6e5b74c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_qrContainer_vue_vue_type_template_id_d6e5b74c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);