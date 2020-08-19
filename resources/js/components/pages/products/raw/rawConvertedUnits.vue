<template>
    <v-col cols="6">
        <v-text-field
            disabled
            type="number"
            label="Converted units"
            :value="convertedUnits"
        >
            <template #append-outer>
                {{ selectedBase }}
            </template>
        </v-text-field>
    </v-col>
</template>
<script>
export default {
    props: {
        convertValue: {
            required: true
        },
        value: {
            required: true
        },
        formDataBaseName: {
            required: true
        }
    },
    computed: {
        convertedUnits() {
            return this.value * this.convertValue;
        },
        selectedBase() {
            return this.formDataBaseName ?? "N/A";
        }
    }
};
</script>
