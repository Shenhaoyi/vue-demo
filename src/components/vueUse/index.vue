<template>
  <UseConfirmDialog />
  <el-divider></el-divider>
  <UseEventBus />
  <el-divider></el-divider>
  <UseVModel v-model:name="formData.name" v-model:age="formData.age" v-model:sex="formData.sex" />
  <div>
    {{ formData }}
  </div>

</template>

<script lang="ts" setup>
const formData = reactive({
  name: 'lily',
  age: '8',
  sex: 'boy'
})
</script>

<style lang="less" scoped>
</style>
