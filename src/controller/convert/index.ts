import CurrencyApi, { API_KEY } from "../../config/api";
import { IexchangeParams } from "../../view/convert/interface/interface";

export default class CurrencyController {
    public static async GetConvertedResult({ from, to, amount }: IexchangeParams) {
        const params = {
            from: from.value,
            to: to.value,
            amount
        };
        const response = await CurrencyApi.get(`/convert`, {
            params,
            headers: {
                apikey: API_KEY
            }
        });
        return response.data;
    }

    public static async Live(baseCurrency: string) {
        const response = await CurrencyApi.get(`/latest`, {
            params: {
                base: baseCurrency ?? "USD"
            },
            headers: {
                apikey: API_KEY
            }
        });
        return response.data;
    }
}
