<template>
  <v-row>
    <v-col sm="10" offset-sm="1">
      <v-card flat>
        <slot name="info-alert"></slot>

        <v-card-title>
          <slot name="card-title"></slot>
        </v-card-title>

        <v-card-text>
          <slot name="card-text"></slot>
        </v-card-text>

        <slot name="datatable"></slot>
      </v-card>
    </v-col>
  </v-row>
</template>
