import React from 'react';
import '../AddEvaluator/AddEvaluator.css';
import {Link } from 'react-router-dom';//routing

const AddEvaluator = () => {

    return (
    <div className="ref-table-reference">
        <div className="heading">
            <h2 className="pull-left"><span className="bullet red-bullet" id="referenceTitle">1</span> Enter Evaluators</h2>
            <div className="status msg-alert pull-left" id="successFailMsg">You have not added the requested number of Evaluators</div>
            <div className="clearfix"></div>
        </div>

        <div className="empty-state">
            <strong>No Evaluators currently available</strong>
        </div>

        <div className="table-actions">
            <span id="spanReferencesSummary" className="message errorSummary">Please enter at least 2 more Evaluators (1 must be Manager)</span>
            <input id="btnAddReference" className="btn-blue text-transform" type="button" value="Add Evaluator" />
            <Link to="/AddEvaluatorPage">
                <button className="btn btn-success" >Add Evaluator</button>
            </Link>
            <input id="btnSendCommunication" className="text-transform btn-blue-disabled" type="button" value="Send Link to Evaluator(s)" disabled="disabled" />
	    </div>

    </div>) 
};


export default AddEvaluator;