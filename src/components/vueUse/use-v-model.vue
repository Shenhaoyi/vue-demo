<template>
  <div>
    name:
    <input v-model="_name"/>
    age:
    <input v-model="_age"/>
    sex:
    <input v-model="_sex"/>
  </div>
</template>
<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
const props = defineProps({
  name: String,
  age: String,
  sex: String
})
const emit = defineEmits(['update:name', 'update:age', 'update:sex'])

const _name = useVModel(props, 'name', emit)
const _age = useVModel(props, 'age', emit)
const _sex = useVModel(props, 'sex', emit)
</script>
