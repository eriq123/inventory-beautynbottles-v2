(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/units/convertContainer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/units/convertContainer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
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
    "app-base-unit": function appBaseUnit() {
      return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./baseContainer */ "./resources/js/components/pages/units/baseContainer.vue"));
    }
  },
  data: function data() {
    return {
      selected: false,
      headers: [{
        text: "Code",
        align: "start",
        value: "id"
      }, {
        text: "Unit Name",
        value: "name"
      }, {
        text: "Quantity",
        value: "value",
        align: "end"
      }, {
        text: "Actions",
        value: "actions"
      }],
      items: [],
      loading: false,
      formData: {
        id: 0,
        base_id: 0,
        name: null,
        value: null,
        action: "add"
      },
      itemIndex: -1,
      showForm: false,
      base_name: null
    };
  },
  methods: {
    showAddForm: function showAddForm() {
      this.formData.action = "add";
      this.formData.id = 0;
      this.formData.name = null;
      this.formData.value = null;
      this.itemIndex = -1;
      this.showForm = true;
    },
    showUpdateForm: function showUpdateForm(item) {
      this.formData.action = "update";
      this.formData.id = item.id;
      this.formData.name = item.name;
      this.formData.value = item.value;
      this.itemIndex = this.items.indexOf(item);
      this.showForm = true;
    },
    deleteProcess: function deleteProcess(item) {
      var _this = this;

      if (item.id) {
        if (confirm("Are you sure you want to delete ".concat(item.name))) {
          this.loading = true;
          axios.post("/units/convert/delete", {
            id: item.id
          }).then(function (response) {
            _this.$store.commit("showSnackbar", {
              color: true,
              text: "".concat(response.data.convert.name, " deleted.")
            });

            _this.itemIndex = _this.items.indexOf(item);

            _this.items.splice(_this.itemIndex, 1);

            _this.loading = false;
            _this.showForm = false;
          })["catch"](function (error) {
            if (error.response) {
              console.log(error.response);

              _this.$store.commit("errorSnackbar");
            }

            _this.loading = false;
          });
        }
      } else {
        this.$store.commit("errorSnackbar");
      }
    },
    submitForm: function submitForm() {
      if (this.formData.name && this.formData.value >= 0) {
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
      var _this2 = this;

      axios.post("/units/convert/add", this.formData).then(function (response) {
        _this2.$store.commit("showSnackbar", {
          color: true,
          text: "".concat(response.data.convert.name, " added.")
        });

        _this2.items.push(response.data.convert);

        _this2.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this2.$store.commit("errorSnackbar");
        }

        _this2.loading = false;
      });
    },
    processUpdate: function processUpdate() {
      var _this3 = this;

      axios.post("/units/convert/update", this.formData).then(function (response) {
        _this3.$store.commit("showSnackbar", {
          color: true,
          text: "".concat(response.data.convert.name, " updated.")
        });

        Object.assign(_this3.items[_this3.itemIndex], response.data.convert);
        _this3.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this3.$store.commit("errorSnackbar");
        }

        _this3.loading = false;
      });
    },
    showconverts: function showconverts(item) {
      var _this4 = this;

      this.selected = true;
      this.formData.base_id = item.id;
      this.base_name = item.name;
      this.loading = true;
      axios.post("/units/convert/view", {
        id: this.formData.base_id
      }).then(function (response) {
        _this4.items = response.data.convert;
        _this4.loading = false;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          _this4.$store.commit("errorSnackbar");
        }

        _this4.loading = false;
      });
    }
  },
  computed: {
    customID: function customID() {
      return this.formData.id > 0 ? "SUB-UNIT - ".concat(this.formData.id.toString().padStart(4, "0")) : "N/A";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/units/convertContainer.vue?vue&type=template&id=0a79aab8&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/units/convertContainer.vue?vue&type=template&id=0a79aab8& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        ? _c("app-base-unit", { on: { showconverts: _vm.showconverts } })
        : _vm._e(),
      _vm._v(" "),
      _vm.selected
        ? _c(
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
                          _vm._v(
                            "\n                    " +
                              _vm._s(this.base_name) +
                              "\n\n                    "
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
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-arrow-left")
                              ]),
                              _vm._v(
                                "\n                        Back to units of measurement\n                    "
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
                                { attrs: { sm: "12" } },
                                [
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
                                                "\n                                    SUB-UNIT -\n                                    " +
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
                                                      return _vm.deleteProcess(
                                                        item
                                                      )
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
                                                              _vm.formData.name,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.formData,
                                                                "name",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "formData.name"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            type: "number",
                                                            label: "Quantity"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.formData
                                                                .value,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.formData,
                                                                "value",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "formData.value"
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/units/convertContainer.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/pages/units/convertContainer.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convertContainer_vue_vue_type_template_id_0a79aab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertContainer.vue?vue&type=template&id=0a79aab8& */ "./resources/js/components/pages/units/convertContainer.vue?vue&type=template&id=0a79aab8&");
/* harmony import */ var _convertContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convertContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/units/convertContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _convertContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _convertContainer_vue_vue_type_template_id_0a79aab8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _convertContainer_vue_vue_type_template_id_0a79aab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/units/convertContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/units/convertContainer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/units/convertContainer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_convertContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./convertContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/units/convertContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_convertContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/units/convertContainer.vue?vue&type=template&id=0a79aab8&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/units/convertContainer.vue?vue&type=template&id=0a79aab8& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_convertContainer_vue_vue_type_template_id_0a79aab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./convertContainer.vue?vue&type=template&id=0a79aab8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/units/convertContainer.vue?vue&type=template&id=0a79aab8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_convertContainer_vue_vue_type_template_id_0a79aab8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_convertContainer_vue_vue_type_template_id_0a79aab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);