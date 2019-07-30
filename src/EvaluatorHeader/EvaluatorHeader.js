import React from 'react';
import '../EvaluatorHeader/EvaluatorHeader.css';

const EvaluatorHeader = () => {
    return (
        <div className="navout">
            <div className="bluestrip">
                <div className="candidate-title-wrapper clearfix">
                    <h1 className="head-title align-left">My Evaluators</h1>
                    
                </div>
            </div>
            <div className="bredcumbs" id="div_breadcrumbs" role="navigation" aria-label="breadcrumb">
                <ul className="clearfix">
                    <li className="breadcrumb-item">Instructions</li>
                    <li className="breadcrumb-item"> Verify My Information</li>
                    <li id="lnkOptionalResearch" className="breadcrumb-item" >Optional Research</li>
                    <li aria-current="page" className="breadcrumb-item"><b>My Evaluators</b></li>
                </ul>
            </div>
        </div>
        
    );
}

export default EvaluatorHeader;