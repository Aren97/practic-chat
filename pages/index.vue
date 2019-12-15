<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-btn @click="sendMessage">
        new message
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  sockets: {
    connect () {
      console.log('client io is connected')
    }
  },
  methods: {
    sendMessage () {
      this.$socket.emit('createMessage', { text: 'text from client' })
    }
  }
}
</script>
