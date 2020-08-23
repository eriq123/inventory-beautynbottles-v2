(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/accountContainer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/accountContainer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tab: null,
      formUserData: {
        first_name: null,
        last_name: null,
        username: null
      },
      formPasswordData: {
        old_password: null,
        new_password: null,
        new_password_confirmation: null
      }
    };
  },
  created: function created() {
    this.setFormData();
  },
  methods: {
    setFormData: function setFormData() {
      console.log(this.getUser);
      this.formUserData.first_name = this.getUser.first_name;
      this.formUserData.last_name = this.getUser.last_name;
      this.formUserData.username = this.getUser.username;
    },
    processUpdateAccount: function processUpdateAccount() {
      var _this = this;

      if (this.tab == 0) {
        this.formUserData.isUsername = false;
      } else if (this.tab == 1) {
        this.formUserData.isUsername = true;
      }

      axios.post("/account/update", this.formUserData).then(function (response) {
        var user = response.data.user;

        if (_this.tab == 0) {
          _this.$store.commit("setUserFirstAndLastName", {
            first_name: user.first_name,
            last_name: user.last_name
          });
        } else if (_this.tab == 1) {
          _this.$store.commit("serUsername", user.username);
        }

        _this.$store.commit("showSnackbar", {
          color: true,
          text: "Record has been updated."
        });
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);
          var customError = false;

          if (error.response.data.errors) {
            customError = true;

            if (error.response.data.errors.first_name) {
              _this.$store.commit("showSnackbar", {
                color: false,
                text: error.response.data.errors.first_name[0]
              });
            } else if (error.response.data.errors.last_name) {
              _this.$store.commit("showSnackbar", {
                color: false,
                text: error.response.data.errors.last_name[0]
              });
            } else if (error.response.data.errors.username) {
              _this.$store.commit("showSnackbar", {
                color: false,
                text: error.response.data.errors.username[0]
              });
            }
          }

          if (!customError) {
            _this.$store.commit("errorSnackbar");
          }
        }
      });
    },
    processPasswordUpdate: function processPasswordUpdate() {
      var _this2 = this;

      axios.post("/account/password", this.formPasswordData).then(function (response) {
        var user = response.data.status;

        _this2.$store.commit("showSnackbar", {
          color: true,
          text: "Password has been updated."
        });

        _this2.formPasswordData.old_password = _this2.formPasswordData.new_password = _this2.formPasswordData.new_password_confirmation = null;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          if (error.response.data.error) {
            _this2.$store.commit("showSnackbar", {
              color: false,
              text: error.response.data.error
            });
          } else {
            _this2.$store.commit("errorSnackbar");
          }
        }
      });
    },
    updateAction: function updateAction() {
      if (this.tab == 0 || this.tab == 1) {
        this.processUpdateAccount();
      } else if (this.tab == 2) {
        this.processPasswordUpdate();
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    getUser: "getUser"
  })),
  watch: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
            { attrs: { sm: "8", "offset-sm": "2" } },
            [
              _c(
                "v-card",
                { staticClass: "px-5", attrs: { outlined: "" } },
                [
                  _c(
                    "v-card-title",
                    [
                      _vm._v(
                        "\n                    My Account\n\n                    "
                      ),
                      _vm.tab !== 2
                        ? _c(
                            "v-tooltip",
                            {
                              attrs: { right: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-icon",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "ml-3",
                                                attrs: {
                                                  color: "green darken-4"
                                                },
                                                on: { click: _vm.setFormData }
                                              },
                                              "v-icon",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [_vm._v("mdi-sync")]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                1465804389
                              )
                            },
                            [
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  "\n                            Click me if you don't see your account details.\n                        "
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-4", text: "" },
                          on: { click: _vm.updateAction }
                        },
                        [
                          _vm._v(
                            "\n                        Update\n                    "
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
                        "v-tabs",
                        {
                          attrs: {
                            "background-color": "transparent",
                            grow: ""
                          },
                          model: {
                            value: _vm.tab,
                            callback: function($$v) {
                              _vm.tab = $$v
                            },
                            expression: "tab"
                          }
                        },
                        [
                          _c("v-tab", [_vm._v("Personal Information")]),
                          _vm._v(" "),
                          _c("v-tab", [_vm._v("Username")]),
                          _vm._v(" "),
                          _c("v-tab", [_vm._v("Password")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tabs-items",
                        {
                          model: {
                            value: _vm.tab,
                            callback: function($$v) {
                              _vm.tab = $$v
                            },
                            expression: "tab"
                          }
                        },
                        [
                          _c(
                            "v-tab-item",
                            [
                              _c(
                                "v-row",
                                { staticClass: "py-5" },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "First Name" },
                                        model: {
                                          value: _vm.formUserData.first_name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formUserData,
                                              "first_name",
                                              $$v
                                            )
                                          },
                                          expression: "formUserData.first_name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Last Name" },
                                        model: {
                                          value: _vm.formUserData.last_name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formUserData,
                                              "last_name",
                                              $$v
                                            )
                                          },
                                          expression: "formUserData.last_name"
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
                            "v-tab-item",
                            [
                              _c(
                                "v-row",
                                { staticClass: "py-5" },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Username" },
                                        model: {
                                          value: _vm.formUserData.username,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formUserData,
                                              "username",
                                              $$v
                                            )
                                          },
                                          expression: "formUserData.username"
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
                            "v-tab-item",
                            [
                              _c(
                                "v-row",
                                { staticClass: "py-5" },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          type: "password",
                                          label: "Old Password"
                                        },
                                        model: {
                                          value:
                                            _vm.formPasswordData.old_password,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formPasswordData,
                                              "old_password",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                                            formPasswordData.old_password\n                                        "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          type: "password",
                                          label: "New Password"
                                        },
                                        model: {
                                          value:
                                            _vm.formPasswordData.new_password,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formPasswordData,
                                              "new_password",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                                            formPasswordData.new_password\n                                        "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          type: "password",
                                          label: "Confirm New Password"
                                        },
                                        model: {
                                          value:
                                            _vm.formPasswordData
                                              .new_password_confirmation,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formPasswordData,
                                              "new_password_confirmation",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                                            formPasswordData.new_password_confirmation\n                                        "
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

/***/ "./resources/js/components/pages/accountContainer.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/accountContainer.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accountContainer_vue_vue_type_template_id_83a1276c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accountContainer.vue?vue&type=template&id=83a1276c& */ "./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c&");
/* harmony import */ var _accountContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accountContainer.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/accountContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _accountContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _accountContainer_vue_vue_type_template_id_83a1276c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _accountContainer_vue_vue_type_template_id_83a1276c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/accountContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/accountContainer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/accountContainer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./accountContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/accountContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accountContainer_vue_vue_type_template_id_83a1276c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./accountContainer.vue?vue&type=template&id=83a1276c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accountContainer_vue_vue_type_template_id_83a1276c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accountContainer_vue_vue_type_template_id_83a1276c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);