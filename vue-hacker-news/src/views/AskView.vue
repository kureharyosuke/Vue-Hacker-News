<template>
  <div>
    <ul class="m-0 p-0">
      <li
        v-for="item in fetchedAsk"
        :key="item"
        class="flex items-center border-b border-solid p-2"
      >
        <!-- 포인트 영역 -->
        <div class="w-14 ml-6 font-color">
          {{ item.points }}
        </div>
        <!-- 정보 영역 -->
        <div>
          <p class="text-red-500 sm:text-orange-500 md:text-gray-500 lg:text-purple-500">
            <!-- <a :href="item.url">
              {{ item.title }}
            </a> -->
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small>
            {{ item.time_age }} by
            <router-link :to="`/user/${item.user}`">{{
              item.user
            }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {

      ...mapGetters([
        'fetchedAsk'
      ])
    },

    created() {
    this.$store.dispatch('FETCH_ASK')
    
      // #v2
      // const type = 'ask';
      // fetchList(type)
      // .then(response => {
      //   console.log(response)
      //   this.asklist = response.data;
      // })
      // .catch(error=> console.log(error));

      // var as = this;
      // fetchAskList()
      // .then(function(response){
      //   console.log(response)
      //   as.asklist = response.data
      // })
      // .catch(function (error) {
      //   console.log(error)
      // }) 
    }
}
</script>

<style>
.font-color {
  color: #42b883;
}
</style>