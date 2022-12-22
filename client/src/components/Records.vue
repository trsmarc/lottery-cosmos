<template>
  <div
    class="container mx-auto lg:items-center border border-slate-600 p-3 m-3"
  >
    <h3 class="font-bold tracking-tight sm:text-2xl">
      <span class="block">Winner Records</span>
    </h3>
    <hr class="my-3" />
    <div class="table w-full" v-if="lotteryRecords.length > 0">
      <div class="table-header-group">
        <div class="table-row">
          <div class="table-cell text-left font-bold">Address</div>
          <div class="table-cell text-left font-bold">Reward</div>
          <div class="table-cell text-left font-bold">Type</div>
        </div>
      </div>
      <div class="table-row-group">
        <div class="table-row" v-for="(record, _) in lotteryRecords">
          <div class="table-cell">{{ record.winnerAddress }}</div>
          <div class="table-cell">{{ record.reward }}</div>
          <div class="table-cell">{{ record.winnerType }}</div>
        </div>
      </div>
    </div>
    <p v-else>No records</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useLotteryRecordStore } from "../store/lottery-record";

const lotteryRecordStore = useLotteryRecordStore();
const lotteryRecords = computed(() => lotteryRecordStore.lotteryRecords)

onMounted(async () => {
  await lotteryRecordStore.fetchLotteryRecords();
});
</script>
