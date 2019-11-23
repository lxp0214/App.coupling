<template>
   <v-col>
    <v-app-bar
      app
    >
      <v-btn text icon @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-text color="primary text-center">发布</v-toolbar-text>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
       <v-text-field
          label="活动标题"
          single-line
        />
        <v-card-text>
          <v-text-field
            label="详情"
            single-line
          />
          <v-text-field
            label="地点"
            single-line
          />
          <v-text-field
            label="人数"
            single-line
          />
          <v-text-field
            label="日期"
            single-line
          />
          <v-layout>
            <v-spacer />
            <v-btn
              dark
              fab
              color="primary"
              @click="onPublish"
            >
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-spacer />
          </v-layout>
        </v-card-text>
        
        <my-dialog 
          :show="showDialog"
          title="是否确认提交？"
        />
      </v-container>
    </v-content>
   </v-col>
</template>

<script>
import MyDialog from '../layout/MyDialog.vue'

export default {
  name:'publish',
  components: {
    MyDialog
  },
  data: () => ({
    showDialog: false
  }),
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    onPublish() {
      this.showDialog = true
    }
  }
}
</script>

<style scoped>
.btn-container {
  width: 100%;
}
</style>