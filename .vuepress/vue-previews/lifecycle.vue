<template>
  <div class="demo-container">
    <h3>result: <span>{{ result }}</span></h3>
    <h3>loading: <span>{{ loading }}</span></h3>
    <h3>error: <span>{{ error }}</span></h3>
    <h3>onBefore: <span>{{ beforeStr }}</span></h3>
    <h3>onAfter: <span>{{ afterStr }}</span></h3>
    <h3>onSuccess: <span>{{ successStr }}</span></h3>
    <h3>onError: <span>{{ errorStr }}</span></h3>
    <button class="primary" @click="() => run(false)">run</button>
    <button @click="() => run(true)">runError</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRequest } from '@superarale/vue-use-request';

const url = 'https://restapi.amap.com/v3/weather/weatherInfo?key=e641661b0dfbf7ffa23a2110d44f38de&city=110000';
const request = async (signal, isWrong) => {
  if (isWrong) {
    await new Promise((resolve, reject) => setTimeout(() => {
      reject(new Error('error'));
    }, 1000));
  }
  const res = await axios.get<string>(url, {
    signal,
  });
  return res.data;
};

const reset = () => {
  result.value = null;
  loading.value = false;
  error.value = null;
  beforeStr.value = '';
  afterStr.value = '';
  successStr.value = '';
  errorStr.value = '';
};

const beforeStr = ref('');
const afterStr = ref('');
const successStr =ref('');
const errorStr = ref('');

const onBefore = () => {
  beforeStr.value = 'onBefore triggered';
};
const onAfter = () => {
  afterStr.value = 'onAfter triggered';
};
const onSuccess = () => {
  successStr.value = 'onSuccess triggered';
};
const onError = () => {
  errorStr.value = 'onError triggered';
};

const { result, loading, error, run } = useRequest(request, {
  onBefore,
  onAfter,
  onSuccess,
  onError,
});
</script>

<style>
@import './style.css';
</style>