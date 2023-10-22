<template>
  <div class="demo-container">
    <h3>result: <span>{{ result }}</span></h3>
    <h3>loading: <span>{{ loading }}</span></h3>
    <h3>error: <span>{{ error }}</span></h3>
    <h3>onCache: <span>{{ onCacheStr }}</span></h3>
    <button class="primary" @click="handleRun">run</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRequest } from '@superarale/vue-use-request';
import { request, IParams, IResult, correctKey } from './request';

const onCacheStr = ref('');

const onCache = (result: IResult) => {
  onCacheStr.value = `onCache triggered: ${JSON.stringify(result)}`;
};
const reset = () => {
  result.value = null;
  loading.value = false;
  error.value = null;
  onCacheStr.value = '';
};

const { result, loading, error, run } = useRequest(request, {
  cacheTime: 3000,
  onCache,
});

const handleRun = () => {
  const params: IParams = {
    key: correctKey,
  };
  run(params);
};
</script>
