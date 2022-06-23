import React from "react";
import "./header.css";
import { FaMoneyBillWave } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header header-primary">
            <div className="d-flex header-wrapper">
                <NavLink to="/">
                    <FaMoneyBillWave color="#00DC84" size={50} />
                </NavLink>
                <nav className="header-nav-wrapper">
                    <div className="nav-link">
                        <NavLink to="/" className="nav-link__inner">
                            CONVERT
                        </NavLink>
                    </div>

                    <div className="nav-link">
                        <NavLink to="/live-rates" className="nav-link__inner">
                            EXCHANGE RATES
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
};
