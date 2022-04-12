<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Currencies</h1>
      <input v-model.number="threshold" placeholder="threshold">
      <div>
        <button v-for="item in notTrackedCurrencies" :key="item" @click="() => addCurrency(item)">
          {{ item }}
        </button>
      </div>

      <div>
        <div v-for="item in filteredExchangeRates" :key="item.code">
          <h2>{{item.code}} <span @click="()=> removeCurrency(item.code)">X</span></h2>
          <div> H: {{ item.exchange.hour }}</div>
          <div> D: {{ item.exchange.day }}</div>
          <div> M: {{ item.exchange.month }}</div>
          <div> Y: {{ item.exchange.year }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {ExchangeRate} from "~/api/model";

export default Vue.extend( {
  name: 'IndexPage',
  data() {
    return {
      currencies: [] as string[],
      trackedCurrencies: [] as string[],
      exchangeRates: [] as ExchangeRate[],
      threshold: null as null | number,
    }
  },
  async fetch() {
    this.currencies = await this.$http.$get('/api/currencies');
  },
  computed: {
    trackedExchangeRates(): ExchangeRate[] {
      return this.exchangeRates.filter(item => this.trackedCurrencies.includes(item.code));
    },
    notTrackedCurrencies(): string[] {
      return this.currencies.filter(item => !this.trackedCurrencies.includes(item));
    },
    filteredExchangeRates(): ExchangeRate[] {
      if (this.threshold) {
        return this.trackedExchangeRates.filter(item => item.exchange.hour > this.threshold!)
      } else {
        return this.trackedExchangeRates;
      }
    },
  },
  mounted() {
    this.fetchExchangeRates();
    setInterval(this.fetchExchangeRates, 1000)
  },
  methods: {
    addCurrency(currency: string) {
      this.trackedCurrencies.push(currency);
    },
    removeCurrency(currency: string) {
      this.trackedCurrencies  = this.trackedCurrencies.filter(item => item !== currency);
    },
    fetchExchangeRates() {
      this.$http.$get<ExchangeRate[]>('/api/exchange-rates').then((exchangeRates)=> {
        this.exchangeRates = exchangeRates;
      });
    }
  },
});
</script>
