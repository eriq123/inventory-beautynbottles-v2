<template>
    <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="blue darken-4" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-help-circle-outline</v-icon>
            </v-btn>
        </template>
        <span>{{ this.message }}</span>
    </v-tooltip>
</template>
<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        }
    }
};
</script>
