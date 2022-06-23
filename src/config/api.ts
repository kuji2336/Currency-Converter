import axios from "axios";

const CurrencyApi = axios.create({
    baseURL: "https://api.apilayer.com/fixer",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    timeout: 5000
});

export const API_KEY = "3H452toPUsrp4nn8oOEUUC4xwMSBFUIn";

export default CurrencyApi;
