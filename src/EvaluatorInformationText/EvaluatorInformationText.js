import React from 'react';

const EvaluatorInformationText = () => {
    return (

        <div className="panel-content-wrapper border-blue" >

            <p>Click the <b>Add Evaluator</b> button to enter evaluators from your internship, where at least 1 evaluator is/was your direct supervisor.</p><ul className="bullet-list" >
                <li>You are strongly encouraged to consider including others that you interacted with directly, such as secondary supervisors, coworkers.</li>
                <li>Do not include anyone that you did not work with directly, or non-professional evaluators such as friends or family.</li>
                <li>Be sure to click the <b>Send Link to Evaluator(s)</b> button to send the requests to your evaluators.</li>
                <li>Once you click the <b>Send Link to Evaluator(s)</b> button, be sure to complete your self-assessment.</li>
            </ul>
            <p>Samples of the messages and survey questions are available using the links below.</p>

            <div className="clearfix"></div>

        </div>)
};

export default EvaluatorInformationText;