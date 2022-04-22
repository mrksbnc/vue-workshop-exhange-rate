<template>
  <div>
      Currencies:
      <badge v-for="badge in processedBadges"
             :key="badge.badgeName"
             :name="badge.badgeName"
             @open-card="selectBadge(badge);"
      />
      <span>Threshold: </span>
      <input type="text" v-model="thresholdValue">
      <div class="cards">
          <card v-for="card in filteredCardsAfterThreshold"
                :key="card.cardData.title"
                :card-data="card.cardData"
                @close-card="removeBadge({name: card.cardData.title})"
          />
      </div>

  </div>
</template>

<script>

export default {
  name: 'ExchangeRates',
    mounted() {
        setInterval(() => {
            this.$store.dispatch("getAllExchangeBadges");
            this.$store.dispatch("getAllExchangeCards");
        }, 1000);
    },
    data(){
      return{
          selectedCurrencies: [],
          thresholdValue: '',
      };
    },
    computed: {
        badgeList() {
            return this.$store.getters.badgeList;
        },
        cardList() {
            return this.$store.getters.cardList;
        },
        threshold() {
            return parseInt(this.thresholdValue, 10);
        },
        processedCards() {
            const selectedCurrencies = this.selectedCurrencies;

            return this.cardList.filter(card => selectedCurrencies.includes(card.code))
                                .map(card => {
                                    return {
                                        cardData: {
                                            title: card.code,
                                            h: card.exchange.hour,
                                            d: card.exchange.day,
                                            m: card.exchange.month,
                                            y: card.exchange.year
                                        }
                                    }
                                });
        },
        filteredCardsAfterThreshold() {
          if(!this.thresholdValue) {
              return this.processedCards;
          }
          return this.processedCards.filter(processedCard => parseInt(processedCard.cardData.h, 10) >= this.threshold);
        },
        processedBadges() {
            const selectedCurrencies = this.selectedCurrencies;

            return this.badgeList.filter( name => !selectedCurrencies.includes(name) )
                                 .map(name => {
                                     return {badgeName: name}
                                 });
        },
    },
    methods: {
        selectBadge(badge) {
            this.selectedCurrencies.push(badge.badgeName);
        },
        removeBadge(badge) {
            this.selectedCurrencies = this.selectedCurrencies.filter(currencyName => currencyName !== badge.name);
        }
    }
}

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
.cards {
    display: flex;
    flex-direction: row;
}
</style>
