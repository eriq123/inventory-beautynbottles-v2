require("./bootstrap");

window.Vue = require("vue");
import vuetify from "./vuetify/index";
import store from "./vuex/index";

Vue.component("app-header-sidebar", require("./components/App.vue").default);

const app = new Vue({
    el: "#app",
    vuetify,
    store,
    components: {
        "app-home": () => import("./components/pages/homeContainer.vue"),
        "app-logs": () => import("./components/pages/logsContainer.vue"),
        "qr-code": () => import("./components/pages/qr/code.vue"),
        "app-units": () => import("./components/pages/units/convertContainer.vue"),
        "app-account": () => import("./components/pages/accountContainer.vue"),
        "app-product-raw": () =>
            import("./components/pages/products/raw/index.vue"),
        "app-product-assembled": () =>
            import("./components/pages/products/assembled/index.vue"),
        "app-product-flow": () =>
            import("./components/pages/inventory/flowContainer.vue"),
        "app-product-report": () =>
            import("./components/pages/inventory/reportContainer.vue")
    }
});
// render: h => h(App),
