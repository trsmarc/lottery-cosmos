<template>
  <div
    class="container mx-auto lg:items-center border border-slate-600 p-3 m-3"
  >
    <h3 class="font-bold tracking-tight sm:text-2xl">
      <span class="block">Accounts</span>
    </h3>
    <hr class="my-3" />
    <div class="table w-full" v-if="accounts.length > 0">
      <div class="table-header-group">
        <div class="table-row">
          <div class="table-cell text-left font-bold">Name</div>
          <div class="table-cell text-left font-bold">Bet Size</div>
          <div class="table-cell text-left font-bold">Address</div>
          <div class="table-cell text-left font-bold">Balance</div>
        </div>
      </div>
      <div class="table-row-group">
        <div class="table-row" v-for="(account, _) in accounts">
          <div class="table-cell">{{ account.name }}</div>
          <div class="table-cell">{{ account.betSize + ' token' }}</div>
          <div class="table-cell">{{ account.address }}</div>
          <div class="table-cell">{{ account.balance }}</div>
        </div>
      </div>
    </div>
    <p v-else>No accounts</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useAccountStore } from '../store/account';
import { Account } from '../types/account';

const accountStore = useAccountStore();
const accounts = computed((): Account[] => accountStore.$state.accounts);

onMounted(async () => {
  await accountStore.fetchAccounts();
  await accountStore.fetchAccountBalance();
});
</script>
