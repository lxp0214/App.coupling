<template>
   <v-app id="inspire">
    <v-app-bar
      app
      color="primary"
    >
      <v-toolbar-title>我的</v-toolbar-title>
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
            <v-form>
              <v-text-field
                label="账号"
                name="login"
                type="text"
                v-model="account"
              />
              <v-text-field
                id="password"
                label="密码"
                name="password"
                type="password"
                v-model="password"
              />
            </v-form>
          </v-card-text>
          <v-btn block color="primary" rounded @click="onLogin">登录</v-btn>
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