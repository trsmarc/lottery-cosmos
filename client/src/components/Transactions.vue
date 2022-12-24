<template>
  <div
    class="container mx-auto lg:items-center border border-slate-600 p-3 m-3"
  >
    <h3 class="font-bold tracking-tight sm:text-2xl">
      <span class="block">Transactions</span>
    </h3>
    <hr class="my-3" />
    <div class="table w-full" v-if="transactions.length > 0">
      <div class="table-header-group">
        <div class="table-row">
          <div class="table-cell text-left font-bold">Data</div>
        </div>
      </div>
      <div class="table-row-group">
        <div class="table-row" v-for="(tx, _) in transactions">
          <div class="table-cell">{{ tx }}</div>
        </div>
      </div>
    </div>
    <p v-else>No transaction</p>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useTransactionStore } from '../store/transaction';

const txStore = useTransactionStore();
const transactions = computed(() => txStore.transactions);
</script>
