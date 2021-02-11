<template>
  <div>
    <ul class="m-0 p-0">
      <li
        v-for="job in fetchedJobs"
        :key="job"
        class="flex items-center border-b border-solid p-2"
      >
        <!-- 포인트 영역 -->
        <div class="w-14 ml-6 font-color">
          {{ job.points }}
        </div>
        <!-- 정보 영역 -->
        <div>
          <p
            class="text-red-500 sm:text-orange-500 md:text-gray-500 lg:text-purple-500"
          >
            <a :href="job.url">
              {{ job.title }}
            </a>
          </p>
          <small>
            {{ job.time_age }} by
            <a :href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedJobs"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
