<template>
  <div class="chat-wrap">
    <div class="chat-list pa-4">
      <message
        v-for="m in messages"
        :key="m.text"
        :name="m.name"
        :text="m.text"
        :owner="true"
      />
    </div>
    <div class="chat-footer accent">
      <chat-form />
    </div>
  </div>
</template>

<script>
  import Message from '@/components/message'
  import chatForm from '@/components/chat-form'
  import { mapState } from 'vuex'
  export default {
    name: "chat",
    middleware: ['chat'],
    head () {
      return {
        title: `Комната ${this.user.room}`
      }
    },
    components: {
      Message,
      chatForm
    },
    computed: {
      ...mapState(['user', 'messages'])
    }
  }
</script>

<style scoped>
  .chat-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .chat-list {
    flex: 1 1 auto;
  }
  .chat-footer {
    flex-shrink: 0;
    height: 80px;
  }
</style>
