<script setup lang="ts">
import {currentGET} from "@/api"
currentGET("leftTop").then(res=>{
    console.log(res);
})
</script>

<template>
  <div class="">
  </div>
</template>

<style scoped lang="scss"></style>
