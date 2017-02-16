<template lang="html">
  <div id="app">
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">
          My app
        </div>
      </v-ons-toolbar>
      <hello></hello>
      <p style="text-align: center">
        <v-ons-button @click="alert">Click</v-ons-button>
      </p>
    </v-ons-page>

  </div>
</template>

<script>
  import Hello from './components/Hello.vue';

  export default {
    components: {
      Hello
    },
    data() {
        return {

        }
    },
    methods: {
      alert() {
        this.$notification.alert('Hello World!');
      }
    }


  }

</script>

<style lang="css">
</style>
