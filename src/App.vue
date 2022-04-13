<template>
  <router-view />
</template>

<script setup lang="ts">
import { apiService } from "./api";
import { provide, ref } from "@vue/runtime-core";

const cr = ref([]);
const rts = ref([]);

// setInterval(async () => {
cr.value = await apiService.getAll();
rts.value = await apiService.getRates();
// }, 1000);

provide("rates", rts);
provide("currencies", cr);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
