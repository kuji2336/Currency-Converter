import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { setDefaultCurrency } from "../../store/default-currency";

//get user info by IP address (currency, country) ect
export default function useGetDefaultCurrency() {
    const dispatch = useAppDispatch();
    const [appLoading, setAppLoading] = useState(false);
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                setAppLoading(true);
                const response = await axios.get("https://api.ipregistry.co/?key=k9dy63rmv5s6lxns");
                const { data } = response;
                dispatch(
                    setDefaultCurrency({
                        label: `${data?.location.country.name} - ${data?.currency.code}`,
                        value: data?.currency.code
                    })
                );
            } catch (err) {
                console.log(err);
            } finally {
                setAppLoading(false);
            }
        };
        getUserInfo();
    }, []);

    return { appLoading };
}
