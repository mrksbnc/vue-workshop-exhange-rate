"use strict";

import axios from "axios";

const baseUrl = "/api";

class ApiService {
  async getAll() {
    const url = baseUrl + "/currencies";
    const response = await axios.get(url);
    return response.data;
  }
  async getRates() {
    const url = baseUrl + "/exchange-rates";
    const response = await axios.get(url);
    console.log({ response: response.data });
    return response.data;
  }
}

const instance = new ApiService();
export { instance as apiService };
