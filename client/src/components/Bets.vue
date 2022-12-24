<template>
  <div
    class="container mx-auto lg:items-center border border-slate-600 p-3 m-3"
  >
    <h3 class="font-bold tracking-tight sm:text-2xl">
      <span class="block">Bets</span>
    </h3>
    <hr class="my-3" />
    <div class="table w-full" v-if="bets.length > 0">
      <div class="table-header-group">
        <div class="table-row">
          <div class="table-cell text-left font-bold">Address</div>
          <div class="table-cell text-left font-bold">Size</div>
        </div>
      </div>
      <div class="table-row-group">
        <div class="table-row" v-for="(bet, _) in bets">
          <div class="table-cell">{{ bet.creator }}</div>
          <div class="table-cell">{{ bet.betSize }}</div>
        </div>
      </div>
    </div>
    <p v-else>No bets</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useBetStore } from '../store/bet';

const betStore = useBetStore();
const bets = computed(() => betStore.bets);

onMounted(async () => {
  await betStore.fetchBets();
});
</script>
