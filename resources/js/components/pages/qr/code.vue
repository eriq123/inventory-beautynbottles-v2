<template>
  <app-qrcode :value="value" level="H"></app-qrcode>
</template>
<script>
export default {
  props: {
    value: {
      required: true,
      type: String,
    },
  },
  components: {
    "app-qrcode": () => import("qrcode.vue"),
  },
};
</script>