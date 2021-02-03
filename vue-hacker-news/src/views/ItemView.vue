<template>
  <div>
      <section>
          <!-- 질문 상세정보 -->
            <div>
              <div class="flex items-center">
                  <router-link :to="`/user/${fetchedItem.user}`" >
                      <a-icon type="user" />
                      {{ fetchedItem.user }}
                  </router-link>
                  <div>
                      {{ fetchedItem.time_ago}}
                  </div>
              </div>
            </div>
            <h2>{{fetchedItem.title}}</h2>
      </section>
      <section>
          <!-- 질문 댓글 -->
      </section>
      <p>ID : {{fetchedItem.id}}</p>
      <p>TITLE : {{fetchedItem.title}}</p>
      <p>POINTS : {{fetchedItem.points}}</p>
      <p>{{fetchedItem.user }} by {{fetchedItem.time_ago}}</p>
      <p>POINTS : {{fetchedItem.content}}</p>
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