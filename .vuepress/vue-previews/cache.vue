<template>
  <div>
    <div style="max-height: 400px; overflow: auto;">resutl: {{ result }}</div>
    <div>loading: {{ loading }}</div>
    <div>error: {{ error }}</div>
    <button @click="run" style="width: 40px; background-color: antiquewhite;">run</button>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { useRequest } from '@superarale/vue-use-request';

const url = 'https://restapi.amap.com/v3/weather/weatherInfo?key=e641661b0dfbf7ffa23a2110d44f38de&city=110000';
const request = async (signal: AbortSignal) => {
  return axios.get(url, {
    signal,
  })
};

const { result, loading, error, run } = useRequest(request);
</script>