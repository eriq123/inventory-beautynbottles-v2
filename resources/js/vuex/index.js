import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        snackbar: {
            color: null,
            text: null,
            visible: false
        }
    },
    mutations: {
        showSnackbar(state, payload) {
            state.snackbar.color =
                payload.color == true ? "success" : "red darken-1";
            state.snackbar.text = payload.text;
            state.snackbar.visible = true;
        },
        closeSnackbar(state) {
            state.snackbar.visible = false;
        }
    }
});

export default store;
