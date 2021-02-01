<template>
  <div>
      <p>name : {{fetchedUser.id}}</p>
      <p>karma : {{fetchedUser.karma}}</p>
      <p>created : {{fetchedUser.created}}</p>
      <!-- <p>created : {{userInfo.created}}</p> -->
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
    // userInfo() {
    //   return this.$store.state.user;
    // }
  },
  created() {
    console.log(this.$route.params.id)
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json)
    this.$store.dispatch('FETCH_USER', userName);

  }
}
</script>

<style>

</style>