<template>
  <v-text-field
    disabled
    type="number"
    label="Convertion"
    :value="convertedUnits"
  >
    <template #append-outer>
      {{ unitLabel }}
    </template>
  </v-text-field>
</template>
<script>
export default {
  props: {
    convertValue: {
      required: true
    },
    quantity: {
      required: true
    },
    label: {
      required: true
    }
  },
  computed: {
    convertedUnits() {
      return this.quantity * this.convertValue;
    },
    unitLabel() {
      return this.label ?? "N/A";
    }
  }
};
</script>
