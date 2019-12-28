<template>
  <div class="chat-wrap">
    <div class="chat-list pa-4" ref="chat">
      <message
        v-for="(m, index) in messages"
        :key="m.text + index"
        :name="m.name"
        :text="m.text"
        :owner="m.id === user.id"
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
    },
    watch: {
      messages () {
        setTimeout(() => {
          this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
        }, 0)
      }
    }
  }
</script>

<style scoped>
  .chat-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 56px);
  }
  .chat-list {
    flex: 1 1 auto;
    overflow-y: auto;
  }
  .chat-footer {
    flex-shrink: 0;
    height: 80px;
  }
</style>
