import React from 'react';
import './AddEvaluatorPageBody.css'

class AddEvaluatorPageBody extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            SalutationId:"",FirstName:"",LastName:"",Email:"",CountryId:"",City:"",StateId:"",City:"",WorkPhoneAreaCode:"",WorkPhoneExtension : "", 
            WorkPhoneNumber : "", rdRelationshipType : "", RelationshipId : "", StartMonth : "", StartYear: "",EndMonth : "",EndYear: "",JobTitleWithCandidate : "",
            Company : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });  
    }

    handleSubmit()
    {
        alert("Success");
    }
     
    
    handleCancel()
    {
        alert("Cancel")
    }

    // handleSubmit(event)
    // {
    //     $.ajax({
    //         url: process.env.NODE_ENV !== "production" ? '/getMail' : "http://www.fransbernhard.se/magden/php/mailer.php",
    //         type: 'POST',
    //         data: {
    //           'SalutationId': this.state.SalutationId,
    //           'FirstName': this.state.FirstName,
    //           'LastName':this.state.LastName,
    //           'Email':this.state.Email,
    //           'CountryId':this.state.CountryId,
    //           'City':this.state.City,
    //           'WorkPhoneAreaCode':this.state.WorkPhoneAreaCode,
    //           'WorkPhoneExtension':this.state.WorkPhoneExtension,
    //           'WorkPhoneNumber':this.state.WorkPhoneNumber,
    //           'rdRelationshipType':this.state.rdRelationshipType,
    //           'RelationshipId':this.state.RelationshipId,
    //           'StartMonth':this.state.StartMonth,
    //           'EndMonth':this.state.EndMonth,
    //           'StartYear':this.state.StartYear,
    //           'EndYear':this.state.EndYear,
    //           'JobTitleWithCandidate':this.state.JobTitleWithCandidate,
    //           'Company':this.state.Company
    //         },
    //         cache: false,
    //         success: function(data) {
    //           // Success..
    //           this.setState({
    //             type: 'success',
    //             message: 'Evaluator details successfully entered'
    //           });
    //           //console.log('success');
    //         }.bind(this),
    //         // Fail..
    //         error: function(xhr, status, err) {
    //           this.setState({
    //             type: 'success',
    //             message: 'Failed to enter evaluator details'
    //           });
    //           //console.log(message);
    //         }.bind(this)
    //       });
    //     }
    
     render()
     {
        return (
          <div>
            <div className="form-wrapper reference-wrapper clearfix addeditreferences-new-ui container pos-relative" id="panelSeparator">
                <div className="column50 mright20 align-left border-right">
                    

                        <div className="form-row clearfix">
                            <label className="right-text">Salutation: <span className="req-star">*</span></label>
                              <div className="form-right-grid">
                                    <select area-required="True" id="SalutationId" name="SalutationId"  value={this.state.value} onChange={this.handleChange} >
                                    <option value="">Select</option>
                                    <option value="1">Mr.</option>
                                    <option value="2">Ms.</option>
                                    <option value="5">Dr.</option>
                                    <option value="6">Professor</option>
                                    <option value="7">Mrs.</option>
                                    </select>
                              </div>

                        </div>

                        <div className="form-row">
                            <label  className="right-text">First name: <span className="req-star">*</span></label>
                            <div className="form-right-grid pos-relative">
                                <input area-required="True"  id="FirstName" name="FirstName" type="text" value={this.state.FirstName} onChange={this.handleChange}></input>  
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="right-text">Last name: <span className="req-star">*</span></label>
                            <div className="form-right-grid pos-relative">
                                <input area-required="True"  id="LastName" name="LastName" type="text" value={this.state.LastName} onChange={this.handleChange}></input>  
                            </div>
                        </div>

                        
                        <div className="form-row">
                            <label className="right-text">Email: <span className="req-star">*</span></label>
                            <div className="form-right-grid pos-relative">
                                <input area-required="True"  id="Email"  name="Email" type="email" value={this.state.Email} onChange={this.handleChange}></input>  
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-row">
                                <label className="right-text">Country: <span className="req-star">*</span> </label>
                                <div className="form-right-grid pos-relative">
                                    <select data-val="true" id="CountryId" name="CountryId" value={this.state.CountryId} onChange={this.handleChange}>
                                        <option value="1">Afghanistan</option>
                                        <option value="2">Albania</option>
                                        <option value="3">Algeria</option>
                                        <option value="24">Bermuda</option>
                                        <option value="25">Bhutan</option>
                                        <option value="44">China</option>
                                        <option value="81">Germany</option>
                                        <option value="82">Ghana</option>
                                        <option value="99">India</option>
                                        <option value="150">Netherlands</option>
                                        <option value="151">Netherlands Antilles</option>
                                    </select>
                                </div>
                            </div>
                       </div>

                       <div className="form-row country-dependent">
                            <label  className="right-text">City: <span className="req-star">*</span></label>
                            <div className="form-right-grid">
                                <input area-required="True" id="City"  name="City" type="text" value={this.state.City} onChange={this.handleChange} />
                            </div>
                      </div>


                      <div className="form-row country-dependent state-field US-field" id="ddlState">
                            <label  className="right-text">State: <span className="req-star">*</span></label>
                            <div className="form-right-grid">
                                <select area-required="True" data-val="true"  id="StateId" name="StateId" value={this.state.StateId} onChange={this.handleChange}>
                                        <option value="">Select</option>
                                        <option value="2">Alabama</option>
                                        <option value="1">Alaska</option>
                                        <option value="4">Arizona</option>
                                        <option value="3">Arkansas</option>
                                        <option value="5">California</option>
                                        <option value="6">Colorado</option>
                                        <option value="7">Connecticut</option>
                                        <option value="9">Delaware</option>
                                        <option value="8">District of Columbia</option>
                                        <option value="10">Florida</option>
                                        <option value="11">Georgia</option>
                                </select>
                            </div>
                       </div>


                       <div className="form-row country-dependent US-field" id="txtWorkPhone">
                       <label  className="right-text">Work phone: <span className="req-star">*</span></label>
                                <div className="form-right-grid">
                                    <input area-required="True" aria-label="Area Code" className="xsmalltxt"  id="WorkPhoneAreaCode"  name="WorkPhoneAreaCode"   value={this.state.WorkPhoneAreaCode} onChange={this.handleChange}  type="text" />
                                    <input area-required="True" aria-label="First Three Digits" className="xsmalltxt" id="WorkPhoneExtension"  name="WorkPhoneExtension"  value={this.state.WorkPhoneExtension} onChange={this.handleChange}  type="text" />
                                    <input area-required="True" aria-label="Last Four Digits" className="xsmalltxt" id="WorkPhoneNumber"  name="WorkPhoneNumber"   value={this.state.WorkPhoneNumber} onChange={this.handleChange} type="text" />
                                </div>
                        </div>
                </div>

                <div className="column50 align-left">
            
                    <div className="form-row clearfix">
                        <label  className="right-text">Evaluator type: <span className="req-star">*</span></label>
                            <div className="form-right-grid">
                                <input area-required="True" checked="checked" id="rdRelationshipType" name="rdRelationshipType" type="radio" value="0"  checked={this.state.rdRelationshipType === '0'}  onChange={this.handleChange}/> <span>Former</span>
                                <input area-required="True" id="rdRelationshipType" name="rdRelationshipType" type="radio" value="1"  checked={this.state.rdRelationshipType === '1'}  onChange={this.handleChange} /> <span>Current</span>
                            </div>
                    </div>


                    <div className="form-row">
                            <label className="right-text">Evaluator is/was my: <span className="req-star">*</span></label>
                            <div className="form-right-grid pos-relative">
                                <div>
                                    <select area-required="True" id="RelationshipId" name="RelationshipId"  value={this.state.RelationshipId} onChange={this.handleChange}>
                                            <option value="">Select</option>
                                            <option value="50">Manager (Supervisor, Boss)</option>
                                            <option value="51">Teacher (Professor, Instructor)</option>
                                            <option value="52">Coworker</option>
                                            <option value="53">Peer (or Colleague)</option>
                                            <option value="54">Fellow Employee</option>
                                            <option value="55">Subordinate (or Direct Report)</option>
                                            <option value="56">Client (or Customer)</option>
                                   </select>
                                </div>
                             </div>
                     </div>

                     <input id="hdnDateSetting" name="hdnDateSetting" type="hidden" value="2"/>
                     <div className="form-row">
                                <label className="right-text">Worked together from: <span className="req-star">*</span></label>
                                <div className="form-right-grid">
                                    <select area-label="Month" area-required="True" className="datepickerStart" id="StartMonth" name="StartMonth"  value={this.state.StartMonth} onChange={this.handleChange}>
                                        <option value="">Select</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
									</select>								   
                                    <select area-label="Year" area-required="True" className="datepickerEnd" id="StartYear" name="StartYear"  value={this.state.StartYear} onChange={this.handleChange}>
                                            <option value="">Select</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
									</select>
                                </div>
                        </div>

                        <div className="form-row">
                                <span id="spanEndDate"/>
                                <label className="right-text">Worked together to: <span className="req-star">*</span></label>
                                <div className="form-right-grid">
                                    <select area-label="Month" area-required="True" className="datepickerStart" id="EndMonth" name="EndMonth"  value={this.state.EndMonth} onChange={this.handleChange}>
                                        <option value="">Select</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
									</select>								   
                                    <select area-label="Year" area-required="True" className="datepickerEnd" id="EndYear" name="EndYear"  value={this.state.EndYear} onChange={this.handleChange}>
                                            <option value="">Select</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
									</select>
                                </div>
                        </div>

                        <div className="form-row clearfix">
                            <label className="right-text">Evaluator's job title when working with me: <span className="req-star">*</span></label>
                            <div className="form-right-grid">
                                <input area-required="True" id="JobTitleWithCandidate" name="JobTitleWithCandidate" type="text"  value={this.state.JobTitleWithCandidate} onChange={this.handleChange}/>
                            </div>
                     </div>

                     <div className="form-row country-dependent">
                            <label className="right-text">Company name: <span className="req-star">*</span></label>
                            <div className="form-right-grid">
                                <input area-required="True" id="Company"  name="Company" type="text"  value={this.state.Company} onChange={this.handleChange}/>
                            </div>
                    </div>
  
              </div>
          </div>


            <div className="formbtn-row">
            <input type="submit" value="Submit" id="btnsubmit" onClick={this.handleSubmit} className="icons-group-horize btn-blue"/>
            <input type="button" value="Cancel" id="btncancel" onClick={this.handleCancel} className="icons-group-horize btn-gray" />
            </div>
          </div>  
        );
    }
}

export default AddEvaluatorPageBody