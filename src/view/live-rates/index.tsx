import Select, { SingleValue } from "react-select";
import { Spinner } from "../../components/common/spinner";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setDefaultCurrency } from "../../store/default-currency";
import { useGetCountryInfo } from "../convert/hooks";
import "../live-rates/css/live-rates.css";
import useGetLiveExchnageRates from "./hooks";
import { SelectValue } from "../convert/interface/interface";

export const LiveRates = () => {
    const defaultCurrency = useAppSelector((state) => state.currency.defaultCurrency);
    const dispatch = useAppDispatch();
    const { options } = useGetCountryInfo();
    const { data, loading } = useGetLiveExchnageRates(defaultCurrency);

    const handleChange = (selectedOption: SingleValue<SelectValue>) => {
        dispatch(setDefaultCurrency(selectedOption));
    };

    return (
        <div className="table-container">
            <div className="currency-picker">
                <div className="picker-inner">
                    <Select
                        value={defaultCurrency}
                        onChange={handleChange}
                        options={options}
                        isClearable={false}
                        isSearchable={true}
                        placeholder="CHANGE BASE CURRENCY"
                    />
                </div>
            </div>
            <div>
                {loading ? (
                    <Spinner />
                ) : (
                    <table>
                        <caption>Current Exchange Rates ({data.base})</caption>
                        <thead>
                            <tr>
                                <th scope="col">BASE CURRENCY</th>
                                <th scope="col">AMOUNT</th>
                                <th scope="col">TO</th>
                                <th scope="col">RESULT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object?.keys(data.rates).map((currency) => (
                                <tr key={currency}>
                                    <td data-label="BASE">{data.base}</td>
                                    <td data-label="AMOUNT">1</td>
                                    <td data-label="TO">{currency}</td>
                                    <td data-label="RESULT">{data.rates[currency].toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};
