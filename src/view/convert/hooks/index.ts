import { useMemo, useState } from "react";
import { useToasts } from "react-toast-notifications";
import CurrencyController from "../../../controller/convert";
import countryCodes from "../../../country-codes.json";
import { IexchangeParams, Iresponse, SelectValue } from "../interface/interface";

export const useGetCountryInfo = () => {
    const options: any = useMemo(() => {
        return countryCodes.map((country) => {
            return {
                label: `${country.country} - ${country.currency_code}`,
                value: country.currency_code
            };
        });
    }, []);

    return { options };
};

export const useConvertCurrency = () => {
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<Iresponse>({ result: 0, query: { amount: "", from: "", to: "" } });
    const convert = async ({ from, to, amount }: IexchangeParams) => {
        setLoading(true);
        try {
            const res = await CurrencyController.GetConvertedResult({ from, to, amount });
            if (res.success) {
                setResult({ result: res.result, query: res.query });
            } else {
                addToast(`${res.error.info}`, {
                    appearance: "error",
                    autoDismiss: true,
                    autoDismissTimeout: 5000
                });
            }
        } catch (err) {
            addToast(`ERROR OCCURED PLEASE TRY AGAIN!`, {
                appearance: "error",
                autoDismiss: true,
                autoDismissTimeout: 5000
            });
        } finally {
            setLoading(false);
        }
    };

    return { convert, loading, result };
};
