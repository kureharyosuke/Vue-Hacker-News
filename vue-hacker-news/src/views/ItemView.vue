<template>
  <div>
    <section>
      <!-- 질문 상세정보 -->
      <div>
        <div class="flex items-center justify-between text-3xl">
          <router-link :to="`/user/${fetchedItem.user}`">
            <!-- <a-icon type="user" />
            <v-mdi name="mdi-account" />
            <vue-mdi :icon="['mdi', 'account']" />
            <mdi-account /> -->
            {{ fetchedItem.user }}
          </router-link>
          <div class="text-sm">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <h2 class="flex items-center text-3xl">
            <menu-icon />
            {{ fetchedItem.title }}
      </h2>
      <!-- <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white..."
      >
        Hover me
      </button> -->
    </section>
    <section>
      <!-- 질문 댓글 변환시켜야하기때문에 v-html -->
      <div v-html="fetchedItem.content">
        <!-- <p>{{ fetchedItem.content }}</p> -->
      </div>
    </section>
    <p>ID : {{ fetchedItem.id }}</p>
    <p>TITLE : {{ fetchedItem.title }}</p>
    <p>POINTS : {{ fetchedItem.points }}</p>
    <p>{{ fetchedItem.user }} by {{ fetchedItem.time_ago }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuIcon from 'vue-material-design-icons/Menu.vue';

// import { mdiAccount } from '@mdi/js';

export default {
  components: { MenuIcon },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    console.log(this.$route.params.id);
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style></style>
