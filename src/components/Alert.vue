<script setup>
const props = defineProps({
  show: Boolean,
  type: String,
  message: String,
  classes: String,
});
</script>
<template lang="">
  <div class="col-12">
    <div :class="`${type}-alert ${classes}`">
      <i class="fa-solid fa-triangle-exclamation" v-if="type === 'danger'"></i>
      <span class="ms-2">{{ message }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
