<template>
  <div>{{ testReactiveAndRef.test }}</div>
  <el-button @click="plusOne">+1</el-button>
</template>

<script lang="ts" setup>
import { useTest } from '../../composable/useTest';
const num = ref(1);
const test = useTest(() => num.value);
// reactive中的ref在使用的使用是直接unref的
const testReactiveAndRef  = reactive({
  test
})
const plusOne = () => {
  num.value += 1;
  console.log('test:', testReactiveAndRef.test);
}
defineExpose({});
</script>

<style lang="less" scoped>
</style>
