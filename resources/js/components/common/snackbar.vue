<template>
    <v-snackbar
        app
        right
        top
        rounded
        timeout="2000"
        :color="color"
        :value="visible"
        @input="$store.commit('closeSnackbar')"
    >
        {{ this.text }}

        <template v-slot:action="{ attrs }">
            <v-btn
                dark
                text
                v-bind="attrs"
                @click="$store.commit('closeSnackbar')"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
<script>
export default {
    props: {
        color: {
            type: String
        },
        text: {
            required: true
        },
        visible: {
            required: true
        }
    },
    data() {
        return {};
    }
};
</script>
