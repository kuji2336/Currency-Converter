import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/common/header/header";
import "./global/css/global.css";
import useGetDefaultCurrency from "./global/hooks/useGetDefaultCurrency";

const Converter = React.lazy(() =>
    import(/*webpackChunkName: “converter-page” */ "./view/convert/index").then((module) => ({
        default: module.Converter
    }))
);

const LiveRates = React.lazy(() =>
    import(/*webpackChunkName: “live-rates-page” */ "./view/live-rates").then((module) => ({
        default: module.LiveRates
    }))
);

function App() {
    const { appLoading } = useGetDefaultCurrency();
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <Converter />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/live-rates"
                    element={
                        <React.Suspense fallback={<>...</>}>
                            <LiveRates />
                        </React.Suspense>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
