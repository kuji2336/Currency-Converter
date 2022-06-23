import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import CurrencyController from "../../../controller/convert";
import { SelectValue } from "../../convert/interface/interface";

export default function useGetLiveExchnageRates(baseCurrency: SelectValue) {
    const { addToast } = useToasts();
    const [data, setData] = useState<any>({ rates: {}, base: "" });
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await CurrencyController.Live(baseCurrency.value);
            try {
                if (result.success) {
                    setData({ rates: result.rates, base: result.base });
                } else {
                    addToast(`${result.error.type}`, {
                        appearance: "error",
                        autoDismiss: true,
                        autoDismissTimeout: 5000
                    });
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [baseCurrency]);

    return { data, loading };
}
