<template>
  <div class="">
    <exposure-item
      v-for="item in array"
      :key="Math.random()"
      :value="item"
    ></exposure-item>
  </div>
</template>

<script lang="ts" setup>
import ExposureItem from './exposure/index.vue';
const array = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
</script>
