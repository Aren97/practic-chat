<template>
  <div class="message-wrap mb-3">
    <div v-if="name === 'admin'" class="system-messages mb-2">
      <p class="system-message__text text-center">{{text}}</p>
      <v-divider />
    </div>
    <div v-else class="user-messages-wrap">
      <v-card :class="['user-message pa-2 mx-2', { owner, 'primary': !owner }]">
        <small v-if="name">
          <strong>{{name}}:</strong>
        </small>
        <p class="user-message__text">{{text}}</p>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "message",
    props: {
      name: String,
      text: String,
      owner: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .message-wrap {
    width: 100%;
  }
  .user-messages-wrap {
    display: flex;
    flex-direction: column;
  }
  .user-message {
    align-self: flex-start;
    max-width: 80%;
  }
  .user-message__text {
    margin-bottom: 0;
  }
  .owner {
    align-self: flex-end;
  }
</style>
