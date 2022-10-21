<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import ScaleScreen from "@/components/scale-screen";
import Headers from "./header.vue";
const wrapperStyle = {};
const autoScale = ref(false);
</script>

<template>
  <scale-screen
    width="1920"
    height="1080"
    :delay="500"
    :fullScreen="false"
    :boxStyle="{
      background: '#03050C',
      overflow: autoScale ? 'hidden' : 'auto',
    }"
    :wrapperStyle="wrapperStyle"
    :autoScale="autoScale"
  >
    <div class="content_wrap">
      <Headers />
      <RouterView />
    </div>
  </scale-screen>
</template>
<style lang="scss" scoped>
.content_wrap {
  width: 100%;
  height: 100%;
  padding: 16px 16px 16px 16px;
  box-sizing: border-box;
  background-image: url("@/assets/img/pageBg.png");
  background-size: cover;
  background-position: center center;
}
</style>
