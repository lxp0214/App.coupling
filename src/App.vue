<template>
<v-app>
  <v-content>
    <v-container fluid>
      <transition name="fade">
        <router-view />
      </transition>
    </v-container>
  </v-content>
</v-app>
</template>
<script>

export default {
  name: 'App',
};
</script>
