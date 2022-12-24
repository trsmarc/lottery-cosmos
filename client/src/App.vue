<template>
  <Menu />
  <Suspense>
    <Accounts />
  </Suspense>
  <Suspense>
    <Bets />
  </Suspense>
  <Suspense>
    <Records />
  </Suspense>
  <Suspense>
    <Transactions />
  </Suspense>
</template>
<script setup lang="ts">
import Accounts from './components/Accounts.vue';
import Bets from './components/Bets.vue';
import Menu from './components/Menu.vue';
import Records from './components/Records.vue';
import Transactions from './components/Transactions.vue';
</script>
