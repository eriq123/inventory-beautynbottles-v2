(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/raw/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "categories-layout": function categoriesLayout() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! @/components/pages/products/categories/index */ "./resources/js/components/pages/products/categories/index.vue"));
    },
    "crud-dialog": function crudDialog() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! @/components/pages/products/categories/dialog */ "./resources/js/components/pages/products/categories/dialog.vue"));
    },
    "info-alert": function infoAlert() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! @/components/common/info-alert */ "./resources/js/components/common/info-alert.vue"));
    },
    "raw-crud": function rawCrud() {
      return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./raw-crud */ "./resources/js/components/pages/products/raw/raw-crud.vue"));
    }
  },
  data: function data() {
    return {
      category: {
        id: 0,
        name: null,
        isSelected: false
      },
      datatable: {
        headers: [{
          text: "Code",
          align: "start",
          value: "code"
        }, {
          text: "Name",
          align: "start",
          sortable: true,
          value: "name"
        }, {
          text: "Actions",
          value: "actions",
          align: "center",
          sortable: false
        }],
        items: [],
        loading: false
      },
      dialog: {
        show: false,
        title: "N/A"
      },
      form: {
        code: "N/A",
        id: 0,
        name: "N/A"
      },
      itemIndex: -1,
      type: "raw"
    };
  },
  mounted: function mounted() {
    this.loadItems();
  },
  methods: {
    loadItems: function loadItems() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.datatable.loading = true;
                _context.next = 3;
                return axios.post("/products/category/view", {
                  type: _this.type
                }).then(function (response) {
                  _this.datatable.items = response.data.category;
                });

              case 3:
                _this.datatable.loading = false;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showItems: function showItems(items) {
      this.category = items;
      this.category.isSelected = true;
      this.loadItems();
    },
    onBack: function onBack() {
      this.category = {
        id: 0,
        name: null,
        isSelected: false
      };
      this.loadItems();
    },
    onCreate: function onCreate() {
      this.dialog.title = "Create";
      this.itemIndex = -1;
      this.formData();
    },
    onEdit: function onEdit(item) {
      this.dialog.title = "Update";
      this.formData(item.id, item.code, item.name);
      this.itemIndex = this.datatable.items.indexOf(item);
    },
    formData: function formData() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "N/A";
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this.form.id = id;
      this.form.code = code;
      this.form.name = name;
      this.dialog.show = true;
    },
    submit: function submit() {
      if (this.form.name) {
        this.dialog.show = false;
        this.datatable.loading = true;
        this.itemIndex == -1 ? this.onStore() : this.onUpdate();
      } else {
        this.$store.commit("showSnackbar", {
          color: false,
          text: "Category name is required."
        });
      }
    },
    onStore: function onStore() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("/products/category/add", {
                  name: _this2.form.name,
                  type: _this2.type
                }).then(function (response) {
                  _this2.$store.commit("showSnackbar", {
                    color: true,
                    text: "".concat(response.data.category.name, " added.")
                  });

                  _this2.datatable.items.unshift(response.data.category);
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    _this2.$store.commit("errorSnackbar");
                  }
                });

              case 2:
                _this2.datatable.loading = false;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onUpdate: function onUpdate() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post("/products/category/update", {
                  id: _this3.form.id,
                  name: _this3.form.name
                }).then(function (response) {
                  console.log("category update");

                  _this3.$store.commit("showSnackbar", {
                    color: true,
                    text: "".concat(response.data.category.name, " updated.")
                  });

                  Object.assign(_this3.datatable.items[_this3.itemIndex], response.data.category);
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    _this3.$store.commit("errorSnackbar");
                  }
                });

              case 2:
                _this3.datatable.loading = false;

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    onDelete: function onDelete(item) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!confirm("Are you sure you want to delete ".concat(item.name))) {
                  _context4.next = 5;
                  break;
                }

                _this4.datatable.loading = true;
                _context4.next = 4;
                return axios.post("/products/category/delete", {
                  id: item.id
                }).then(function (response) {
                  _this4.$store.commit("showSnackbar", {
                    color: true,
                    text: "".concat(response.data.category.name, " deleted.")
                  });

                  _this4.itemIndex = _this4.datatable.items.indexOf(item);

                  _this4.datatable.items.splice(_this4.itemIndex, 1);
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    _this4.$store.commit("errorSnackbar");
                  }
                });

              case 4:
                _this4.datatable.loading = false;

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/index.vue?vue&type=template&id=542f2336&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/raw/index.vue?vue&type=template&id=542f2336& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        "v-slide-x-reverse-transition",
        { attrs: { mode: "out-in" } },
        [
          !_vm.category.isSelected
            ? _c("categories-layout", {
                attrs: {
                  headers: _vm.datatable.headers,
                  items: _vm.datatable.items,
                  loading: _vm.datatable.loading,
                  isSelected: _vm.category.isSelected,
                  categoryName: _vm.category.name
                },
                on: {
                  onCreate: _vm.onCreate,
                  onEdit: _vm.onEdit,
                  onDelete: _vm.onDelete,
                  onBack: _vm.onBack,
                  showItems: _vm.showItems
                },
                scopedSlots: _vm._u(
                  [
                    !_vm.category.isSelected
                      ? {
                          key: "info-alert",
                          fn: function() {
                            return [
                              _c("info-alert", {
                                attrs: {
                                  text: "Click on table rows to view raw items."
                                }
                              })
                            ]
                          },
                          proxy: true
                        }
                      : null,
                    {
                      key: "dialog",
                      fn: function() {
                        return [
                          _c(
                            "crud-dialog",
                            {
                              attrs: { title: _vm.dialog.title },
                              on: { submit: _vm.submit },
                              model: {
                                value: _vm.dialog.show,
                                callback: function($$v) {
                                  _vm.$set(_vm.dialog, "show", $$v)
                                },
                                expression: "dialog.show"
                              }
                            },
                            [
                              _c(
                                "v-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Code", disabled: "" },
                                        model: {
                                          value: _vm.form.code,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "code", $$v)
                                          },
                                          expression: "form.code"
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
                                { attrs: { "no-gutters": "" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Name", autofocus: "" },
                                        on: {
                                          keyup: function($event) {
                                            if (
                                              !$event.type.indexOf("key") &&
                                              _vm._k(
                                                $event.keyCode,
                                                "enter",
                                                13,
                                                $event.key,
                                                "Enter"
                                              )
                                            ) {
                                              return null
                                            }
                                            return _vm.submit($event)
                                          }
                                        },
                                        model: {
                                          value: _vm.form.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "name", $$v)
                                          },
                                          expression: "form.name"
                                        }
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
                        ]
                      },
                      proxy: true
                    }
                  ],
                  null,
                  true
                )
              })
            : _c("raw-crud", {
                attrs: { id: _vm.category.id, name: _vm.category.name },
                on: { onBack: _vm.onBack }
              })
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

/***/ "./resources/js/components/pages/products/raw/index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_542f2336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=542f2336& */ "./resources/js/components/pages/products/raw/index.vue?vue&type=template&id=542f2336&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/raw/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_542f2336___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_542f2336___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/raw/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/raw/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/raw/index.vue?vue&type=template&id=542f2336&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/index.vue?vue&type=template&id=542f2336& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_542f2336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=542f2336& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/index.vue?vue&type=template&id=542f2336&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_542f2336___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_542f2336___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);