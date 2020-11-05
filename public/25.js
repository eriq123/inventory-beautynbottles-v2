(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp\\htdocs\\bnb3\\node_modules\\@babel\\runtime\\regenerator\\index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembledContainer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/assembledContainer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "app-assembled-products": function appAssembledProducts() {
      return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./assembled/products */ "./resources/js/components/pages/products/assembled/products.vue"));
    },
    "app-raw-menu": function appRawMenu() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./raw/rawMenu */ "./resources/js/components/pages/products/raw/rawMenu.vue"));
    },
    "app-raw-converted-units": function appRawConvertedUnits() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./raw/rawConvertedUnits */ "./resources/js/components/pages/products/raw/rawConvertedUnits.vue"));
    },
    "app-assembled-qrcode": function appAssembledQrcode() {
      return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! qrcode.vue */ "./node_modules/qrcode.vue/dist/qrcode.vue.esm.js"));
    }
  },
  data: function data() {
    return {
      selected: false,
      dialog: {
        action: "Add",
        show: false,
        loading: false,
        category_name: null,
        raw_name: null,
        raw_id: 0,
        product_id: 0,
        quantity: null,
        convert_collection: [],
        convert_name: null,
        convert_value: 1,
        base_name: null
      },
      product_name: null,
      autocomplete: {
        selected: null,
        items: [],
        loading: false,
        name: null
      },
      assembled: {
        headers: [{
          text: "Code",
          align: "start",
          value: "id"
        }, {
          text: "Raw Item Name",
          value: "name"
        }, {
          text: "Quantity",
          value: "units_needed",
          align: "end"
        }],
        items: [],
        loading: false
      },
      rawItemsReady: false,
      duplicateAttach: false,
      qr_code: null
    };
  },
  mounted: function mounted() {
    this.getAutocompleteRawItems();
  },
  methods: {
    showAddDialog: function showAddDialog() {
      if (this.autocomplete.selected) {
        console.log(this.autocomplete);
        console.log(this.dialog);
        this.dialog.action = "Add";
        this.dialog.category_name = this.autocomplete.selected.category.name;
        this.dialog.raw_name = this.autocomplete.selected.name;
        this.dialog.raw_id = this.autocomplete.selected.id;
        this.dialog.base_name = this.autocomplete.selected.base.name;
        this.dialog.show = true;
      } else {
        this.$store.commit("showSnackbar", {
          color: false,
          text: "Please select raw item first."
        });
      }
    },
    showEditDialog: function showEditDialog(item) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.assembled.loading = true;
                _context.next = 3;
                return _this.getConvertByBase(item.base_id);

              case 3:
                _this.dialog.action = "Update";
                _this.dialog.category_name = item.category.name;
                _this.dialog.raw_name = item.name;
                _this.dialog.raw_id = item.id;
                _this.dialog.base_name = item.base.name;
                _this.dialog.quantity = item.pivot.quantity;
                _this.assembled.loading = false;
                _this.dialog.show = true;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    processAddAndUpdate: function processAddAndUpdate() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.dialog.action == "Add")) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return _this2.attach();

              case 3:
                _context2.next = 7;
                break;

              case 5:
                _context2.next = 7;
                return _this2.updateAttach();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    processRemove: function processRemove() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.assembled.loading = true;
                _context3.next = 3;
                return axios.post("/products/assembled/detach", _this3.dialog).then(function (response) {
                  _this3.$store.commit("showSnackbar", {
                    color: true,
                    text: "".concat(_this3.dialog.raw_name, " removed.")
                  });

                  _this3.assembled.items = response.data.product.map(function (raw) {
                    raw.units_needed = raw.pivot.quantity;
                    return raw;
                  });
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    _this3.$store.commit("errorSnackbar");
                  }
                });

              case 3:
                _this3.assembled.loading = false;
                _this3.dialog.show = false;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    attach: function attach() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.checkForDuplicates();

                if (_this4.duplicateAttach) {
                  _context4.next = 10;
                  break;
                }

                _this4.dialog.quantity = _this4.dialog.quantity * _this4.dialog.convert_value;
                _this4.assembled.loading = true;
                _context4.next = 6;
                return axios.post("/products/assembled/attach", _this4.dialog).then(function (response) {
                  _this4.$store.commit("showSnackbar", {
                    color: true,
                    text: "".concat(_this4.dialog.raw_name, " added.")
                  });

                  _this4.assembled.items = response.data.product.map(function (raw) {
                    raw.units_needed = raw.pivot.quantity;
                    return raw;
                  });
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    _this4.$store.commit("errorSnackbar");
                  }
                });

              case 6:
                _this4.assembled.loading = false;
                _this4.dialog.show = false;
                _context4.next = 11;
                break;

              case 10:
                _this4.$store.commit("showSnackbar", {
                  color: false,
                  text: "This raw item already exist."
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    updateAttach: function updateAttach() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this5.dialog.quantity) {
                  _context5.next = 8;
                  break;
                }

                _this5.assembled.loading = true;
                _context5.next = 4;
                return axios.post("/products/assembled/update", _this5.dialog).then(function (response) {
                  _this5.$store.commit("showSnackbar", {
                    color: true,
                    text: "".concat(_this5.dialog.raw_name, " updated.")
                  });

                  _this5.assembled.items = response.data.product.map(function (raw) {
                    raw.units_needed = raw.pivot.quantity;
                    return raw;
                  });
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    _this5.$store.commit("errorSnackbar");
                  }
                });

              case 4:
                _this5.assembled.loading = false;
                _this5.dialog.show = false;
                _context5.next = 9;
                break;

              case 8:
                _this5.$store.commit("showSnackbar", {
                  color: false,
                  text: "Quantity field is required."
                });

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    getAutocompleteRawItems: function getAutocompleteRawItems() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios.post("/products/raw/view").then(function (response) {
                  _this6.autocomplete.items = response.data.raw;
                  _this6.rawItemsReady = true;
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    _this6.$store.commit("errorSnackbar");
                  }
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    productselected: function productselected(item) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.selected = true;
                _this7.dialog.product_id = item.id;
                _this7.product_name = item.name;
                _this7.qr_code = item.qr_code;
                _this7.autocomplete.selected = null;
                _this7.assembled.items = [];
                _this7.assembled.loading = true;
                _context7.next = 9;
                return axios.post("/products/assembled/view", {
                  id: item.id
                }).then(function (response) {
                  _this7.assembled.items = response.data.raw.map(function (raw) {
                    raw.units_needed = raw.pivot.quantity;
                    return raw;
                  });
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    _this7.$store.commit("errorSnackbar");
                  }
                });

              case 9:
                _this7.assembled.loading = false;

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    getConvertByBase: function getConvertByBase(id) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this8.dialog.quantity = null;
                _context8.next = 3;
                return axios.post("/units/convertsByBase", {
                  id: id
                }).then(function (response) {
                  _this8.dialog.convert_collection = response.data.convert;
                  _this8.dialog.convert_name = _this8.dialog.convert_collection[0].name;
                  _this8.dialog.convert_value = _this8.dialog.convert_collection[0].value;
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    _this8.$store.commit("errorSnackbar");
                  }
                });

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    checkForDuplicates: function checkForDuplicates() {
      var _this9 = this;

      this.duplicateAttach = false;
      this.assembled.items.forEach(function (item) {
        if (_this9.dialog.raw_id == item.id) {
          _this9.duplicateAttach = true;
        }
      });
    },
    selectedconvertquantity: function selectedconvertquantity(item) {
      this.dialog.convert_name = item.name;
      this.dialog.convert_value = item.value;
    }
  },
  watch: {
    "autocomplete.selected": function () {
      var _autocompleteSelected = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(value, old_value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!value) {
                  _context9.next = 5;
                  break;
                }

                this.dialog.loading = true;
                _context9.next = 4;
                return this.getConvertByBase(this.autocomplete.selected.base_id);

              case 4:
                this.dialog.loading = false;

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function autocompleteSelected(_x, _x2) {
        return _autocompleteSelected.apply(this, arguments);
      }

      return autocompleteSelected;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembledContainer.vue?vue&type=template&id=894c4b58&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/assembledContainer.vue?vue&type=template&id=894c4b58& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        ? _c("app-assembled-products", {
            attrs: { rawItemsReady: _vm.rawItemsReady },
            on: { productselected: _vm.productselected }
          })
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
                      _c(
                        "v-card-title",
                        [
                          _vm._v(
                            "\n                    Assemble " +
                              _vm._s(this.product_name) +
                              "\n                    "
                          ),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ml-3",
                              attrs: {
                                text: "",
                                outlined: "",
                                color: "green darken-4",
                                loading: _vm.dialog.loading
                              },
                              on: { click: _vm.showAddDialog }
                            },
                            [
                              _vm._v(
                                "\n                        Add\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "500px" },
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
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v(_vm._s(this.dialog.action))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { sm: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  disabled: "",
                                                  label: "Category Name",
                                                  value:
                                                    _vm.dialog.category_name
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
                                            { attrs: { sm: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  disabled: "",
                                                  label: "Raw Item Name",
                                                  value: _vm.dialog.raw_name
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
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  type: "number",
                                                  label: "Quantity",
                                                  autofocus: ""
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "append-outer",
                                                      fn: function() {
                                                        return [
                                                          _c("app-raw-menu", {
                                                            attrs: {
                                                              menu:
                                                                _vm.dialog
                                                                  .convert_collection,
                                                              selected:
                                                                _vm.dialog
                                                                  .convert_name
                                                            },
                                                            on: {
                                                              selectedmenu:
                                                                _vm.selectedconvertquantity
                                                            }
                                                          })
                                                        ]
                                                      },
                                                      proxy: true
                                                    }
                                                  ],
                                                  null,
                                                  false,
                                                  299366369
                                                ),
                                                model: {
                                                  value: _vm.dialog.quantity,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.dialog,
                                                      "quantity",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "dialog.quantity"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("app-raw-converted-units", {
                                                attrs: {
                                                  value: _vm.dialog.quantity,
                                                  convertValue:
                                                    _vm.dialog.convert_value,
                                                  formDataBaseName:
                                                    _vm.dialog.base_name
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _vm.dialog.action == "Update"
                                        ? _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                text: "",
                                                color: "red darken-3"
                                              },
                                              on: { click: _vm.processRemove }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    Remove\n                                "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { text: "" },
                                          on: {
                                            click: function($event) {
                                              _vm.dialog.show = false
                                            }
                                          }
                                        },
                                        [_vm._v("Cancel")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            text: "",
                                            color: "green darken-3"
                                          },
                                          on: { click: _vm.processAddAndUpdate }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    Save\n                                "
                                          )
                                        ]
                                      )
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
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-arrow-left")
                              ]),
                              _vm._v(
                                "\n                        Back to Products\n                    "
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { sm: "3" } },
                                [
                                  _c("app-assembled-qrcode", {
                                    staticClass: "right-align",
                                    attrs: { value: _vm.qr_code, level: "H" }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { sm: "9" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      "search-input": _vm.autocomplete.name,
                                      loading: _vm.autocomplete.loading,
                                      items: _vm.autocomplete.items,
                                      "item-text": "name",
                                      "item-value": "id",
                                      placeholder: "Search...",
                                      label: "Raw Items",
                                      hint:
                                        "Click the add button after selecting your preferred raw item.",
                                      "persistent-hint": "",
                                      "return-object": "",
                                      autofocus: "",
                                      clearable: "",
                                      "open-on-clear": "",
                                      color: "pink accent-1"
                                    },
                                    on: {
                                      "update:searchInput": function($event) {
                                        return _vm.$set(
                                          _vm.autocomplete,
                                          "name",
                                          $event
                                        )
                                      },
                                      "update:search-input": function($event) {
                                        return _vm.$set(
                                          _vm.autocomplete,
                                          "name",
                                          $event
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.autocomplete.selected,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.autocomplete,
                                          "selected",
                                          $$v
                                        )
                                      },
                                      expression: "autocomplete.selected"
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
                                { attrs: { sm: "12" } },
                                [
                                  _c("v-data-table", {
                                    attrs: {
                                      headers: _vm.assembled.headers,
                                      items: _vm.assembled.items,
                                      loading: _vm.assembled.loading
                                    },
                                    on: { "click:row": _vm.showEditDialog },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "item.id",
                                          fn: function(ref) {
                                            var item = ref.item
                                            return [
                                              _vm._v(
                                                "\n                                    RI -\n                                    " +
                                                  _vm._s(
                                                    item.id
                                                      .toString()
                                                      .padStart(4, "0")
                                                  ) +
                                                  "\n                                "
                                              )
                                            ]
                                          }
                                        },
                                        {
                                          key: "item.units_needed",
                                          fn: function(ref) {
                                            var item = ref.item
                                            return [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(item.units_needed) +
                                                  "\n                                    " +
                                                  _vm._s(item.base.name) +
                                                  "\n                                "
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      112599462
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

/***/ "./resources/js/components/pages/products/assembledContainer.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/pages/products/assembledContainer.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assembledContainer_vue_vue_type_template_id_894c4b58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assembledContainer.vue?vue&type=template&id=894c4b58& */ "./resources/js/components/pages/products/assembledContainer.vue?vue&type=template&id=894c4b58&");
/* harmony import */ var _assembledContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assembledContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/assembledContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _assembledContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assembledContainer_vue_vue_type_template_id_894c4b58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assembledContainer_vue_vue_type_template_id_894c4b58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/assembledContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/assembledContainer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/assembledContainer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assembledContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./assembledContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembledContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assembledContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/assembledContainer.vue?vue&type=template&id=894c4b58&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/assembledContainer.vue?vue&type=template&id=894c4b58& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assembledContainer_vue_vue_type_template_id_894c4b58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./assembledContainer.vue?vue&type=template&id=894c4b58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/assembledContainer.vue?vue&type=template&id=894c4b58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assembledContainer_vue_vue_type_template_id_894c4b58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assembledContainer_vue_vue_type_template_id_894c4b58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);