import React, { useEffect, useMemo, useState } from "react";
import Select, { SingleValue } from "react-select";
import { Button } from "../../components/common/button";
import { TextInput } from "../../components/convert/text-input";
import { IexchangeParams, IInputValues, Iresponse } from "./interface/interface";
import { useGetCountryInfo, useConvertCurrency } from "./hooks";
import { SelectValue, Iconvert } from "./interface/interface";
import { useAppDispatch, useAppSelector } from "../../hooks";

import "./css/convert.css";
import { setDefaultCurrency } from "../../store/default-currency";

export const Converter = () => {
    const dispatch = useAppDispatch();
    const defaultCurrency = useAppSelector((store) => store.currency.defaultCurrency);

    const [inputValues, setInputValues] = useState<IInputValues>({ amount: "", from: "", to: "" });

    const { convert, loading, result }: Iconvert = useConvertCurrency();
    const { options } = useGetCountryInfo();

    const handleFromChange = (selectedOption: SingleValue<SelectValue>) => {
        setInputValues((prev) => ({ ...prev, from: selectedOption }));
        dispatch(setDefaultCurrency(selectedOption));
    };

    const handleToChange = (selectedOption: SingleValue<SelectValue>) => {
        setInputValues((prev) => ({ ...prev, to: selectedOption }));
    };

    //set default selected value
    useEffect(() => {
        setInputValues((prev) => ({ ...prev, from: defaultCurrency }));
    }, [defaultCurrency]);

    return (
        <div className="converter-box">
            <div className="input-wrapper">
                <div className="d-flex justify-center wrapper-md">
                    <div className="input-width">
                        <p className="label-title">AMOUNT</p>
                        <TextInput setInputValues={setInputValues} />
                    </div>
                    <div className="input-width">
                        <p className="label-title">FROM</p>
                        <Select
                            value={inputValues.from}
                            onChange={handleFromChange}
                            options={options}
                            isClearable={false}
                            isSearchable={true}
                            placeholder="FROM"
                        />
                    </div>
                    <div className="input-width">
                        <p className="label-title">TO</p>
                        <Select
                            value={inputValues.to}
                            onChange={handleToChange}
                            options={options}
                            isClearable={true}
                            isSearchable={true}
                            placeholder="TO"
                        />
                    </div>
                </div>
                {result?.result ? (
                    <div className="result-container">
                        <div>
                            <p className="result-inner">
                                {result?.query.amount} {result?.query.from} is {(result?.result).toFixed(2)} {result?.query.to}
                            </p>
                        </div>
                    </div>
                ) : null}
                <div className="d-flex justify-center button-wrapper">
                    <Button
                        buttonText={loading ? "Processing...." : "Convert"}
                        disabled={loading}
                        bgColor="#00DC84"
                        maxWidth={250}
                        textColor="#ffffff"
                        action={() => convert({ ...inputValues })}
                    />
                </div>
            </div>
        </div>
    );
};
