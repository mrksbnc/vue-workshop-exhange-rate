<template>
  <div class="card">
    <div class="card-header">
      <h4>{{ code }}</h4>
      <span class="exit-btn" @click="close"> x </span>
    </div>
    <div class="card-body">
      <span> H: {{ hourly }} </span>
      <span> D: {{ daily }} </span>
      <span> M: {{ monthly }} </span>
      <span> Y: {{ yearly }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Card",
  props: {
    code: {
      type: String,
      required: true,
    },
    hourly: {
      type: Number,
      required: true,
    },
    daily: {
      type: Number,
      required: true,
    },
    monthly: {
      type: Number,
      required: true,
    },
    yearly: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit("remove");
    };

    return {
      close,
    };
  },
});
</script>

<style scoped>
.card {
  margin-right: 5px;
  padding: 0px 5px 5px 5px;
  border: 1px solid black;
}

.card-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.exit-btn {
  margin-left: 10px;
}

.exit-btn:hover {
  color: red;
}

.card-body {
  display: flex;
  flex-direction: column;
}
</style>
