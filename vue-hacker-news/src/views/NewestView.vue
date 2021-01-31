<template>
  <div>
      <div v-for="newest in newests" :key="newest">{{newest}}</div>
  </div>
</template>

<script>
import { fetchNewestList } from '../api/index';
export default {
    data() {
        return {
            newests: []
        }
    },
    created() {
        var nv = this;
        fetchNewestList()
        .then(function(response){
            console.log(response)
            nv.newests = response.data;
        })
        .catch(function(error){
            console.log(error);
        })
    }

}
</script>

<style>

</style>