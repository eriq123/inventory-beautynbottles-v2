import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        snackbar: {
            color: null,
            text: null,
            visible: false
        },
        user: {
            first_name: "",
            last_name: ""
        }
    },
    mutations: {
        showSnackbar(state, payload) {
            state.snackbar.color =
                payload.color == true ? "success" : "red darken-1";
            state.snackbar.text = payload.text;
            state.snackbar.visible = true;
        },
        errorSnackbar(state) {
            state.snackbar.color = "red darken-1";
            state.snackbar.text = "Something went wrong. Please try again.";
            state.snackbar.visible = true;
        },
        closeSnackbar(state) {
            state.snackbar.visible = false;
        },

        setUser(state, payload) {
            state.user = null;
            state.user = payload;
        },
        setUserFirstAndLastName(state, payload) {
            state.user.first_name = payload.first_name;
            state.user.last_name = payload.last_name;
        },
        serUsername(state, payload) {
            state.user.username = payload;
        }
    },
    getters: {
        getUser: state => {
            return state.user;
        }
    }
});

export default store;
