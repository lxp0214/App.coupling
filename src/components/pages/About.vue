<template>
   <v-app id="inspire">
    <v-app-bar
      app
    >
      <v-btn text icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span>关于</span>
    </v-app-bar>
    <v-content
      app
    >
      <v-container
        class="fill-height"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-card-text>
            
          </v-card-text>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name:'me',
}
</script>