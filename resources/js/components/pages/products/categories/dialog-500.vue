<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <slot />
        </v-container>
      </v-card-text>
      <v-card-actions>
        <slot name="dialog-actions">
          <v-spacer></v-spacer>
          <v-btn text @click="show = false">Cancel</v-btn>
          <v-btn text color="green darken-3" @click="$emit('submit')">
            Save
          </v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    value: {
      default: false,
      type: Boolean
    },
    title: {
      default: "N/A",
      type: String
    }
  },
  computed: {
    show: {
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