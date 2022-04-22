import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/api';

export interface Card {
    badge_name: string,
    hour_average: number,
    day_average: number,
    month_average: number,
    year_average: number,
}

export async function getAllExchangeCards() {
    const res = await axios.get<Card[]>("/exchange-rates");
    return res.data;
}

