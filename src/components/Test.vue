<template>
  <div class="test">{{count2}}</div>
  <el-button @click="countPlus">点我</el-button>
</template>

<script lang="ts">
import { ref } from 'vue';

const count = ref(0);
console.log(count);
console.log(count.value);
count.value++;
console.log(count.value);
export default {
  methods: {
    handleClick() {
      console.log('change');
    },
  },
  setup(props: any) {
    const count2 = ref(0)
    const countPlus = () => {
      count2.value++;
    }
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
