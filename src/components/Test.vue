<template>
  <div class="test">{{ count2 }}</div>
  <el-button @click="countPlus">点我</el-button>
</template>

<script lang="ts">
import { onMounted, ref, toRefs, watch, reactive, openBlock } from 'vue';

export default {
  props: [
    'test'
  ],
  methods: {
    handleClick() {
      console.log('change');
    },
  },
  setup(props: any) {
    const { test } = toRefs(props);
    console.log(test);
    const count2 = ref(0);
    const countPlus = () => {
      count2.value++;
    }
    watch(count2, (newVal) => {
      console.log('count2 change: ', newVal);
    })
    onMounted(countPlus);
    return {
      count2,
      countPlus
    }
  }
}
</script>


<style>
.test {
  width: 100%;
  height: 100%;
}
</style>
