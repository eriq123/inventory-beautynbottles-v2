<template>
    <v-autocomplete
        v-model="selectedComputed"
        :search-input.sync="name"
        :loading="loading"
        :items="items"
        :label="label"
        item-text="name"
        item-value="id"
        return-object
        no-filter
        hide-no-data
        hide-details
        hide-selected
        clearable
        outlined
        class="mx-2"
        color="pink accent-1"
    ></v-autocomplete>
</template>
<script>
export default {
    props: {
        items: {
            type: Array
        },
        label: {
            type: String
        },
        loading: {
            type: Boolean
        },
        selected: {
            type: Object
        }
    },
    data() {
        return {
            debounceTimer: 0,
            name: null
        };
    },
    methods: {
        debounceSearch(delay = 300) {
            clearTimeout(this.debounceTimer);
            this.$emit("loadingChange");

            this.debounceTimer = setTimeout(
                function() {
                    this.$emit("autocompleteSearch");
                }.bind(this),
                delay
            );
        }
    },
    computed: {
        selectedComputed: {
            get: function() {
                return this.selected;
            },
            set: function(newValue) {
                this.$emit("selectedChange", newValue);
            }
        }
    },

    watch: {
        name(value) {
            this.$emit("nameChange", value);
            this.debounceSearch();
        }
    }
};
</script>
