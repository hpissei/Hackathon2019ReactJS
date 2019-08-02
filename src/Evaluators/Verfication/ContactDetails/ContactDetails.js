import React from 'react';
import './ContactDetails.css';
import {Link } from 'react-router-dom';//routing
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';
//import EvaluatorIndex from '../../EvaluatorsIndex/EvaluatorIndex';// './EvaluatorIndex/EvaluatorIndex';// ./Evaluators/EvaluatorsIndex/EvaluatorIndex';


class ContactDetails extends React.Component{//= () => {

    constructor(data) {
        super(data);
        this.state = {
            redirect: false,
            //id : this.props.data
        }
        alert(this.props.data.selected)
    }

    // to check why this function is not working 
    setRedirect = () => {
        this.setState({
          redirect: true
        })
        
      }

      renderRedirect = () => {
        //if (this.redirect) {
          return <Redirect to='/EvaluatorIndex' />
        //}
      }

    post(props){
        console.log('Contact details' + props);
        fetch("http://localhost:56345/api/Candidate/AddCandidateDetails",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({  FirstName : $("#FirstName").val(),
                LastName : $("#LastName").val(),
                Email : $("#Email").val(),
                FeedbackDueDate: $("#date").val(),
                IsVeteran : $("input[id='veteran']:checked").val(),
                FieldYear : $("#year").val(),
                CandidateId: $("#hdnCandidateId").val()})
            })
            .then(function (res) { console.log(res)
                //this.redirectionFlag = true;
                window.location='/EvaluatorIndex';
                //this.renderRedirect();
            })
            .catch(function (res) { console.log(res) })

       

        alert('Posting...........');
        // $.ajax({
        //     url: 'http://localhost:56345/api/Candidate/AddCandidateDetails',
        //     type: 'POST',
        //     contentType: 'application/json', //'application/text'
        //     data: {
        //         FirstName : $("#FirstName").val(),
        //         LastName : $("#LastName").val(),
        //         Email : $("#Email").val(),
        //         FeedbackDueDate: $("#date").val(),
        //         IsVeteran : $("input[id='veteran']:checked").val(),
        //         FieldYear : $("#year").val()
        //     },
        //     success: function(response){
        //         console.log('response add' + response);
        //     },
        //     error: function(response)
        //     {
        //         console.log('response err' + response);
        //     }

        // })
    }

    render(){
    return (
        
        <div className="panel-wrapper">
            <div className="icons-group-horize panel-header panel-header-orng-hdrbg clearfix">
                <h2 className="verification-header">My Information</h2>
                <span className="float-right"><b className="text-danger">*</b> indicates required field</span>
            </div>
            <div className="form-wrapper" id="candidateForm">
                <h2 className="tab-sub-header clearfix ">
                    Contact Details
                </h2>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="form-group">
                            <label className="left-text">First Name: <span className="req-star">*</span>
                                <input aria-required="True" className="form-control" data-val="true" data-val-length="First name is too short" data-val-length-max="35" data-val-length-min="1" data-val-regex="Please enter valid first name" data-val-regex-pattern="^([a-zA-Z &amp;.',/!()-]+)$" data-val-required="Please enter first name" id="FirstName" name="FirstName" type="text" />
                            </label>
                            <span className="field-validation-valid" data-valmsg-for="FirstName" data-valmsg-replace="true" id="spErrFirstName"></span>
                            <div className="clear"></div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="form-group">
                            <label className="left-text">Last Name: <span className="req-star">*</span>
                                <input aria-required="True" className="form-control" data-val="true" data-val-length="Last name is too short" data-val-length-max="35" data-val-length-min="2" data-val-regex="Please enter valid last name" data-val-regex-pattern="^([a-zA-Z &amp;.',/!()-]+)$" data-val-required="Please enter last name" id="LastName" name="LastName" type="text" />
                            
                            </label>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="form-group">
                            <label className="left-text">Email:<span id="spn_EmailRequire" className="req-star" >*</span>
                            <input aria-required="True" className="form-control" data-val="true" data-val-regex="Please enter valid email address" data-val-regex-pattern="^\s*(([A-Za-z0-9]+_.+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\'+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++)|([A-Za-z0-9]+[/&amp;*=?^{}~]))*(([A-Za-z0-9+_.!+])|([A-Za-z0-9]+\-+))+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z\-]{2,24}\s*$" id="Email" name="Email" type="text" required="required" />
                            
                            </label>
                            <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" id="spErrEmail"></span>
                            <div className="clear"></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="additional-fields form-wrapper">
                <h2 className="tab-sub-header clearfix">Additional Information</h2>
                <div className="row">
                    <div className="col-12">
                        <h4>About your current status:</h4>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="form-group">
                            <label id="labelProfile_0" >
                                Feedback Due Date:
                            </label>
                            <div id="dvDateSelector">
                                <input className="form-control customizedDateField smalltxt valid" data-field-type-id="3" data-standard-fields="1" data-visibility-id="2" id="date" name="CandidateAdditionalFields[0].ResponseValue" readOnly="readonly" type="text" defaultValue="07/29/2019" />
                                    <span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[0].AdditionalFieldLabel" data-valmsg-replace="true"></span>
                                    <div><span id="ErrorSpan_0" className="error-msg"></span></div>
                            </div>
                            </div>
                        </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="form-group">
                            <label id="labelProfile_1" >
                                Year:
                      <span className="req-star">*</span>
                            </label>
                            <select className="form-control custom-select" data-error-required="Please select year" data-field-type-id="2" data-standard-fields="2" data-visibility-id="3" id="year" name="CandidateAdditionalFields[1].ResponseValue"><option value="0">Select</option>
                                <option value="1">Freshman</option>
                                <option value="2">Sophomore</option>
                                <option value="3">Junior</option>
                                <option value="4">Senior</option>
                            </select><span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[1].AdditionalFieldLabel" data-valmsg-replace="true"></span>                      <div><span id="ErrorSpan_1" className="error-msg"></span></div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="form-group">
                            <label className="form-group-label" >
                                Are you a veteran?:
                      <span className="req-star">*</span>
                            </label>
                            <div className="custom-control-inline">
                                <input  data-error-required="Please select are you a veteran?" data-field-type-id="4" data-standard-fields="3" data-visibility-id="3" id="veteran" name="CandidateAdditionalFields[2].ResponseValue"  type="radio" defaultValue="false" />
                                    <span>Yes</span>
                      </div>
                                <div className="custom-control-inline">
                                    <input data-error-required="Please select are you a veteran?" data-field-type-id="4" data-standard-fields="3" data-visibility-id="3" id="veteran" name="CandidateAdditionalFields[2].ResponseValue"  type="radio" defaultValue="true" />
                                        <span>No</span>
                      </div>
                                    <span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[2].AdditionalFieldLabel" data-valmsg-replace="true" id="spErrCandidateAdditionalFields_0__Value"></span>                    <div><span id="ErrorSpan_2" className="error-msg"></span></div>
                                </div>
                            </div>




                </div>  
            </div>     
            <div className="form-action">
                <div className="row">
                    <div className="col-lg-4">
                        &nbsp;
                    </div>
                    <div className="col-lg-4">
                        &nbsp;
                    </div>
                    <div className="col-lg-4 text-right">
                        {/* <Link to="/EvaluatorIndex"> */}
                            <input className="icons-group-horize btn-blue" id="btnContinue" name="btnSubmit" type="submit" defaultValue="Continue" onClick={this.post} />
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
    }
};

export default ContactDetails;