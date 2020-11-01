(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/accountContainer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/accountContainer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get("/user").then(function (response) {
                _this.setFormData(response.data);
              })["catch"](function (error) {
                if (error.response) {
                  _this.$store.commit("errorSnackbar");
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    setFormData: function setFormData(user) {
      this.formUserData.first_name = user.first_name;
      this.formUserData.last_name = user.last_name;
      this.formUserData.username = user.username;
    },
    processUpdateAccount: function processUpdateAccount() {
      var _this2 = this;

      if (this.tab == 0) {
        this.formUserData.isUsername = false;
      } else if (this.tab == 1) {
        this.formUserData.isUsername = true;
      }

      axios.post("/account/update", this.formUserData).then(function (response) {
        if (_this2.tab == 0) {
          _this2.$store.commit("showSnackbar", {
            color: true,
            text: "Refresh the page to see the changes."
          });
        } else if (_this2.tab == 1) {
          _this2.$store.commit("showSnackbar", {
            color: true,
            text: "Successfully updated."
          });
        }
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);
          var customError = false;

          if (error.response.data.errors) {
            customError = true;

            if (error.response.data.errors.first_name) {
              _this2.$store.commit("showSnackbar", {
                color: false,
                text: error.response.data.errors.first_name[0]
              });
            } else if (error.response.data.errors.last_name) {
              _this2.$store.commit("showSnackbar", {
                color: false,
                text: error.response.data.errors.last_name[0]
              });
            } else if (error.response.data.errors.username) {
              _this2.$store.commit("showSnackbar", {
                color: false,
                text: error.response.data.errors.username[0]
              });
            }
          }

          if (!customError) {
            _this2.$store.commit("errorSnackbar");
          }
        }
      });
    },
    processPasswordUpdate: function processPasswordUpdate() {
      var _this3 = this;

      axios.post("/account/password", this.formPasswordData).then(function (response) {
        var user = response.data.status;

        _this3.$store.commit("showSnackbar", {
          color: true,
          text: "Password has been updated."
        });

        _this3.formPasswordData.old_password = _this3.formPasswordData.new_password = _this3.formPasswordData.new_password_confirmation = null;
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response);

          if (error.response.data.error) {
            _this3.$store.commit("showSnackbar", {
              color: false,
              text: error.response.data.error
            });
          } else {
            _this3.$store.commit("errorSnackbar");
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
                        "\n                    My Account\n                    "
                      ),
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
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





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

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["VTab"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["VTabItem"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["VTabs"],VTabsItems: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["VTabsItems"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./accountContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/accountContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountContainer_vue_vue_type_template_id_83a1276c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./accountContainer.vue?vue&type=template&id=83a1276c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/accountContainer.vue?vue&type=template&id=83a1276c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountContainer_vue_vue_type_template_id_83a1276c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountContainer_vue_vue_type_template_id_83a1276c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);