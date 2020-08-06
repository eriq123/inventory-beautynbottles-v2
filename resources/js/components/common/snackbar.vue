<template>
    <v-snackbar
        app
        :color="color"
        right
        top
        rounded
        :timeout="timeout"
        :value="visible"
        @input="$emit('hideSnackbar')"
    >
        {{ this.text }}

        <template v-slot:action="{ attrs }">
            <v-btn dark text v-bind="attrs" @click="$emit('hideSnackbar')">
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
        timeout: {
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
