<template>
  <div class="selectable-list" :key="key">
    <span class="title-text"> Currencies: </span>
    <div v-for="(item, index) in collection" :key="index">
      <span class="selectable-list-item" @click="selectItem(item)">
        {{ item.code }}
      </span>
    </div>
    <div>
      <span class="title-text">Treshold:</span>
      <input type="text" v-model="tresholdValue" v-on:keyup.enter="onEnter" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBar",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  async setup(props, { emit }) {
    const key = ref(0);
    const tresholdValue = ref("");
    const collection = ref(props.list as { code: string; baseValue: number }[]);

    const selectItem = (item: { code: string; baseValue: number }) => {
      collection.value = collection.value.filter((f) => f.code !== item.code);
      emit("select", item);
      ++key.value;
    };

    const onEnter = () => {
      emit("tresholdChange", { value: parseInt(tresholdValue.value) });
      tresholdValue.value = "";
    };

    return { collection, tresholdValue, key, selectItem, onEnter };
  },
});
</script>

<style scoped>
.title-text {
  margin-right: 10px;
}
.selectable-list {
  display: flex;
  flex-direction: row;
}

.selectable-list-item {
  padding: 5px;
  margin-right: 5px;
  border: 1px solid black;
}

.selectable-list-item:hover {
  cursor: pointer;
  background-color: aqua;
}
</style>
