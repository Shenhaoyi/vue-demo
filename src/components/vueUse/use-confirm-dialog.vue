<template>
  <h2>
    <span class="text-orange-400">{{ message }}</span>
  </h2>
  <button :disabled="revealed1 || revealed2" @click="openDialog1">
    Click to Show Modal Dialog
  </button>

  <!-- First Dialog -->
  <el-dialog :model-value="revealed1" :before-close="dialog1.cancel">
    <p>Show Second Dialog?</p>
    <template #footer>
      <span>
        <el-button @click="dialog1.cancel">取 消</el-button>
        <el-button type="primary" @click="dialog1.confirm">确 定</el-button>
      </span>
    </template>
  </el-dialog>

  <!-- Second Dialog -->
  <el-dialog :model-value="revealed2" :before-close="dialog2.cancel">
    <p>Confirm or Reject?</p>
    <template #footer>
      <span>
        <el-button @click="dialog2.cancel">取 消</el-button>
        <el-button type="primary" @click="dialog2.confirm(false)">拒绝</el-button>
        <el-button type="primary" @click="dialog2.confirm(true)">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { useConfirmDialog } from '@vueuse/core'

const message = ref('')
const revealed1 = ref(false)
const revealed2 = ref(false)

const dialog1 = useConfirmDialog(revealed1)
const dialog2 = useConfirmDialog(revealed2)

const openDialog1 = async () => {
  const { data, isCanceled } = await dialog1.reveal()
  console.log(isCanceled);
}

dialog1.onReveal(() => {
  message.value = 'Modal is shown!'
})

dialog1.onConfirm(() => {
  dialog2.reveal()
})

dialog1.onCancel(() => {
  message.value = 'Canceled!'
})

dialog2.onReveal(() => {
  message.value = 'Second modal is shown!'
})

dialog2.onConfirm((result) => {
  if (result)
    message.value = 'Confirmed!'
  else message.value = 'Rejected!'
})

dialog2.onCancel(() => {
  dialog1.reveal()
  message.value = 'Canceled!'
})
</script>

<style scoped>
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  max-width: 100%;
  z-index: 10;
}

.modal-layout {
  z-index: 20;
  left: 0;
  top: 0;
  position: fixed;
  background-color: #7c7c7c7a;
  width: 100%;
  height: 100%;
}

.inner {
  background-color: var(--c-bg);
  padding: 0.4em 2em;
  border-radius: 5px;
  border: 1px solid var(--c-divider-light);
  box-shadow: 2px 2px 10px rgba(10, 10, 10, 0.1);
}

.small {
  position: absolute;
  top: -0.9rem;
  right: -0.5rem;
  font-weight: bold;
}

.button:focus {
  outline: rgb(91, 91, 255) solid 3px;
}

.heading {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 2rem;
}
</style>
