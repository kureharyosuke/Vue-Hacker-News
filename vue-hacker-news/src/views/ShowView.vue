<template>
  <div>
      <div v-for="show in shows" :key="show">{{show}}</div>
      <div v-for="show in shows" :key="show">{{show.title}}</div>
  </div>
</template>

<script>
// import { fetchShowList } from '../api/index';
import { fetchList } from '../api/index';

export default {
    data() {
        return {
            shows: []
        }
    },
    created() {
        //v2
        const type = 'show';
        fetchList(type)
        .then(res => {
            console.log(res)
            this.shows = res.data;
        })
        .then(error => {
            console.log(error)
        })


        // var sw = this;
        // fetchShowList()
        // .then(function(response){
        //     console.log(response);
        //     sw.shows = response.data;
        // })
        // .catch(function(error){
        //     console.log(error)
        // })
    }

}
</script>

<style>

</style>