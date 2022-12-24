<template>
  <div class="text-white">
    <div
      class="container mx-auto lg:items-center lg:flex lg:items-center lg:justify-between lg:py-16"
    >
      <h3 class="font-bold tracking-tight sm:text-3xl">
        <span class="block">Lottery Chain Simulation</span>
      </h3>
      <h3 class="font-bold tracking-tight sm:text-3xl">
        <span class="block"
          >Round : {{ iterationCount }} / {{ maxIteration }}</span
        >
      </h3>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <button
            :disabled="isSimulating"
            @click="transactionStore.startSimulation"
            href="#"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useTransactionStore } from '../store/transaction';

const maxIteration = import.meta.env.VITE_MAX_ITERATION;
const transactionStore = useTransactionStore();
const iterationCount = computed(() => transactionStore.iterationCount);
const isSimulating = computed(() => transactionStore.isSimulating);
</script>
