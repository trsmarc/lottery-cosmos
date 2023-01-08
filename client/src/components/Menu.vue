<template>
  <div class="text-white">
    <div
      class="container lg:px-auto px-10 mx-auto lg:items-center lg:flex lg:items-center lg:justify-between lg:py-16"
    >
      <h3 class="font-bold tracking-tight sm:text-3xl">
        <span class="block">Lottery Chain Simulation</span>
      </h3>
      <h3 class="font-bold tracking-tight sm:text-3xl">
        <span class="block"
          >Cycle : {{ iterationCount }} / {{ maxIteration }}</span
        >
      </h3>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <button
            v-if="isNetworkReady && !isSimulating"
            :disabled="isSimulating"
            @click="transactionStore.startSimulation"
            href="#"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
          >
            Start
          </button>
          <div v-else class="inline-flex items-center justify-center">
            <p>{{ isSimulating ? 'Simulating' : 'Connecting' }}</p>
            <div class="scaling-dots ml-5">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <button
            v-if="isSimulating"
            @click="transactionStore.stopSimulation"
            href="#"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 ml-5 px-5 py-3 text-base font-medium text-white hover:bg-red-700"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { setIntervalAsync } from 'set-interval-async';
import { computed, onMounted } from 'vue';
import { useTransactionStore } from '../store/transaction';
import '../style.css';

const maxIteration = import.meta.env.VITE_MAX_ITERATION;
const transactionStore = useTransactionStore();
const iterationCount = computed(() => transactionStore.iterationCount);
const isSimulating = computed(() => transactionStore.isSimulating);
const isNetworkReady = computed(() => transactionStore.isNetworkReady);

onMounted(async () => {
  setIntervalAsync(async function () {
    await transactionStore.checkNetworkStatus();
  }, 1000);
});
</script>
