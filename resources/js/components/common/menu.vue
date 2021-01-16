<template>
  <v-menu offset-y open-on-hover>
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="pa-0" text v-bind="attrs" v-on="on">
        {{ menuTitle }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="item in menu"
        :key="item.id"
        @click="menuClicked(item)"
      >
        <v-list-item-title>
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  props: {
    menu: {
      type: Array
    },
    label: {
      type: String
    }
  },
  methods: {
    menuClicked(item) {
      this.$emit("onSelect", item);
    }
  },
  computed: {
    menuTitle() {
      return this.label ?? "N/A";
    }
  }
};
</script>
