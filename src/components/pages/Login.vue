<template>
   <v-col>
    <v-app-bar
      app
    >
      <v-btn text icon @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-text color="primary">登录</v-toolbar-text>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
          <v-row
            align="center"
            justify="center"
          > 
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
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
              <v-btn block color="primary" rounded @click="onLogin">登录</v-btn>
            </v-col>
        </v-row>
      </v-container>
    </v-content>
   </v-col>
</template>

<script>
export default {
  name:'login',
  data: () => ({
    account: null,
    password: null
  }),
  methods: {
    onLogin() {
      const {
        account,
        password
      } = this;
      if(account && password) {
        return 0;
      }
    },
    onSignIn() {
      const {
        account,
        password
      } = this;
      if(account && password) {
        return 0;
        // console.log(account, password)
      }
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>