<template>
  <div class="demo-container">
    <h3>result: <span>{{ result }}</span></h3>
    <h3>loading: <span>{{ loading }}</span></h3>
    <h3>error: <span>{{ error }}</span></h3>
    <h3>onBefore: <span>{{ onBeforeStr }}</span></h3>
    <h3>onAfter: <span>{{ onAfterStr }}</span></h3>
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

const reset = () => {
  result.value = null;
  loading.value = false;
  error.value = null;
  onBeforeStr.value = '';
  onAfterStr.value = '';
  successStr.value = '';
  errorStr.value = '';
};

const onBeforeStr = ref('');
const onAfterStr = ref('');
const successStr =ref('');
const errorStr = ref('');

const onBefore = () => {
  onBeforeStr.value = 'onBefore triggered';
};
const onAfter = () => {
  onAfterStr.value = 'onAfter triggered';
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