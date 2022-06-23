import React from "react";
import "./text-input.css";
import { IInputValues } from "../../../view/convert/interface/interface";

export const TextInput = ({ setInputValues }: { setInputValues: React.Dispatch<React.SetStateAction<IInputValues>> }) => {
    return (
        <input
            type="number"
            min={0}
            placeholder="AMOUNT"
            onChange={(e) => setInputValues((prev) => ({ ...prev, amount: e.target.value }))}
        />
    );
};
