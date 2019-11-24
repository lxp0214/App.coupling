<template>
   <v-app id="inspire">
    <v-app-bar
      app
    >
      <v-btn text icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span>我的</span>
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
          <v-avatar color="orange" size="62">
            
          </v-avatar>
          <v-card-text>
            爱好
          </v-card-text>
          <v-card-text>
           性格
          </v-card-text>
          <v-card-text>
            空闲时间
          </v-card-text>
          <v-card-text>
            个性签名
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