<template>
   <v-col>
    <v-app-bar
      app
    >
      <v-btn text icon @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span color="primary text-center">发布</span>
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
          <v-layout>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="日期"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker 
                  v-model="date"
                  scrollable 
                  range
                  :min="today"
                  locale="zh"
                >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">取消</v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">确认</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-layout>
          <v-layout class="mt-3">
            <v-spacer />
            <v-btn
              dark
              fab
              color="primary"
            >
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-spacer />
          </v-layout>
        </v-card-text>
      </v-container>
    </v-content>
   </v-col>
</template>

<script>
export default {
  name:'publish',
  data: () => ({
    showDialog: false,
    date: [],
    modal: false,
    today: new Date().toISOString().substr(0, 10)
  }),
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    onPublish() {
      this.showDialog = true
    }
  },
}
</script>
