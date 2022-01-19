<template>
  <div class="test">{{ count2 }}</div>
  <el-button @click="countPlus">点我</el-button>
  <div class="test">age from store: {{ myStore.age }}</div>
</template>

<script lang="ts">
import { onMounted, ref, toRefs, watch, reactive, openBlock, computed } from 'vue';
import { useStore }  from '../stores/user';

export default {
  props: [
    'test'
  ],
  methods: {
    handleClick() {
      console.log('change');
      this.myStore.ageIncrement();
    },
  },
  setup(props: any) {
    // const obj = { a: 1 };
    // const proxy = reactive(obj);
    // const refA = toRefs(proxy).a;
    // obj.a = 2;
    // console.log(proxy, refA);
    // console.log('===============');

    const myStore = useStore()
    // let age = computed(()=>myStore.age) 还是没有响应性

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
      countPlus,
      myStore,
      // age
    }
  },
}
</script>


<style>
.test {
  width: 100%;
  height: 100%;
}
</style>
