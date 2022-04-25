import axios from "axios";


axios.defaults.baseURL = 'http://localhost:3000/api';

export interface Badge {
    badge_name: string,
}

export async function getAllExchangeBadges() {
    const res = await axios.get("/currencies");
    return res.data;
}
