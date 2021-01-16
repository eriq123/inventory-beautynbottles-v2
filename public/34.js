(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      required: true
    },
    name: {
      type: String
    }
  },
  components: {
    "app-converted-units": function appConvertedUnits() {
      return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! @/components/common/converted-units */ "./resources/js/components/common/converted-units.vue"));
    },
    "app-qrcode": function appQrcode() {
      return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! qrcode.vue */ "./node_modules/qrcode.vue/dist/qrcode.vue.esm.js"));
    },
    "app-menu": function appMenu() {
      return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! @/components/common/menu */ "./resources/js/components/common/menu.vue"));
    },
    "crud-dialog": function crudDialog() {
      return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! @/components/pages/products/categories/dialog-500 */ "./resources/js/components/pages/products/categories/dialog-500.vue"));
    },
    "datatable-search": function datatableSearch() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/components/common/datatable-search */ "./resources/js/components/common/datatable-search.vue"));
    },
    // "info-alert": () => import("@/components/common/info-alert"),
    "main-layout": function mainLayout() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! @/components/layouts/categories-product/index */ "./resources/js/components/layouts/categories-product/index.vue"));
    }
  },
  data: function data() {
    return {
      datatable: {
        headers: [{
          text: "Code",
          align: "start",
          value: "code"
        }, {
          text: "Raw Item Name",
          align: "start",
          value: "name"
        }, {
          text: "Quantity",
          value: "units_needed",
          align: "end"
        }, {
          text: "Reorder Point",
          value: "custom_reorder_point",
          align: "end"
        }, {
          text: "Actions",
          value: "actions",
          align: "center",
          sortable: false
        }],
        items: [],
        loading: false,
        search: null
      },
      dialog: {
        show: false,
        title: "N/A",
        qr_code: null,
        converts: [],
        conversion: {
          quantity: {
            label: null,
            value: null
          },
          reorder_point: {
            label: null,
            value: null
          }
        },
        unit_label: null
      },
      form: {
        base_id: 0,
        category_id: 0,
        name: null,
        quantity: 1,
        reorder_point: 1
      },
      itemIndex: -1,
      units: [],
      converts: []
    };
  },
  mounted: function mounted() {
    this.form.category_id = this.id;
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
                return axios.post("/products/raw/view", {
                  id: _this.id
                }).then(function (response) {
                  _this.datatable.items = response.data.raw;
                  _this.units = response.data.base;
                  _this.converts = response.data.convert;
                })["catch"](function (error) {
                  if (error.response) {
                    console.log(error.response);

                    _this.$store.commit("errorSnackbar");
                  }
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
    onCreate: function onCreate() {
      this.dialog.title = "Add";
      this.itemIndex = -1;
      this.dialog.qr_code = null;
      this.formData();

      if (this.units.length > 0) {
        this.form.base_id = this.units[0].id;
        this.dialog.conversion.reorder_point.label = this.dialog.conversion.quantity.label = this.dialog.unit_label = this.units[0].name;
      }

      this.prepareFilteredConverts();
      this.dialog.show = true;
    },
    onEdit: function onEdit(item) {
      this.dialog.title = "Update";
      this.itemIndex = this.datatable.items.indexOf(item);
      this.dialog.qr_code = item.qr_code;
      this.formData(item.name, item.base_id, item.quantity, item.reorder_point);
      this.form.base_id = item.base_id;
      this.dialog.conversion.reorder_point.label = this.dialog.conversion.quantity.label = this.dialog.unit_label = item.base.name;
      this.prepareFilteredConverts();
      this.dialog.show = true;
    },
    formData: function formData() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var base_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var reorder_point = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      this.form.name = name;
      this.form.base_id = base_id;
      this.form.quantity = quantity;
      this.form.reorder_point = reorder_point;
    },
    prepareFilteredConverts: function prepareFilteredConverts() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var filterConverts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                filterConverts = _toConsumableArray(_this2.converts);
                _context2.next = 3;
                return filterConverts.filter(function (item) {
                  if (item.base_id == _this2.form.base_id) {
                    return item;
                  }
                });

              case 3:
                _this2.dialog.converts = _context2.sent;
                console.log(_this2.converts);
                console.log(_this2.dialog.converts);

                if (_this2.dialog.converts.length > 0) {
                  _this2.dialog.conversion.reorder_point.value = _this2.dialog.conversion.quantity.value = _this2.dialog.converts[0].value;
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    onStoreAndUpdate: function onStoreAndUpdate() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post(_this3.itemIndex == -1 ? "/products/raw/add" : "/products/raw/update", _this3.form).then(function (response) {
                  var raw = response.data.raw;

                  if (_this3.itemIndex == -1) {
                    _this3.$store.commit("showSnackbar", {
                      color: true,
                      text: "".concat(raw.name, " added.")
                    });

                    _this3.datatable.items.unshift(raw);
                  } else {
                    _this3.$store.commit("showSnackbar", {
                      color: true,
                      text: "".concat(raw.name, " has been updated.")
                    });

                    Object.assign(_this3.datatable.items[_this3.itemIndex], raw);
                  }
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
                return axios.post("/products/raw/delete", {
                  id: item.id
                }).then(function (response) {
                  _this4.$store.commit("showSnackbar", {
                    color: true,
                    text: "".concat(response.data.raw.name, " deleted.")
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
    },
    submit: function submit() {
      if (this.form.quantity >= 0 || this.form.name !== null || this.form.reorder_point >= 0 || this.form.base_id !== 0) {
        this.dialog.show = false;
        this.datatable.loading = true;
        this.form.quantity = this.dialog.conversion.quantity.value * this.form.quantity;
        this.form.reorder_point = this.dialog.conversion.reorder_point.value * this.form.reorder_point;
        this.onStoreAndUpdate();
      } else {
        this.$store.commit("showSnackbar", {
          color: false,
          text: "Please check all fields and try again."
        });
      }
    },
    onSelectBase: function onSelectBase(item) {
      this.dialog.conversion.reorder_point.label = this.dialog.conversion.quantity.label = this.dialog.unit_label = item.name;
      this.form.base_id = item.id;
      this.prepareFilteredConverts();
    },
    onSelectQuantity: function onSelectQuantity(item) {
      this.dialog.conversion.quantity.label = item.name;
      this.dialog.conversion.quantity.value = item.value;
    },
    onSelectReorderPoint: function onSelectReorderPoint(item) {
      this.dialog.conversion.reorder_point.label = item.name;
      this.dialog.conversion.reorder_point.value = item.value;
    },
    unitslink: function unitslink() {
      window.location.href = "/units/";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=template&id=f2fa5ae2&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=template&id=f2fa5ae2& ***!
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
  return _c("main-layout", {
    scopedSlots: _vm._u([
      {
        key: "card-title",
        fn: function() {
          return [
            _c(
              "v-btn",
              { attrs: { text: "" } },
              [
                _c(
                  "v-icon",
                  {
                    attrs: { left: "" },
                    on: {
                      click: function($event) {
                        return _vm.$emit("onBack")
                      }
                    }
                  },
                  [_vm._v("mdi-arrow-left")]
                )
              ],
              1
            ),
            _vm._v("\n    " + _vm._s(_vm.name) + "\n    "),
            _c(
              "v-btn",
              {
                staticClass: "ml-3",
                attrs: { text: "", outlined: "", color: "green darken-4" },
                on: { click: _vm.onCreate }
              },
              [_vm._v("\n      Create\n    ")]
            ),
            _vm._v(" "),
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
                          attrs: {
                            label: "Category Name",
                            value: _vm.name,
                            disabled: ""
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
                          attrs: { label: "Raw Item Name", "hide-details": "" },
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
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12" } },
                      [
                        _c(
                          "v-tooltip",
                          {
                            attrs: { left: "" },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  var attrs = ref.attrs
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            attrs: { text: "" },
                                            on: { click: _vm.unitslink }
                                          },
                                          "v-btn",
                                          attrs,
                                          false
                                        ),
                                        on
                                      ),
                                      [
                                        _vm._v(
                                          "\n                Unit of Measurement:\n              "
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          },
                          [_vm._v(" "), _c("span", [_vm._v(" Update ")])]
                        ),
                        _vm._v(" "),
                        _c("app-menu", {
                          attrs: {
                            menu: _vm.units,
                            label: _vm.dialog.unit_label
                          },
                          on: { onSelect: _vm.onSelectBase }
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
                      { attrs: { cols: "6" } },
                      [
                        _c("v-text-field", {
                          attrs: { type: "number", label: "Quantity" },
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
                          scopedSlots: _vm._u([
                            {
                              key: "append-outer",
                              fn: function() {
                                return [
                                  _c("app-menu", {
                                    attrs: {
                                      menu: _vm.dialog.converts,
                                      label:
                                        _vm.dialog.conversion.quantity.label
                                    },
                                    on: { onSelect: _vm.onSelectQuantity }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ]),
                          model: {
                            value: _vm.form.quantity,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "quantity", $$v)
                            },
                            expression: "form.quantity"
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
                        _c("app-converted-units", {
                          attrs: {
                            quantity: _vm.form.quantity,
                            convertValue: _vm.dialog.conversion.quantity.value,
                            label: _vm.dialog.unit_label
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
                  { staticClass: "mb-3", attrs: { "no-gutters": "" } },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "6" } },
                      [
                        _c("v-text-field", {
                          attrs: { type: "number", label: "Reorder point" },
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
                          scopedSlots: _vm._u([
                            {
                              key: "append-outer",
                              fn: function() {
                                return [
                                  _c("app-menu", {
                                    attrs: {
                                      menu: _vm.dialog.converts,
                                      label:
                                        _vm.dialog.conversion.reorder_point
                                          .label
                                    },
                                    on: { onSelect: _vm.onSelectReorderPoint }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ]),
                          model: {
                            value: _vm.form.reorder_point,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "reorder_point", $$v)
                            },
                            expression: "form.reorder_point"
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
                        _c("app-converted-units", {
                          attrs: {
                            quantity: _vm.form.reorder_point,
                            convertValue:
                              _vm.dialog.conversion.reorder_point.value,
                            label: _vm.dialog.unit_label
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.dialog.qr_code
                  ? _c(
                      "v-row",
                      { attrs: { "no-gutters": "" } },
                      [
                        _c(
                          "v-col",
                          { staticClass: "py-0", attrs: { align: "center" } },
                          [
                            _c("app-qrcode", {
                              staticClass: "center-align",
                              attrs: { value: _vm.dialog.qr_code, level: "H" }
                            })
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
          ]
        },
        proxy: true
      },
      {
        key: "datatable",
        fn: function() {
          return [
            _c("v-data-table", {
              attrs: {
                headers: _vm.datatable.headers,
                items: _vm.datatable.items,
                loading: _vm.datatable.loading,
                search: _vm.datatable.search
              },
              scopedSlots: _vm._u([
                {
                  key: "top",
                  fn: function() {
                    return [
                      _c("datatable-search", {
                        model: {
                          value: _vm.datatable.search,
                          callback: function($$v) {
                            _vm.$set(_vm.datatable, "search", $$v)
                          },
                          expression: "datatable.search"
                        }
                      })
                    ]
                  },
                  proxy: true
                },
                {
                  key: "item.actions",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "", color: "blue darken-4" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.onEdit(item)
                            }
                          }
                        },
                        [_vm._v("\n          Update\n        ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { text: "", color: "red darken-4" } },
                        [_vm._v(" Delete ")]
                      )
                    ]
                  }
                }
              ])
            })
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/products/raw/raw-crud.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/raw-crud.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _raw_crud_vue_vue_type_template_id_f2fa5ae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raw-crud.vue?vue&type=template&id=f2fa5ae2& */ "./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=template&id=f2fa5ae2&");
/* harmony import */ var _raw_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raw-crud.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _raw_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _raw_crud_vue_vue_type_template_id_f2fa5ae2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _raw_crud_vue_vue_type_template_id_f2fa5ae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/products/raw/raw-crud.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_raw_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./raw-crud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_raw_crud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=template&id=f2fa5ae2&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=template&id=f2fa5ae2& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_raw_crud_vue_vue_type_template_id_f2fa5ae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./raw-crud.vue?vue&type=template&id=f2fa5ae2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/products/raw/raw-crud.vue?vue&type=template&id=f2fa5ae2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_raw_crud_vue_vue_type_template_id_f2fa5ae2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_raw_crud_vue_vue_type_template_id_f2fa5ae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);