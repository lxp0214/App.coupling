<template>
  <v-card
    class="mx-auto mb-5"
  >
      <v-list-item>
        <v-list-item-avatar color="primary">
          <v-img
            v-if="author && author.avatar"
            :src="author.avatar"
          />
        </v-list-item-avatar>
        <v-list-item-content v-if="author">
          <v-list-item-title> {{ author.name }} </v-list-item-title>
          <v-list-item-subtitle> {{ author.date }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-if="title">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle v-if="subtitle">
            {{ subtitle }}
          </v-list-item-subtitle>
          <v-list-item-subtitle v-if="location">
            {{ location }}
          </v-list-item-subtitle>
          <v-list-item-subtitle v-if="date">
            {{ date }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
  </v-card>
</template>

<script>
export default {
  name:'activity-card',
  props: {
    title: String,
    subtitle: String,
    author: Object,
    date: String,
    location: String,
  }
}
</script>