<template>
  <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>场地查询</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>同城活动</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>反馈</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="onAbout">
          <v-list-item-content>
            <v-list-item-title>关于</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</template>

<script>
export default {
  name: 'drawer-items',
  methods: {
    onAbout() {
      this.$router.push({ path: 'about'})
    }
  }
}
</script>