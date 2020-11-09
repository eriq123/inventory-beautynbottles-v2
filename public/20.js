(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/qrContainer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/qrContainer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "app-qrcode": function appQrcode() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! qrcode.vue */ "./node_modules/qrcode.vue/dist/qrcode.vue.esm.js"));
    }
  },
  props: {
    items: {
      required: true
    },
    route: {
      required: true
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    processPrint: function processPrint() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var element, filename, opt;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $("#excludeFromPDF").hide();
                element = document.getElementById("pdfPrint");
                filename = "".concat(_this.customTitle, " QR codes.pdf");
                opt = {
                  margin: 1,
                  filename: filename,
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
                _context.next = 6;
                return html2pdf().set(opt).from(element).save();

              case 6:
                $("#excludeFromPDF").show();

                _this.$store.commit("showSnackbar", {
                  color: true,
                  text: "PDF has been downloaded."
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  computed: {
    customTitle: function customTitle() {
      return this.route == "/qr/products" ? "Assembled Products" : "Raw Items";
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
                    _vm._v("mdi-file-pdf-outline")
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
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.customTitle) +
                    "\n            "
                )
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _qrContainer_vue_vue_type_template_id_d6e5b74c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qrContainer.vue?vue&type=template&id=d6e5b74c& */ "./resources/js/components/pages/qrContainer.vue?vue&type=template&id=d6e5b74c&");
/* harmony import */ var _qrContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qrContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/qrContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! exports provided: default */
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