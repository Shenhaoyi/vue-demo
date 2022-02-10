<template>
  <div class="test">{{ count2 }}</div>
  <div class="test">{{ twiceTheCount2 }}</div>
  <el-button @click="countPlus">点我</el-button>
  <el-divider></el-divider>
  <div class="test">age from store: {{ myStore.nameAndAge }}</div>
  <el-button @click="handleClickForStore">store test</el-button>
  <!-- 带递归终止条件的递归组件调用 -->
  <test :test="test-1" v-if="test>0"></test>
  <el-divider></el-divider>
  <!-- 测试单文件组件 -->
  <TestSingleFileComponent ref="setup" @click="handleClick"/>
</template>

<script lang="ts">
import { onMounted, ref, toRefs, watch, reactive, openBlock, computed, onRenderTriggered } from 'vue';
import { useStore }  from '../stores/user';
import TestSingleFileComponent from './TestSingleFileComponent.vue';
// import Test from '../components/Test.vue'

export default {
  // name: 'Test',
  props: [
    'test'
  ],
  components: {
    TestSingleFileComponent,
  },
  methods: {
    handleClickForStore() {
      this.myStore.ageIncrement();
    },
    handleClick(value: any) {
      console.log('doubleTheAge:', value);
      console.log('value of ref:', this.$refs.setup);
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

    const { test } = toRefs(props);
    console.log(test);
    const count2 = ref(0);
    const countPlus = () => {
      count2.value++;
    }
    watch(count2, (newVal) => {
      console.log('count2 change: ', newVal);
    })
    const twiceTheCount2 = computed(() => count2.value * 2)
    onMounted(countPlus);
    // 通过生命周期钩子进行debugger
    onRenderTriggered((e: any) => {
      debugger
    });
    return {
      count2,
      twiceTheCount2,
      countPlus,
      myStore,
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
