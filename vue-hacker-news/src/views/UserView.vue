<template>
  <div>
      <p>name : {{fetchedUser.id}}</p>
      <p>karma : {{fetchedUser.karma}}</p>
      <p>created : {{fetchedUser.created}}</p>
      <!-- <p>created : {{userInfo.created}}</p> -->
      <p>{{this.$store.state.user.id}}</p>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedUser'
    ]),
  },
  created() {
    console.log(this.$route.params.id)
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json)
    this.$store.dispatch('FETCH_USER', userName);

  }
}
</script>

<style>

</style>