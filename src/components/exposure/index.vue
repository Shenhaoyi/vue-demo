<template>
  <div class="div" ref="metricRef">{{ value }}</div>
</template>

<script lang="ts" setup>
import { ExposureObserver } from '.';

const props = withDefaults(
  defineProps<{
    value: string | number;
  }>(),
  {},
);

const metricRef = ref<any>(null);
const observer = ref<any>(null);
onMounted(() => {
  const { value } = props;
  (observer.value = new ExposureObserver(
    () => {
      console.log('shen log: ', { yes: value });
    },
    () => {
      console.log('shen log: ', { no: value });
    },
  )),
  observer.value.observe(metricRef.value);
});
onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.unobserve(metricRef.value);
  }
});
</script>

<style scoped>
.div {
  height: 200px;
  width: 100%;
  min-width: 200px;
  border: 1px solid #000;
}
</style>
