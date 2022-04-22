import {Card} from "../api/card";
import {Badge} from "../api/bagde";

export interface AppState {
    allExchangeCards: String[];
    openedExchangeCards: Card[];
}
