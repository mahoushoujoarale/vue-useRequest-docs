<template>
  <div class="demo-container">
    <h3>result: <span>{{ result }}</span></h3>
    <h3>loading: <span>{{ loading }}</span></h3>
    <h3>error: <span>{{ error }}</span></h3>
    <h3>onSuccess: <span>{{ successStr }}</span></h3>
    <h3>onError: <span>{{ errorStr }}</span></h3>
    <button class="primary" @click="() => run(false)">run</button>
    <button @click="() => run(true)">runError</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRequest } from '@superarale/vue-use-request';
import { request } from './request';

const successStr = ref('');
const errorStr = ref('');

const onSuccess = () => {
  successStr.value = 'onSuccess triggered';
};
const onError = () => {
  errorStr.value = 'onError triggered';
};
const reset = () => {
  result.value = null;
  loading.value = false;
  error.value = null;
  successStr.value = '';
  errorStr.value = '';
};

const { result, loading, error, run } = useRequest(request, {
  retryTimes: 3,
  onSuccess,
  onError,
});
</script>

<style>
@import './style.css';
</style>