import {defineStore} from 'pinia'
import {Badge, getAllExchangeBadges} from "../api/badge";
import {Card, getAllExchangeCards} from "../api/card";

export const defaultStore = defineStore({
    id: 'store',
    state: () => ({
        badges: [] as string[],
        cards: [] as Card[],
    }),
    actions:{
        async fetchCurrencies() {
            const response = await getAllExchangeBadges();
            this.$state.badges = [];
            response.forEach((badge: string) => {
                this.$state.badges.push(badge);
            })
            console.log(response);
        },
        async fetchExchangeRates() {
            const response = await getAllExchangeCards();
            this.$state.cards = [];
            response.forEach((card: Card) => {
                this.$state.cards.push(card);
            })
        },
    },
})

