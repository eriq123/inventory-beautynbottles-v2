<template>
    <v-text-field
        v-model="search"
        placeholder="Search here"
        prepend-inner-icon="mdi-magnify"
        autofocus
        clearable
        class="mx-4"
    ></v-text-field>
</template>
<script>
export default {
    name: "datatable-search",
    props: ["value"],

    computed: {
        search: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    }
};
</script>
