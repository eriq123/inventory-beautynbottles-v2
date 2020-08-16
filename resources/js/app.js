require("./bootstrap");

window.Vue = require("vue");
import vuetify from "./vuetify/index";
import store from "./vuex/index";

Vue.component(
    "app-sidebar",
    require("./components/common/sidebar.vue").default
);
Vue.component("app-header-sidebar", require("./components/App.vue").default);

Vue.component(
    "app-snackbar",
    require("./components/common/snackbar.vue").default
);

const app = new Vue({
    el: "#app",
    vuetify,
    store,
    components: {
        "app-account": () => import("./components/pages/accountContainer.vue"),
        "app-product-raw": () =>
            import("./components/pages/products/rawContainer.vue"),
        "app-product-assembled": () =>
            import("./components/pages/products/assembledContainer.vue"),
        "app-product-flow": () =>
            import("./components/pages/inventory/flowContainer.vue"),
        "app-product-report": () =>
            import("./components/pages/inventory/reportContainer.vue")
    }
});
// render: h => h(App),
