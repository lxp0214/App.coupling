<template>
  <div v-if="acts">
      <div
        v-for="(act,i) in acts"
        :key="i"
      >
          <activity-card 
            :title="act.title"
            :subtitle="act.description"
            :author="act.author"
            :date="act.date"
            :location="act.location"
          />
      </div>
  </div>
  <div v-else-if="comments">
      <div
        v-for="(comment,i) in comments"
        :key="i"
      >
          <activity-card 
            :title="comment.title"
            :subtitle="comment.description"
            :author="comment.author"
            :date="comment.date"
            :location="comment.location"
          />
      </div>
  </div>
  <div v-else-if="publisheds">
      <div
        v-for="(published,i) in publisheds"
        :key="i"
      >
          <activity-card 
            :title="published.title"
            :subtitle="published.description"
            :author="published.author"
            :date="published.date"
            :location="published.location"
            :done="published.done"
          />
      </div>
  </div>
</template>

<script>
import ActivityCard from './ActivityCard.vue';

export default {
  name: 'tab-content',
  components: {
    ActivityCard,
  },
  props: {
    acts: Array,
    comments: Array,
    publisheds: Array
  },
  
}
</script>