import React from 'react';
import '../EvaluatorHeader/EvaluatorHeader.css';

const EvaluatorHeader = () => {
    return (
        <div className="navout">
            <div className="bluestrip">
                <div className="candidate-title-wrapper clearfix">
                    <h1 className="head-title align-left">My Evaluators</h1>
                    <div className="align-right">
                        <div className="selectout">
                            <label >Blank Text</label>
                            <select id="ddlLanguage" name="ddlLanguage" defaultValue="en-US"><option value="en-US">English</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bredcumbs" id="div_breadcrumbs" role="navigation" aria-label="breadcrumb">
                <ul className="clearfix">
                    <li>Instructions</li>
                    <li>Verify My Information</li>
                    <li id="lnkOptionalResearch" className="display-none" >Optional Research</li>
                    <li aria-current="page"><b>My Evaluators</b></li>
                </ul>
            </div>
        </div>
        
    );
}

export default EvaluatorHeader;