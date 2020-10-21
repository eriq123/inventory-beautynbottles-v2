(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/units/baseContainer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/units/baseContainer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "app-raw-menu": function appRawMenu() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/components/pages/products/raw/rawMenu */ "./resources/js/components/pages/products/raw/rawMenu.vue"));
    }
  },
  data: function data() {
    return {
      headers: [{
        text: "Code",
        align: "start",
        value: "id"
      }, {
        text: "Unit Name",
        value: "name"
      }, {
        text: "Actions",
        value: "actions"
      }],
      items: [],
      loading: false,
      showForm: false,
      deleteForm: false,
      formData: {
        action: null,
        id: 0,
        base_name: null
      },
      itemIndex: -1,
      menu: {
        id: 0,
        name: null
      }
    };
  },
  mounted: function mounted() {
    this.getBaseUnits();
  },
  methods: {
    selectunitsofmeasurement: function selectunitsofmeasurement(item) {
      this.menu.id = item.id;
      this.menu.name = item.name;
    },
    getBaseUnits: function getBaseUnits() {
      var _this = this;

      this.loading = true;
      axios.post("/units/base/view").then(function (response) {
        _this.items = response.data.base;

        _this.resetMenu();

        _this.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this.$store.commit("errorSnackbar");
        }

        _this.loading = false;
      });
    },
    showAddForm: function showAddForm() {
      this.formData.action = "add";
      this.formData.id = 0;
      this.formData.base_name = null;
      this.itemIndex = -1;
      this.showForm = true;
    },
    showUpdateForm: function showUpdateForm(item) {
      this.formData.action = "update";
      this.formData.id = item.id;
      this.formData.base_name = item.name;
      this.itemIndex = this.items.indexOf(item);
      this.showForm = true;
    },
    deleteProcess: function deleteProcess(item) {
      var _this2 = this;

      if (item.id) {
        if (confirm("Are you sure you want to delete ".concat(item.name))) {
          this.loading = true;
          axios.post("/units/base/delete", {
            id: item.id
          }).then(function (response) {
            _this2.$store.commit("showSnackbar", {
              color: true,
              text: "".concat(response.data.base.name, " deleted.")
            });

            _this2.itemIndex = _this2.items.indexOf(item);

            _this2.items.splice(_this2.itemIndex, 1);

            _this2.loading = false;
            _this2.showForm = false;

            if (_this2.menu.id == response.data.base.id) {
              _this2.resetMenu();
            }
          })["catch"](function (error) {
            if (error.response) {
              console.log(error.response);

              _this2.$store.commit("errorSnackbar");
            }

            _this2.loading = false;
          });
        }
      } else {
        this.$store.commit("errorSnackbar");
      }
    },
    submitForm: function submitForm() {
      if (this.formData.base_name) {
        this.loading = true;

        if (this.formData.action == "add") {
          this.processAdd();
        } else {
          this.processUpdate();
        }

        this.showForm = false;
      } else {
        this.$store.commit("showSnackbar", {
          color: false,
          text: "Unit name is required."
        });
      }
    },
    processAdd: function processAdd() {
      var _this3 = this;

      axios.post("/units/base/add", {
        name: this.formData.base_name
      }).then(function (response) {
        _this3.$store.commit("showSnackbar", {
          color: true,
          text: "".concat(response.data.base.name, " added.")
        });

        _this3.items.push(response.data.base);

        _this3.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this3.$store.commit("errorSnackbar");
        }

        _this3.loading = false;
      });
    },
    processUpdate: function processUpdate() {
      var _this4 = this;

      axios.post("/units/base/update", {
        id: this.formData.id,
        name: this.formData.base_name
      }).then(function (response) {
        _this4.$store.commit("showSnackbar", {
          color: true,
          text: "".concat(response.data.base.name, " updated.")
        });

        Object.assign(_this4.items[_this4.itemIndex], response.data.base);
        _this4.loading = false;

        if (response.data.base.id == _this4.menu.id) {
          _this4.menu.name = response.data.base.name;
        }
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this4.$store.commit("errorSnackbar");
        }

        _this4.loading = false;
      });
    },
    resetMenu: function resetMenu() {
      this.menu.id = this.items[0].id;
      this.menu.name = this.items[0].name;
    },
    showConverts: function showConverts(item) {
      this.$emit("showconverts", item);
    }
  },
  computed: {
    customID: function customID() {
      return this.formData.id > 0 ? "UNIT - ".concat(this.formData.id.toString().padStart(4, "0")) : "N/A";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/units/baseContainer.vue?vue&type=template&id=3fb6c50a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/units/baseContainer.vue?vue&type=template&id=3fb6c50a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            { attrs: { sm: "10", "offset-sm": "1" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _c("span", { staticClass: "mr-1" }, [
                        _vm._v("Units of Measurement:")
                      ]),
                      _vm._v(" "),
                      _c("app-raw-menu", {
                        attrs: { menu: _vm.items, selected: _vm.menu.name },
                        on: { selectedmenu: _vm.selectunitsofmeasurement }
                      }),
                      _vm._v(" "),
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
                            { attrs: { sm: "12" } },
                            [
                              _c("v-data-table", {
                                attrs: {
                                  headers: _vm.headers,
                                  items: _vm.items,
                                  loading: _vm.loading
                                },
                                on: { "click:row": _vm.showConverts },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "item.id",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _vm._v(
                                            "\n                                    UNIT -\n                                    " +
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
                                      key: "item.actions",
                                      fn: function(ref) {
                                        var item = ref.item
                                        return [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                text: "",
                                                color: "blue darken-4"
                                              },
                                              on: {
                                                click: function($event) {
                                                  $event.stopPropagation()
                                                  return _vm.showUpdateForm(
                                                    item
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Update")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                text: "",
                                                color: "red darken-4"
                                              },
                                              on: {
                                                click: function($event) {
                                                  $event.stopPropagation()
                                                  return _vm.deleteProcess(item)
                                                }
                                              }
                                            },
                                            [_vm._v("Delete")]
                                          )
                                        ]
                                      }
                                    },
                                    _vm.showForm
                                      ? {
                                          key: "body.prepend",
                                          fn: function() {
                                            return [
                                              _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(_vm.customID) +
                                                      "\n                                        "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        autofocus: "",
                                                        label: "Unit Name"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.formData
                                                            .base_name,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.formData,
                                                            "base_name",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "formData.base_name"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        staticClass:
                                                          "ml-1 my-1",
                                                        attrs: {
                                                          text: "",
                                                          outlined: "",
                                                          color:
                                                            "green darken-4"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.stopPropagation()
                                                            return _vm.submitForm(
                                                              $event
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                Save\n                                            "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        staticClass:
                                                          "ml-1 my-1",
                                                        attrs: {
                                                          text: "",
                                                          outlined: ""
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.stopPropagation()
                                                            _vm.showForm = !_vm.showForm
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                Cancel\n                                            "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ])
                                            ]
                                          },
                                          proxy: true
                                        }
                                      : null
                                  ],
                                  null,
                                  true
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/units/baseContainer.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/units/baseContainer.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseContainer_vue_vue_type_template_id_3fb6c50a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseContainer.vue?vue&type=template&id=3fb6c50a& */ "./resources/js/components/pages/units/baseContainer.vue?vue&type=template&id=3fb6c50a&");
/* harmony import */ var _baseContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/units/baseContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _baseContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _baseContainer_vue_vue_type_template_id_3fb6c50a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _baseContainer_vue_vue_type_template_id_3fb6c50a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/units/baseContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/units/baseContainer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/units/baseContainer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_baseContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./baseContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/units/baseContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_baseContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/units/baseContainer.vue?vue&type=template&id=3fb6c50a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/units/baseContainer.vue?vue&type=template&id=3fb6c50a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_baseContainer_vue_vue_type_template_id_3fb6c50a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./baseContainer.vue?vue&type=template&id=3fb6c50a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/units/baseContainer.vue?vue&type=template&id=3fb6c50a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_baseContainer_vue_vue_type_template_id_3fb6c50a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_baseContainer_vue_vue_type_template_id_3fb6c50a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);