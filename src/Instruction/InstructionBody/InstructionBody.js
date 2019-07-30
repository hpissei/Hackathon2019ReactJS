import React from 'react';
import './InstructionBody.css';
import { Link } from 'react-router-dom';

class InstructionBody extends React.Component
{
    render()
    {
        return(
            <div className="light-blue-box">
                <div className="panel-content-wrapper">
                    <p className="bullet-list">In just a few steps you can enter evaluators and submit your self-assessment for UAT_CareerReadinessCom. 
                        On the following pages, in just a few minutes, you will be able to: </p>
                            <ul className="bullet-list margin-left-25">
                                <li>Verify your personal information</li>
                                <li>Enter evaluators to send requests</li>
                                <li>Provide electronic consent</li>
                                <li>Submit your self-assessment</li>
                            </ul>
                    		<p>Your evaluators will receive a link to a survey, and their responses will be submitted directly to SkillSurvey and made available to UAT_CareerReadinessCom in one aggregated report, which you can request and review with UAT_CareerReadinessCom. Note that your evaluators will be responding as individuals, based on their personal observations, and not as representatives of any company or organization.</p>

                            <p><Link to="/AddEvaluatorPage" id="btnStartVerification" className="btn-calltoactions rightspace btn-start-verification" href="#" >Enter My Evaluators
                            <span><img src="/Reference/Content/PreHire/Images/ico-add-ref.png" alt=""></img>
                            </span></Link>
                            
                            <Link to="/Instruction" id="btnOptOut" target="_blank">Not Interested</Link>
                         </p>
                
                </div>
            </div>
        );
    }
}

export default InstructionBody