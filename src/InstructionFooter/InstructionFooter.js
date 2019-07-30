import React from 'react'
import './InstructionFooter.css'

class InstructionFooter extends React.Component
{
    render(){
        return(
            <div className="container-footer">
                <footer className="rounded mt-4 p-2 p-sm-3">
                    <div className="footer clearfix">
                        <div className="align-left">
                            <ul className="list-styling">
                                    <li className="display-inline">
                                        <a href="http://www.skillsurvey.com/privacy-policy/" target="_blank">Privacy Policy</a>
                                    </li>
                                    <span>|</span>
                                    <li className="display-inline">
                                        <a href="/Reference/Candidate/CustomerSupport/?candidateId=PQeuO3ckD3HbEf639g4A5g%253d%253d" target="_blank">Contact Us</a>
                                    </li>
                            </ul>
                        </div>
                        <div className="align-right">© 2019 SkillSurvey, Inc. All Rights Reserved. </div>
                    </div>
                </footer>
           </div>
        );
    }
}

export default InstructionFooter
