<template>
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="formattedDate"
                :label="label"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
        </template>
        <v-date-picker
            v-model="computedDate"
            no-title
            scrollable
            @change="menu = !menu"
        >
        </v-date-picker>
    </v-menu>
</template>
<script>
export default {
    props: {
        date: {
            type: String,
            required: true
        },
        label: {
            required: true
        }
    },
    data() {
        return {
            menu: false
        };
    },
    computed: {
        formattedDate() {
            const new_date = new Date(this.date);

            return new_date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        },
        computedDate: {
            get() {
                return this.date;
            },
            set(value) {
                this.$emit("savedate", value);
            }
        }
    }
};
</script>
