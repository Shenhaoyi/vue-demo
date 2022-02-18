<template>
  <div>
    测试setup: {{ doubleTheAge }}
    <el-button @click="handleClick">测试setup</el-button>
  </div>
</template>

<script lang="ts" setup>

interface props {
    age: number;
  }
const props = withDefaults( // 带默认值的类说明方式
  defineProps<props>(),
  {
    age: 26,
  },
);

const emit = defineEmits<{
  (e: 'click', doubleTheAge: number): void
}>()

const doubleTheAge = computed(() => {
  return props.age * 2;
});

const xxx = 'xxx';

const handleClick = () => {
  emit('click', doubleTheAge.value)
}

defineExpose({
  xxx,
}) 
</script>
