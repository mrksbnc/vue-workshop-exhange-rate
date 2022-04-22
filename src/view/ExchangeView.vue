<template><HelloWorld/></template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HelloWorld from "../components/ExchangeRates.vue";

export default defineComponent({
  name: "ExchangeView",
    components: {HelloWorld},
});
</script>
