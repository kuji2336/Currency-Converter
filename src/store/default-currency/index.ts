/** @format */

import { createSlice } from "@reduxjs/toolkit";

interface IuserAuth {
    defaultCurrency: {
        label: string;
        value: string;
    };
}

const initialState: IuserAuth = {
    defaultCurrency: { label: "", value: "" }
};

const CurrencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setDefaultCurrency(state, action) {
            let payload = action.payload;
            state.defaultCurrency = { ...payload };
        }
    }
});

export const { setDefaultCurrency } = CurrencySlice.actions;

export default CurrencySlice.reducer;
