<template>
  <v-alert border="left" color="blue" type="info">
    {{ text }}
  </v-alert>
</template>
<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    }
  }
};
</script>