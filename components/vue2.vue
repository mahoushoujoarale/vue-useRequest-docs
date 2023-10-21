<template>
  <div class="demo-container">
    <button class="primary" @click="toggleChild">toggleChild</button>
    <br/>
    <br/>
    <Vue2Child v-if="mountChild"></Vue2Child>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Vue2Child from './vue2Child.vue';

const mountChild = ref(true);

const toggleChild = () => {
  mountChild.value = !mountChild.value;
};
</script>
