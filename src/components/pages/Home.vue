<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-card
        tile
      >
        <v-img
          class="white--text"
          height="200px"
          src="../../assets/drawer_background.jpg"
        >
        </v-img>
        <div class="avatar" @click="onAvatar">
          <v-avatar color="primary" size="64">
            <span class="white--text">{{ name }}</span>
          </v-avatar>
        </div>
      </v-card>
      <drawer-items />
    </v-navigation-drawer>
    <v-app-bar
      elevate-on-scroll
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-tabs
        v-model="currentTab"
        background-color="white accent-4"
        centered="centered"
        center-active
        grow="grow"
        
      >
        <v-tab
          v-for="tab in tabs"
          :key="tab.index"
          :href="`#tab-${tab.index}`"
          class="font-weight-bold"
        >
          {{ tab.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-container>
      <v-tabs-items v-model="currentTab">
        <v-tab-item
          v-for="tab in tabs"
          :key="tab.index"
          :value="`tab-${tab.index}`"
        >
          <tab-content :title="tab.title" :currentTab="currentTab" />
        </v-tab-item>
      </v-tabs-items>
      <div
        class="fab"
      >
        <v-btn
          dark
          fab
          color="primary"
          @click="onPublish"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-app>
</template>
<script>
import tabName from '../../constants/tabName';
import DrawerItems from '../layout/DrawerItems.vue';
import TabContent from '../layout/TabContent.vue';

export default {
  components:{
    DrawerItems,
    TabContent,
  },
  data: () => ({
    drawer: false,
    tabs: [
      { title: tabName.playground, index: 0 },
      { title: tabName.comments, index:1 },
      { title: tabName.published, index:2 }
    ],
    name: 'NMSL',
    currentTab: 'tab-0',
    fab: true
  }),
  methods: {
    onAvatar() {
      this.$router.push({ path: 'login'})
    },
    onPublish() {
      this.$router.push({ path: 'publish' })
    }
  },
}
</script>

<style scoped>
.avatar {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  cursor: pointer;
}
.content {
  padding-top: 0;
}
.fab {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
}
</style>
