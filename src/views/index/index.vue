<script setup lang="ts">
import {currentGET} from "@/api"
currentGET("leftTop").then(res=>{
    console.log(res);
})
</script>

<template>
  <div class="index">
  </div>
</template>

<style scoped lang="scss">
.index{

}
</style>
