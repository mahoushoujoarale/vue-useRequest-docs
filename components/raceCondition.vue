<template>
  <div class="demo-container">
    <h3>result: <span>{{ result }}</span></h3>
    <h3>loading: <span>{{ loading }}</span></h3>
    <h3>error: <span>{{ error }}</span></h3>
    <button class="primary" @click="handleRun">run</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts" setup>
import { useRequest } from '@superarale/vue-use-request';
import { request, IParams, correctKey } from './request';

const reset = () => {
  result.value = null;
  loading.value = false;
  error.value = null;
};

const { result, loading, error, run } = useRequest(request, {
  useLastRequest: true,
});

const handleRun = () => {
  const params: IParams = {
    key: correctKey,
  };
  run(params);
};
</script>
