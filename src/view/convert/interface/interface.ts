export interface IInputValues {
    amount: string;
    from: string | any;
    to: string | any;
}

export interface Iresponse {
    result: number;
    query: IInputValues;
}

export interface IexchangeParams {
    from: {
        label: string;
        value: string;
    };
    to: {
        label: string;
        value: string;
    };
    amount: string | number;
}

export type SelectValue = {
    label: string;
    value: string;
};

export interface Iconvert {
    convert: (params: IexchangeParams) => void;
    loading: boolean;
    result: Iresponse;
}
