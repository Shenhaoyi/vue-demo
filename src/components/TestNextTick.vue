<template>
  <div ref="div">{{ count }}</div>
  <el-button @click="handleClick">点我</el-button>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';

const count = ref(0);
const div = ref<HTMLDivElement | null>(null);

const handleClick = () => {
  count.value++;
  nextTick(() => {
    // 死循环 10 秒
    const now = new Date().getTime();
    console.log('new val:', count.value, div.value?.innerText);
    console.log('start');
    while (new Date().getTime() - now < 3000) {}
    console.log('end');
  });
};
</script>
