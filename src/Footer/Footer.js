import React from "react";
import './Footer.css';

const Footer = () => {
 return (
     <div className="container">
         <footer className="rounded mt-4 p-2 p-sm-3">
            <div className="footer clearfix">
                 <div className="align-left float-left">
                     <ul>
                         <li >
                             <a href="http://www.skillsurvey.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                         </li>
                         <span>|</span>
                         <li>
                             <a href="/Reference/Candidate/CustomerSupport/?candidateId=IJ%252fSE7p7V%252frmv6EFlaoQJQ%253d%253d" target="_blank">Contact Us</a>
                         </li>
                     </ul>
                 </div>
                <div className="align-right float-right">
                    © 2019 SkillSurvey, Inc. All Rights Reserved. 
                </div>
             </div>
         </footer>
     </div>)
};

export default Footer;