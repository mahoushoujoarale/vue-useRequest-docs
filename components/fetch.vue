<template>
  <div class="demo-container">
    <button class="primary" @click="toggleChild">toggleChild</button>
    <br/>
    <br/>
    <FetchChild v-if="mountChild"></FetchChild>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FetchChild from './fetchChild.vue';
import { request } from './fetchRequest';

const mountChild = ref(true);

const toggleChild = () => {
  mountChild.value = !mountChild.value;
};
</script>
