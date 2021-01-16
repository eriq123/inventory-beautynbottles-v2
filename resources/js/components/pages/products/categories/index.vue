<template>
  <main-layout>
    <template #info-alert>
      <slot name="info-alert"></slot>
    </template>

    <template #card-title>
      <v-btn text @click="$emit('onBack')" v-if="isSelected">
        <v-icon left>mdi-arrow-left</v-icon>
      </v-btn>
      <slot name="card-title"> {{ cardTitle }} </slot>
      <v-btn
        text
        outlined
        color="green darken-4"
        class="ml-3"
        @click="$emit('onCreate')"
      >
        Create
      </v-btn>

      <slot name="dialog"></slot>
    </template>

    <template #datatable>
      <v-data-table
        :headers="headers"
        :items="items"
        :loading="loading"
        :search="search"
        @click:row="clickedRow"
      >
        <template v-slot:top>
          <datatable-search v-model="search"></datatable-search>
        </template>

        <template #item.actions="{ item }">
          <v-btn text color="blue darken-4" @click.stop="$emit('onEdit', item)">
            Update
          </v-btn>
          <v-btn
            text
            color="red darken-4"
            @click.stop="$emit('onDelete', item)"
          >
            Delete
          </v-btn>
        </template>
      </v-data-table>
    </template>
  </main-layout>
</template>
<script>
export default {
  props: {
    categoryName: {
      type: String
    },
    headers: {
      type: Array
    },
    isSelected: {
      type: Boolean
    },
    items: {
      type: Array
    },
    loading: {
      type: Boolean
    }
  },
  data() {
    return {
      search: null
    };
  },
  components: {
    "datatable-search": () => import("@/components/common/datatable-search"),
    "main-layout": () => import("@/components/layouts/categories-product/index")
  },
  methods: {
    clickedRow(item) {
      this.$emit("showItems", item);
    }
  },
  computed: {
    cardTitle: function() {
      return this.categoryName ?? "Category";
    }
  },
  watch: {
    items: {
      handler: function(val, oldVal) {
        this.search = null;
      },
      deep: true
    }
  }
};
</script>