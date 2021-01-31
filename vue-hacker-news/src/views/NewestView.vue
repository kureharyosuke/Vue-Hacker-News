<template>
  <div>
      <div v-for="newest in newests" :key="newest">{{newest}}</div>
  </div>
</template>

<script>
// import { fetchNewestList } from '../api/index';
import {fetchList} from '../api/index.js';
export default {
    data() {
        return {
            newests: []
        }
    },
    created() {
        //v2
        const type = 'newest';
        fetchList(type)
        .then((response) => {
            console.log(response);
            this.newests = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
        // var nv = this;
        // fetchNewestList()
        // .then(function(response){
        //     console.log(response)
        //     nv.newests = response.data;
        // })
        // .catch(function(error){
        //     console.log(error);
        // })
    }

}
</script>

<style>

</style>