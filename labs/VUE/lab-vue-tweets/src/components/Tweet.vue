<script setup>
import ProfileImage from "./ProfileImage.vue";
import User from "./User.vue";
import Timestamp from "./TimeStamp.vue";
import Message from "./Message.vue";
import Actions from "./Actions.vue";
const tweetProp = defineProps({
  user: Object,
});
</script>

<template>
  <div class="tweet">
    <ProfileImage :image="tweetProp.user.user.image" />

    <div class="body">
      <div class="top">
        <User :user="tweetProp.user.user" />

        <Timestamp :date="tweetProp.user.timestamp" />
      </div>

      <Message :message="tweetProp.user.message" />

      <Actions />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
