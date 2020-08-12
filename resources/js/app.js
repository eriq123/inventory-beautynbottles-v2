require("./bootstrap");

window.Vue = require("vue");
import vuetify from "./vuetify/index";

// no vue router and vuex plan
// but that would mean i have to implement an spa authentication instead of using the laravel builtin authentication
// and vuerouter here
Vue.component(
    "app-sidebar",
    require("./components/common/sidebar.vue").default
);
Vue.component("app-header-sidebar", require("./components/App.vue").default);

// it would be useful to use vuex here
Vue.component(
    "app-snackbar",
    require("./components/common/snackbar.vue").default
);

const app = new Vue({
    el: "#app",
    vuetify,
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
