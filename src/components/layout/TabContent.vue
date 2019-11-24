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
</template>

<script>
import tabName from '../../constants/tabName';
import ActivityCard from './ActivityCard.vue';
import axios from 'axios';

export default {
  name: 'tab-content',
  components: {
    ActivityCard,
  },
  props: {
    title: String
  },
  data: function() {
    return ({
      acts: null,
      items: [
        { name: this.$props.title },
        { name: this.$props.title },
        { name: this.$props.title },
        { name: this.$props.title },
        { name: this.$props.title },
        { name: this.$props.title },
      ]
    }) 
  },
  mounted() {
    if(this.title === tabName.playground)
    axios.get('api/acts')
    .then(res => {
      const { data: { acts } } = res;
      console.log(acts)
      this.acts = acts;
    })
  }
  
}
</script>