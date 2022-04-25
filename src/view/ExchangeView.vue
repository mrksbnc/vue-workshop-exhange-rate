<template><ExchangeRates/></template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ExchangeRates from "../components/ExchangeRates.vue";

export default defineComponent({
    name: "ExchangeView",
    components: {ExchangeRates},
});
</script>
