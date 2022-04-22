import { createStore } from "vuex";
import {AppState} from "./state";
import {Card, getAllExchangeCards} from "../api/card";
import {Badge, getAllExchangeBadges} from "../api/bagde";

const store = createStore<AppState>({
    state: {
        allExchangeCards: [],
        openedExchangeCards: [],
    },
    mutations: {
        setAllExcangeCards(state, payload: []) {
            state.allExchangeCards = payload;
        },
        setOpenedExchangeCard(state, payload: Card[]) {
            state.openedExchangeCards = payload;
        }
    },
    actions: {
        getAllExchangeCards(context) {
            getAllExchangeCards().then((payload) => {
               context.commit("setAllExcangeCards", payload);
            });
        },
        getAllExchangeBadges(context) {
            getAllExchangeBadges().then((payload) => {
                context.commit("setOpenedExchangeCard", payload);
            })
        }
    },
    getters: {
        badgeList: (state) => state.openedExchangeCards ?? [],
        cardList: (state) => state.allExchangeCards ?? [],
    },
});

export default store;
