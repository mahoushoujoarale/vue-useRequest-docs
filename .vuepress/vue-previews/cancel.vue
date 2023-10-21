<template>
  <div class="demo-container">
    <button class="primary" @click="toggleChild">toggleChild</button>
    <br/>
    <br/>
    <CancelChild v-if="mountChild"></CancelChild>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CancelChild from './cancelChild.vue';

const mountChild = ref(true);

const toggleChild = () => {
  mountChild.value = !mountChild.value;
};
</script>
