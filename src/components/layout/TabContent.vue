<template>
  <div v-if="title == '广场区'">
      <div
        v-for="(item,i) in items"
        :key="i"
      >
          <activity-card 
            :name="item.name"
          />
      </div>
  </div>
  <div v-else-if="title == '评论区'">
      <div
        v-for="(item,i) in items"
        :key="i"
      >
          <comment-item
            :name="item.name"
          />
      </div>
  </div>
  <div v-else-if="title == '已发布'">
      <div
        v-for="(item,i) in items"
        :key="i"
      >
          <activity-card 
            :name="item.name"
          />
      </div>
  </div>
</template>

<script>
import ActivityCard from './ActivityCard.vue';
import CommentItem from './CommentItem.vue';


export default {
  name: 'tab-content',
  components: {
    ActivityCard,
    CommentItem
  },
  props: {
    title: String
  },
  data: function() {return ({
    items: [
      { name: this.$props.title },
      { name: this.$props.title },
      { name: this.$props.title },
      { name: this.$props.title },
      { name: this.$props.title },
      { name: this.$props.title },
    ]
  }) }
}
</script>