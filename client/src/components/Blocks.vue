<template>
  <div
    class="container mx-auto lg:items-center border border-slate-600 p-3 m-3"
  >
    <h3 class="font-bold tracking-tight sm:text-2xl">
      <span class="block">Blocks</span>
    </h3>
    <hr class="my-3" />
    <div class="table w-full" v-if="blocks.length > 0">
      <div class="table-header-group">
        <div class="table-row">
          <div class="table-cell text-left font-bold">Height</div>
          <div class="table-cell text-left font-bold">Hash</div>
          <div class="table-cell text-left font-bold">Tx in block</div>
          <div class="table-cell text-left font-bold">Size</div>
        </div>
      </div>
      <div class="table-row-group">
        <div class="table-row" v-for="(block, _) in blocks">
          <div class="table-cell">{{ block.header.height }}</div>
          <div class="table-cell">
            <a href="" v-on:click="inspectBlock(block.header.height)">
              {{ block.block_id.hash }}
            </a>
          </div>
          <div class="table-cell">{{ block.num_txs }}</div>
          <div class="table-cell">{{ block.block_size }}</div>
        </div>
      </div>
    </div>
    <p v-else>No data</p>
  </div>
</template>
<script setup lang="ts">
import { setIntervalAsync } from 'set-interval-async';
import { computed, onMounted } from 'vue';
import { useTransactionStore } from '../store/transaction';

const txStore = useTransactionStore();
const blocks = computed(() => txStore.blocks);
const inspectBlock = (height: string) => {
  window.open(import.meta.env.VITE_RPC_URL + '/block?height=' + height);
};
onMounted(async () => {
  setIntervalAsync(async function () {
    await txStore.fetchBlocks();
  }, 1000);
});
</script>
