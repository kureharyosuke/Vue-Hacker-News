<template>
  <div>
      <div v-for="item in items" :key="itme">{{item}}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items: []
        }
    },
    // created() {
    //     var item = this;
    //     fetchItemList() 
    //     .then(function(response){
    //         console.log(response); //?
    //         item.items = response.data
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    // }

}
</script>

<style>

</style>