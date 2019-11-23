<template>
  <v-card class="mx-auto mb-5">
    <v-list-item>
        <v-list-item-avatar color="primary">
          <span class="white--text">{{ name.slice(0,4) }}</span>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title >发布者</v-list-item-title>
          <v-list-item-subtitle>发布日期</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title >评论内容</v-list-item-title>
          <v-list-item-subtitle>评论日期</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
  </v-card>
</template>
<script>
export default {
  name:'comment-item',
  props: {
    name: String
  },
  data: () => ({
    voteNumber: 999
  })
}
</script>