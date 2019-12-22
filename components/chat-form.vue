<template>
  <v-col xs12>
    <v-text-field
      v-model="text"
      label="Введите сообщение"
      outlined
      @keydown.enter="send"
    ></v-text-field>
  </v-col>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "chat-form",
    data () {
      return {
        text: ''
      }
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      send () {
        if (this.text) {
          this.$socket.emit('createMessage', {
            text: this.text,
            id: this.user.id
          }, (data) => {
            if (data.valid) {
              this.text = ''
            } else {
              console.error(data.text)
            }
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
