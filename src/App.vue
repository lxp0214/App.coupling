<template>
<v-app>
  <v-content>
    <v-container fluid>
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </v-container>
  </v-content>
</v-app>
</template>
<script>
export default {
  name: 'App',
};
</script>
