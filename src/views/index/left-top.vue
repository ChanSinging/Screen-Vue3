<script setup lang="ts">
import { ref } from "vue";
import { currentGET } from "@/api";
currentGET("leftTop").then((res) => {
  console.log(res);
});
</script>

<template>
  <div class="left-top">
            
  </div>
</template>

<style scoped lang="scss">
.left-top{
    width: 100%;
    height: 100%;
}
</style>
