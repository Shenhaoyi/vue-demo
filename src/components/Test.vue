<template>
  <div class="test">safass</div>
</template>

<script lang="ts">
import vue, {ref} from 'vue';

const count = ref(0);
console.log(count);
console.log(count.value);
count.value++;
console.log(count.value);
export default {
}
</script>


<style>
.test {
  width: 100%;
  height: 100%;
}
</style>
