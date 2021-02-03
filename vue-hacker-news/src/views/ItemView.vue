<template>
  <div>
      {{ this.$store.state.item}}
      <p v-for="item in fetchedItem" :key="item">
          <a :href="item.url">
              {{item.title}}
          </a>
      </p>
      <p>ID : {{fetchedItem.id}}</p>
      <p>TITLE : {{fetchedItem.title}}</p>
      <p>POINTS : {{fetchedItem.points}}</p>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'fetchedItem'
        ])
    },
    created() {
        console.log(this.$route.params.id)
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId)
    }
}
</script>

<style>

</style>