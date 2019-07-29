import React from "react";
import "./Header.css";
import CompanyLogo from '../CompanyLogo/CompanyLogo'//'./CompanyLogo/CompanyLogo';
import Evaluators from '../Evaluators/index';

const Header = () => {
    return (
        <header>
            <div className="orangeStrip">
                <div className="lightOrange">&nbsp;</div>
            </div>
            <CompanyLogo></CompanyLogo>
            
        </header >
    )
};

export default Header;