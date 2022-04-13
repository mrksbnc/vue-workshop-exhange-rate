<template>
  <div>
    {{ currencies }}
  </div>
</template>

<script lang="ts">
import { watch } from "vue";
import { CardData } from "../components/SelectedCardCollection.vue";
import { computed, defineComponent, inject, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "ExchangeView",
  setup(props, context) {
    const treshold = ref(0);

    const forceRenderKey = ref(0);

    const crList = computed(() => inject("currencies"));

    const collection = ref([] as CardData[]);

    const updateValues = (payload: CardData) => {
      collection.value.push(payload);
    };

    const removeValue = (payload: { code: string }) => {
      collection.value = collection.value.filter(
        (f) => f.code !== payload.code
      );
      ++forceRenderKey.value;
    };

    const filterCurrenciesByTreshold = (payload: { value: number }) => {
      collection.value = collection.value.filter(
        (f) => f.exchange.daily <= payload.value
      );
      ++forceRenderKey.value;
    };

    return {
      treshold,
      forceRenderKey,
      collection,
      currencies: crList,
      updateValues,
      removeValue,
      filterCurrenciesByTreshold,
    };
  },
});
</script>

<style lang="css" scoped>
.card-section {
  margin-top: 20px;
}
</style>
