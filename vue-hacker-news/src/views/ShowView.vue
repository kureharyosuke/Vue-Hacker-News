<template>
  <div>
      <div v-for="show in shows" :key="show">{{show}}</div>
  </div>
</template>

<script>
import { fecthShowList } from '../api/index';
export default {
    data() {
        return {
            shows: []
        }
    },
    created() {
        var sw = this;
        fecthShowList()
        .then(function(response){
            console.log(response);
            sw.shows = response.data;
        })
        .catch(function(error){
            console.log(error)
        })
    }

}
</script>

<style>

</style>