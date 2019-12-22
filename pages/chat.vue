<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.text">
        {{m.text}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "chat",
    head () {
      return {
        title: `Комната ${this.user.room}`
      }
    },
    middleware: ['chat'],
    computed: {
      ...mapState(['user', 'messages'])
    }
  }
</script>
