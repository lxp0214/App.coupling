<template>
  <v-card
    class="mx-auto mb-5"
  >
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
          <v-list-item-title>
            活动名称
          </v-list-item-title>
          <v-list-item-subtitle>
            活动详情
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            活动地点
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            活动日期
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
  </v-card>
</template>

<script>
export default {
  name:'activity-card',
  props: {
    name: String,
    creator: {
      name: String,
      publishTime: String
    },
    location: String,
    number: Number,
  }
}
</script>