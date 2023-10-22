<template>
  <div class="demo-container">
    <h3>result: <span>{{ result }}</span></h3>
    <h3>loading: <span>{{ loading }}</span></h3>
    <h3>error: <span>{{ error }}</span></h3>
    <h3>onCancel: <span>{{ onCancelStr }}</span></h3>
    <button class="primary" @click="handleRun">run</button>
    <button @click="cancel">cancel</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRequest } from '@superarale/vue-use-request';
import { request, IParams, correctKey } from './request';

const onCancelStr = ref('');

const onCancel = () => {
  onCancelStr.value = 'onCancel triggered';
};
const reset = () => {
  result.value = null;
  loading.value = false;
  error.value = null;
  onCancelStr.value = '';
};

const { result, loading, error, run, cancel } = useRequest(request, {
  onCancel,
});

const handleRun = () => {
  const params: IParams = {
    key: correctKey,
  };
  run(params);
};
</script>
