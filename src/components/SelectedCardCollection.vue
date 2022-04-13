<template>
  <div class="card-collection">
    <div v-for="item in collection" :key="item.code">
      <card
        :code="item.code"
        :hourly="item.exchange.hourly"
        :daily="item.exchange.daily"
        :monthly="item.exchange.monthly"
        :yearly="item.exchange.yearly"
        @remove="remove(item)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export type CardData = {
  code: string;
  exchange: {
    hourly: number;
    daily: number;
    monthly: number;
    yearly: number;
  };
};

export default defineComponent({
  name: "SelectedCardCollection",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    let collection = ref(props.list as CardData[]);

    const remove = (item: CardData) => {
      emit("remove", { code: item.code });
    };

    return {
      remove,
      collection,
    };
  },
});
</script>

<style lang="css" scoped>
.card-collection {
  display: flex;
  flex-direction: row;
}
</style>
