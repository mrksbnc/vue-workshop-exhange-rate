import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/api';

export interface Card {
    code: string,
    exchange: {
        day: string,
        hour: string,
        month: string,
        year: string,
    }
}

export async function getAllExchangeCards() {
    const res = await axios.get<Card[]>("/exchange-rates");
    return res.data;
}

