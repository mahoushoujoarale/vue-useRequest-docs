<template>
  <div class="demo-container">
    <h3>result: <span>{{ result }}</span></h3>
    <h3>loading: <span>{{ loading }}</span></h3>
    <h3>error: <span>{{ error }}</span></h3>
    <h3>onSuccess: <span>{{ onSuccessStr }}</span></h3>
    <h3>onError: <span>{{ onErrorStr }}</span></h3>
    <button class="primary" @click="handleRun">run</button>
    <button @click="handleRunError">runError</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRequest } from '@superarale/vue-use-request';
import { request, IParams, IResult, correctKey } from './request';

const onSuccessStr = ref('');
const onErrorStr = ref('');

const onSuccess = (result: IResult) => {
  onSuccessStr.value = `onSuccess triggered: ${JSON.stringify(result)}`;
};
const onError = (error: Error) => {
  onErrorStr.value = `onError triggered: ${error}`;
};
const reset = () => {
  result.value = null;
  loading.value = false;
  error.value = null;
  onSuccessStr.value = '';
  onErrorStr.value = '';
};

const { result, loading, error, run } = useRequest(request, {
  retryTimes: 3,
  onSuccess,
  onError,
});

const handleRun = () => {
  const params: IParams = {
    key: correctKey,
  };
  run(params);
};
const handleRunError = () => {
  const params: IParams = {
    key: 'badkey',
  };
  run(params);
};
</script>
