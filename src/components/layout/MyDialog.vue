<template>
  <v-dialog
    v-model="show"
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>

      <v-card-text v-if="subtitle">
        {{ subtitle }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="primary"
          text
          @click="show = false"
        >
          取消
        </v-btn>

        <v-btn
          color="primary"
          text
          @click="show = false"
        >
          同意
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'my-dialog',
  props: {
    show: Boolean,
    title: String,
    subtitle: String
  }
}
</script>