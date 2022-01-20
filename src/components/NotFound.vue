<template>
  <div class="test">404</div>
</template>

<script lang="ts">import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";


export default {
  setup(props: any) {
    const router = useRouter()
    const route = useRoute()
    onMounted(()=> {
      console.log(route.params);
    });
  },
}
</script>


<style>
.test {
  width: 100%;
  height: 100%;
  font-size: 20px;
}
</style>
