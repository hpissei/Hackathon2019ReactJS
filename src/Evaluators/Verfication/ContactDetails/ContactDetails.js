import React from 'react';


const ContactDetails = () => {
    return (
        <div className="panel-wrapper">
            <div className="icons-group-horize panel-header panel-header-orng-hdrbg clearfix">
                <h2>My Information</h2>
                <span className="float-right"><b className="text-danger">*</b> indicates required field</span>
            </div>
            <div className="form-wrapper" id="candidateForm">
                <h2 className="tab-sub-header clearfix ">
                    Contact Details
                </h2>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="form-group">
                            <label for="FirstName" className="left-text">First Name: <span className="req-star">*</span></label>
                            <input aria-required="True" className="form-control" data-val="true" data-val-length="First name is too short" data-val-length-max="35" data-val-length-min="1" data-val-regex="Please enter valid first name" data-val-regex-pattern="^([a-zA-Z &amp;.',/!()-]+)$" data-val-required="Please enter first name" id="FirstName" maxlength="35" name="FirstName" type="text" value="poc">
                                <span className="field-validation-valid" data-valmsg-for="FirstName" data-valmsg-replace="true" id="spErrFirstName"></span>
                                <div className="clear"></div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="form-group">
                                <label for="LastName" className="left-text">Last Name: <span className="req-star">*</span></label>
                                <input aria-required="True" className="form-control" data-val="true" data-val-length="Last name is too short" data-val-length-max="35" data-val-length-min="2" data-val-regex="Please enter valid last name" data-val-regex-pattern="^([a-zA-Z &amp;.',/!()-]+)$" data-val-required="Please enter last name" id="LastName" maxlength="35" name="LastName" type="text" value="Candidate">
                                    <span className="field-validation-valid" data-valmsg-for="LastName" data-valmsg-replace="true" id="spErrLastName"></span>
                                    <div className="clear"></div>
                        </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="form-group">
                                    <label for="Email" className="left-text">Email:<span id="spn_EmailRequire" className="req-star" style="">*</span></label>
                                    <input aria-required="True" className="form-control" data-val="true" data-val-regex="Please enter valid email address" data-val-regex-pattern="^\s*(([A-Za-z0-9]+_.+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\'+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++)|([A-Za-z0-9]+[/&amp;*=?^{}~]))*(([A-Za-z0-9+_.!+])|([A-Za-z0-9]+\-+))+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z\-]{2,24}\s*$" id="Email" maxlength="64" name="Email" onfocusout="javascript:checkContactChanged()" type="text" value="poccandidate@skillsurvey.email" required="required">
                                        <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" id="spErrEmail"></span>
                                        <span className="email-error-text" id="spanCheckEmail" style="display : none;width:300px;">The student's email address cannot be the same as the recruiter's email address.</span>
                                        <span className="email-error-text" id="spanCheckRefEmail" style="display : none;width:300px;">Your email cannot be the same as your evaluator's email.</span>
                                        <div className="clear"></div>
                        </div>
                                    <div className="form-group" id="invalidemail" style="display: none">
                                        <div className="form-group">
                                            <span className="req-star">An error has been occured.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <script src="/Reference/bundle/PreHire/CandidateAdditionalFields?v=FgBK9EOWsu_eleGVepLtvnF4gorOoAyYwFXLtbOJBd81"></script>

                        <link href="/Reference/Bundle/VerificationNewUICss?v=_B_E8_DecBrfV7aEmXmnUCp6FtLufVn7ObSdscrd6M81" rel="stylesheet">

                            <script type="text/javascript">

                                function showOthersTextBox(id) {
    var fieldId = 'CandidateAdditionalFields_' + id + '__ResponseValue';
                                var responseText = 'CandidateAdditionalFields_' + id + '__ResponseText';
                            
    if ($("#" + fieldId).val() === "226" || $("#" + fieldId).val() === "44") {      //226: Type of work experience, Option 44: Work related Industry option
                                    $("#otherOption_" + id).show();
                                $("#" + responseText).val("");
                              }
    else {
                                    $("#otherOption_" + id).hide();
                                $('#' + responseText).removeclassName('input-validation-error');
                                $('#' + responseText).css('border', '1px solid #ccc');
                                $('#ErrorSpanOther_' + id).html("");
                              }
                            }
</script>
                            <div className="additional-fields form-wrapper">
                                <h2 className="tab-sub-header clearfix">Additional Information</h2>
                                <div className="row">
                                    <div className="col-12">
                                        <h4>About your current status:</h4>
                                    </div>
                                    <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_0__AdditionalFieldId" name="CandidateAdditionalFields[0].AdditionalFieldId" type="hidden" value="1">            <div className="col-md-6 col-lg-4">
                                        <div className="form-group">
                                            <label id="labelProfile_0" for="CandidateAdditionalFields_0__ResponseValue">
                                                Feedback Due Date:
                  </label>
                                            <div id="dvDateSelector">
                                                <input className="form-control customizedDateField smalltxt" data-field-type-id="3" data-standard-fields="1" data-visibility-id="2" id="CandidateAdditionalFields_0__ResponseValue" name="CandidateAdditionalFields[0].ResponseValue" readonly="readonly" type="text" value="07/29/2019">
                                                    <span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[0].AdditionalFieldLabel" data-valmsg-replace="true"></span>
                                                    <div><span id="ErrorSpan_0" className="error-msg"></span></div>
                    </div>
                                            </div>
                                        </div>
                                        <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_1__AdditionalFieldId" name="CandidateAdditionalFields[1].AdditionalFieldId" type="hidden" value="2">            <div className="col-md-6 col-lg-4">
                                            <div className="form-group">
                                                <label id="labelProfile_1" for="CandidateAdditionalFields_1__ResponseValue">
                                                    Year:
                      <span className="req-star">*</span>
                                                </label>
                                                <select className="form-control custom-select" data-error-required="Please select year" data-field-type-id="2" data-standard-fields="2" data-visibility-id="3" id="CandidateAdditionalFields_1__ResponseValue" name="CandidateAdditionalFields[1].ResponseValue" onchange="validateFormat(1)"><option value="">Select</option>
                                                    <option value="1">Freshman</option>
                                                    <option selected="selected" value="2">Sophomore</option>
                                                    <option value="3">Junior</option>
                                                    <option value="4">Senior</option>
                                                </select><span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[1].AdditionalFieldLabel" data-valmsg-replace="true"></span>                      <div><span id="ErrorSpan_1" className="error-msg"></span></div>
                                            </div>
                                        </div>
                                            <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_2__AdditionalFieldId" name="CandidateAdditionalFields[2].AdditionalFieldId" type="hidden" value="3">            <div className="col-md-6 col-lg-4">
                                                <div className="form-group">
                                                    <label className="form-group-label" for="CandidateAdditionalFields_2__ResponseValue">
                                                        Are you a veteran?:
                      <span className="req-star">*</span>
                                                    </label>
                                                    <div className="custom-control-inline">
                                                        <input checked="checked" data-error-required="Please select are you a veteran?" data-field-type-id="4" data-standard-fields="3" data-visibility-id="3" id="CandidateAdditionalFields_2__ResponseValue" name="CandidateAdditionalFields[2].ResponseValue" onclick="validateRadioFields(2)" type="radio" value="5">
                                                            <span>Yes</span>
                      </div>
                                                        <div className="custom-control-inline">
                                                            <input data-error-required="Please select are you a veteran?" data-field-type-id="4" data-standard-fields="3" data-visibility-id="3" id="CandidateAdditionalFields_2__ResponseValue" name="CandidateAdditionalFields[2].ResponseValue" onclick="validateRadioFields(2)" type="radio" value="6">
                                                                <span>No</span>
                      </div>
                                                            <span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[2].AdditionalFieldLabel" data-valmsg-replace="true" id="spErrCandidateAdditionalFields_0__Value"></span>                    <div><span id="ErrorSpan_2" className="error-msg"></span></div>
                                                        </div>
                                                    </div>
                                                    <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_3__AdditionalFieldId" name="CandidateAdditionalFields[3].AdditionalFieldId" type="hidden" value="4">            <div className="col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="form-group-label" for="CandidateAdditionalFields_3__ResponseValue">
                                                                Are you the first generation in your family to attend college?:
                      <span className="req-star">*</span>
                                                            </label>
                                                            <div className="custom-control-inline">
                                                                <input checked="checked" data-error-required="Please select are you the first generation in your family to attend college?" data-field-type-id="4" data-standard-fields="4" data-visibility-id="3" id="CandidateAdditionalFields_3__ResponseValue" name="CandidateAdditionalFields[3].ResponseValue" onclick="validateRadioFields(3)" type="radio" value="7">
                                                                    <span>Yes</span>
                      </div>
                                                                <div className="custom-control-inline">
                                                                    <input data-error-required="Please select are you the first generation in your family to attend college?" data-field-type-id="4" data-standard-fields="4" data-visibility-id="3" id="CandidateAdditionalFields_3__ResponseValue" name="CandidateAdditionalFields[3].ResponseValue" onclick="validateRadioFields(3)" type="radio" value="8">
                                                                        <span>No</span>
                      </div>
                                                                    <span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[3].AdditionalFieldLabel" data-valmsg-replace="true" id="spErrCandidateAdditionalFields_0__Value"></span>                    <div><span id="ErrorSpan_3" className="error-msg"></span></div>
                                                                </div>
                                                            </div>
                                                            <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_4__AdditionalFieldId" name="CandidateAdditionalFields[4].AdditionalFieldId" type="hidden" value="5">            <div className="col-md-6 col-lg-4">
                                                                <div className="form-group">
                                                                    <label id="labelProfile_4" for="CandidateAdditionalFields_4__ResponseValue">
                                                                        Major:
                      <span className="req-star">*</span>
                                                                    </label>
                                                                    <select className="form-control custom-select" data-error-required="Please select major" data-field-type-id="2" data-standard-fields="5" data-visibility-id="3" id="CandidateAdditionalFields_4__ResponseValue" name="CandidateAdditionalFields[4].ResponseValue" onchange="validateFormat(4)"><option value="">Select</option>
                                                                        <option value="51">Accounting</option>
                                                                        <option value="52">Actuarial/Risk Analysis</option>
                                                                        <option value="53">Advertising</option>
                                                                        <option selected="selected" value="54">Aerospace Engineering</option>
                                                                        <option value="55">Agricultural Production Operations</option>
                                                                        <option value="56">Agriculture</option>
                                                                        <option value="57">Agriculture &amp; Biological Engineering</option>
                                                                        <option value="58">Agriculture Business</option>
                                                                        <option value="59">Agriculture Education</option>
                                                                        <option value="60">Agriculture Public Services </option>
                                                                        <option value="61">Agronomy </option>
                                                                        <option value="62">American Sign Language </option>
                                                                        <option value="63">Animal Science </option>
                                                                        <option value="64">Anthropology </option>
                                                                        <option value="65">Architecture </option>
                                                                        <option value="66">Art History </option>
                                                                        <option value="67">Astronomy/Space Exploration </option>
                                                                        <option value="68">Athletic Training </option>
                                                                        <option value="69">Automation Engineering </option>
                                                                        <option value="70">Automotive Engineering </option>
                                                                        <option value="71">Aviation </option>
                                                                        <option value="72">Biochemistry </option>
                                                                        <option value="73">Biology </option>
                                                                        <option value="74">Biomedical Engineering </option>
                                                                        <option value="75">Biotechnology </option>
                                                                        <option value="76">Botany/Plant Biology </option>
                                                                        <option value="77">Business Administration &amp; Management </option>
                                                                        <option value="78">Business Analytics </option>
                                                                        <option value="79">Cartography </option>
                                                                        <option value="80">Cell Biology </option>
                                                                        <option value="81">Chemical Engineering </option>
                                                                        <option value="82">Chemistry </option>
                                                                        <option value="83">City, Urban, Regional Planning </option>
                                                                        <option value="84">Civil/Environmental Engineering </option>
                                                                        <option value="85">classNameical Studies </option>
                                                                        <option value="86">Cognition &amp; Neuroscience/Biopsychology </option>
                                                                        <option value="87">Communication &amp; Media Studies </option>
                                                                        <option value="88">Communication Disorders Sciences &amp; Services </option>
                                                                        <option value="89">Comparative Literature </option>
                                                                        <option value="90">Computer Engineering </option>
                                                                        <option value="91">Computer Programming </option>
                                                                        <option value="92">Computer Science </option>
                                                                        <option value="93">Computer Systems Networking &amp; Telecommunications </option>
                                                                        <option value="94">Conservation </option>
                                                                        <option value="95">Construction Engineering </option>
                                                                        <option value="96">Construction Management </option>
                                                                        <option value="97">Consulting </option>
                                                                        <option value="98">Counseling </option>
                                                                        <option value="99">Creative Writing </option>
                                                                        <option value="100">Criminal Justice/Criminology </option>
                                                                        <option value="101">Culinary Arts </option>
                                                                        <option value="102">Cultural &amp; Ethnic Studies </option>
                                                                        <option value="103">Cyber Security </option>
                                                                        <option value="104">Data Mining </option>
                                                                        <option value="105">Data Science </option>
                                                                        <option value="106">Dentistry </option>
                                                                        <option value="107">Design &amp; Applied Arts </option>
                                                                        <option value="108">Dietetics </option>
                                                                        <option value="109">Digital Communication </option>
                                                                        <option value="110">Documentary/Film </option>
                                                                        <option value="111">Drama &amp; Theatre Arts </option>
                                                                        <option value="112">Early Childhood Education </option>
                                                                        <option value="113">Earth Sciences </option>
                                                                        <option value="114">Ecology </option>
                                                                        <option value="115">Economics </option>
                                                                        <option value="116">Education Administration </option>
                                                                        <option value="117">Electrical Engineering </option>
                                                                        <option value="118">Elementary Education </option>
                                                                        <option value="119">Emergency Management/Homeland Security </option>
                                                                        <option value="120">Energy Engineering </option>
                                                                        <option value="121">English </option>
                                                                        <option value="122">Entrepreneurship </option>
                                                                        <option value="123">Environmental Management &amp; Sciences </option>
                                                                        <option value="124">Epidemiology </option>
                                                                        <option value="125">Family &amp; Consumer Science </option>
                                                                        <option value="126">Finance &amp; Financial Management </option>
                                                                        <option value="127">Fine &amp; Studio Arts </option>
                                                                        <option value="128">Fisheries &amp; Wildlife </option>
                                                                        <option value="129">Food Industry Management </option>
                                                                        <option value="130">Food Science </option>
                                                                        <option value="131">Foreign Languages &amp; Literature </option>
                                                                        <option value="132">Forensics </option>
                                                                        <option value="133">Forestry </option>
                                                                        <option value="134">Gender Studies </option>
                                                                        <option value="135">General Engineering </option>
                                                                        <option value="136">General Studies </option>
                                                                        <option value="137">Genetics </option>
                                                                        <option value="138">Geography </option>
                                                                        <option value="139">Geology/Mining </option>
                                                                        <option value="140">Graphic Design </option>
                                                                        <option value="141">Health &amp; Physical Education </option>
                                                                        <option value="142">Health/Exercise Science </option>
                                                                        <option value="143">Health/Hospital Administration </option>
                                                                        <option value="144">Healthcare Technology </option>
                                                                        <option value="145">Higher Education </option>
                                                                        <option value="146">History </option>
                                                                        <option value="147">Human &amp; Child Development </option>
                                                                        <option value="148">Human Resources </option>
                                                                        <option value="149">Immunology </option>
                                                                        <option value="150">Individual Studies </option>
                                                                        <option value="151">Industrial Design </option>
                                                                        <option value="152">Industrial Engineering </option>
                                                                        <option value="153">Information Systems Management </option>
                                                                        <option value="154">Insurance </option>
                                                                        <option value="155">Interior Design </option>
                                                                        <option value="156">International Business </option>
                                                                        <option value="157">International Studies/Comparative Politics </option>
                                                                        <option value="158">Journalism </option>
                                                                        <option value="159">Kinesiology </option>
                                                                        <option value="160">Landscape &amp; Nursery </option>
                                                                        <option value="161">Landscape Architecture </option>
                                                                        <option value="162">Language Arts Education </option>
                                                                        <option value="163">Law </option>
                                                                        <option value="164">Library Sciences </option>
                                                                        <option value="165">Linguistics </option>
                                                                        <option value="166">Management Science </option>
                                                                        <option value="167">Marine Biology </option>
                                                                        <option value="168">Marketing </option>
                                                                        <option value="169">Materials Science &amp; Engineering </option>
                                                                        <option value="170">Mathematics </option>
                                                                        <option value="171">Mathematics Education </option>
                                                                        <option value="172">Mechanical Engineering </option>
                                                                        <option value="173">Medicine </option>
                                                                        <option value="174">Microbiology </option>
                                                                        <option value="175">Molecular Biology </option>
                                                                        <option value="176">Movement Science </option>
                                                                        <option value="177">Museum Studies </option>
                                                                        <option value="178">Music &amp; Music Education </option>
                                                                        <option value="179">Natural Resource Management </option>
                                                                        <option value="180">Nautical/Naval Engineering </option>
                                                                        <option value="181">Network Engineering </option>
                                                                        <option value="182">Non Profit Management </option>
                                                                        <option value="183">Nuclear Engineering </option>
                                                                        <option value="184">Nursing </option>
                                                                        <option value="185">Nutrition </option>
                                                                        <option value="186">Oceanography </option>
                                                                        <option value="187">Operations Management </option>
                                                                        <option value="188">Packaging Engineering </option>
                                                                        <option value="189">Parks, Recreation &amp; Leisure Studies </option>
                                                                        <option value="190">Pharmacy </option>
                                                                        <option value="191">Philosophy/Ethics </option>
                                                                        <option value="192">Photography </option>
                                                                        <option value="193">Physical/Occupational Therapy </option>
                                                                        <option value="194">Physics </option>
                                                                        <option value="195">Physiological Science </option>
                                                                        <option value="196">Plant Sciences/Horticulture </option>
                                                                        <option value="197">Political Science &amp; Government </option>
                                                                        <option value="198">Product Design/Packaging </option>
                                                                        <option value="199">Psychology </option>
                                                                        <option value="200">Public Administration </option>
                                                                        <option value="201">Public Health </option>
                                                                        <option value="202">Public Policy </option>
                                                                        <option value="203">Public Relations </option>
                                                                        <option value="204">Radio, Television, Media </option>
                                                                        <option value="205">Real Estate </option>
                                                                        <option value="206">Religious Studies/Divinity/Theology </option>
                                                                        <option value="207">Retail &amp; Hospitality Administration </option>
                                                                        <option value="208">Sales </option>
                                                                        <option value="209">Secondary Education </option>
                                                                        <option value="210">Social Work/Human Services </option>
                                                                        <option value="211">Sociology </option>
                                                                        <option value="212">Software Design </option>
                                                                        <option value="213">Soil Science </option>
                                                                        <option value="214">Special Education </option>
                                                                        <option value="215">Speech Pathology </option>
                                                                        <option value="216">Sport Business &amp; Marketing </option>
                                                                        <option value="217">Statistics </option>
                                                                        <option value="218">Supply Chain Management </option>
                                                                        <option value="219">Textiles &amp; Clothing </option>
                                                                        <option value="220">Undeclared </option>
                                                                        <option value="221">Urban Planning </option>
                                                                        <option value="222">User Experience/Social Computing </option>
                                                                        <option value="223">Veterinary Sciences </option>
                                                                        <option value="224">Visual &amp; Performing Arts </option>
                                                                        <option value="225">Zoology </option>
                                                                    </select><span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[4].AdditionalFieldLabel" data-valmsg-replace="true"></span>                      <div><span id="ErrorSpan_4" className="error-msg"></span></div>
                                                                </div>
                                                            </div>
                                                                <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_5__AdditionalFieldId" name="CandidateAdditionalFields[5].AdditionalFieldId" type="hidden" value="6">            <div className="col-md-6 col-lg-4">
                                                                    <div className="form-group">
                                                                        <label id="labelProfile_5" for="CandidateAdditionalFields_5__ResponseValue">
                                                                            What degree are you ultimately pursuing?:
                      <span className="req-star">*</span>
                                                                        </label>
                                                                        <select className="form-control custom-select" data-error-required="Please select what degree are you ultimately pursuing?" data-field-type-id="2" data-standard-fields="6" data-visibility-id="3" id="CandidateAdditionalFields_5__ResponseValue" name="CandidateAdditionalFields[5].ResponseValue" onchange="validateFormat(5)"><option value="">Select</option>
                                                                            <option selected="selected" value="9">Associate's</option>
                                                                            <option value="10">Bachelor's</option>
                                                                            <option value="11">Advanced Degree (e.g., Master's, Doctorate)</option>
                                                                        </select><span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[5].AdditionalFieldLabel" data-valmsg-replace="true"></span>                      <div><span id="ErrorSpan_5" className="error-msg"></span></div>
                                                                    </div>
                                                                </div>
                                                                    <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_6__AdditionalFieldId" name="CandidateAdditionalFields[6].AdditionalFieldId" type="hidden" value="7">            <div className="col-md-6 col-lg-4">
                                                                        <div className="form-group">
                                                                            <label id="labelProfile_6" for="CandidateAdditionalFields_6__ResponseValue">
                                                                                What is your overall GPA? (i.e. - 3.33):
                      <span className="req-star">*</span>
                                                                            </label>
                                                                            <input className="form-control" data-error-format="Please enter a number up to 2 decimal points" data-error-required="Please enter what is your overall gpa? (i.e. - 3.33)" data-field-type-id="1" data-standard-fields="7" data-visibility-id="3" id="CandidateAdditionalFields_6__ResponseValue" name="CandidateAdditionalFields[6].ResponseValue" oninput="validateGPA(6)" type="text" value="2.12"><span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[6].AdditionalFieldLabel" data-valmsg-replace="true"></span>                    <div><span id="ErrorSpan_6" className="error-msg"></span></div>
              </div>
                                                                        </div>
                                                                    </div>
                                                                        <!--2nd row-->
      <div className="row">
                                                                            <div className="col-12">
                                                                                <h4>About this most recent work experience in which you are being evaluated:</h4>
                                                                            </div>
                                                                            <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_7__AdditionalFieldId" name="CandidateAdditionalFields[7].AdditionalFieldId" type="hidden" value="8">            <div className="col-md-6 col-lg-4">
                                                                                <div className="form-group">
                                                                                    <label id="labelProfile_7" for="CandidateAdditionalFields_7__ResponseValue">
                                                                                        Current Work Experience Type:
                      <span className="req-star">*</span>
                                                                                    </label>
                                                                                    <select className="form-control custom-select" data-error-required="Please select current work experience type" data-field-type-id="2" data-standard-fields="8" data-visibility-id="3" id="CandidateAdditionalFields_7__ResponseValue" name="CandidateAdditionalFields[7].ResponseValue" onchange="showOthersTextBox(7) ; validateFormat(7)"><option value="">Select</option>
                                                                                        <option selected="selected" value="12">Internship/Co-op</option>
                                                                                        <option value="13">Off-Campus/Not an Internship</option>
                                                                                        <option value="14">On Campus/Not Work-Study</option>
                                                                                        <option value="15">Work-Study</option>
                                                                                        <option value="16">ROTC or Other Military</option>
                                                                                        <option value="226">Other (please specify)</option>
                                                                                    </select><span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[7].AdditionalFieldLabel" data-valmsg-replace="true"></span>                      <div><span id="ErrorSpan_7" className="error-msg"></span></div>
                                                                                    <label for="CandidateAdditionalFields_7__ResponseText" style="display:none;">Blank Text</label>
                                                                                    <div id="otherOption_7" style="display:none; margin-top:5px">
                                                                                        <input className="form-control" data-error-required="Please select current work experience type" data-field-type-id="2" data-standard-fields="8" data-visibility-id="3" id="CandidateAdditionalFields_7__ResponseText" maxlength="100" name="CandidateAdditionalFields[7].ResponseText" oninput="validateResponseText(7)" type="text" value="">
                                                                                            <span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[7].AdditionalFieldLabel" data-valmsg-replace="true"></span>
                                                                                            <div><span id="ErrorSpanOther_7" className="error-msg"></span></div>
                      </div>
                                                                                    </div>
                                                                                </div>
                                                                                <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_8__AdditionalFieldId" name="CandidateAdditionalFields[8].AdditionalFieldId" type="hidden" value="9">            <div className="col-md-6 col-lg-4">
                                                                                    <div className="form-group">
                                                                                        <label id="labelProfile_8" for="CandidateAdditionalFields_8__ResponseValue">
                                                                                            Current Work Experience Industry:
                      <span className="req-star">*</span>
                                                                                        </label>
                                                                                        <select className="form-control custom-select" data-error-required="Please select current work experience industry" data-field-type-id="2" data-standard-fields="9" data-visibility-id="3" id="CandidateAdditionalFields_8__ResponseValue" name="CandidateAdditionalFields[8].ResponseValue" onchange="showOthersTextBox(8) ; validateFormat(8)"><option value="">Select</option>
                                                                                            <option value="17">Automotive Related</option>
                                                                                            <option selected="selected" value="18">Aviation, Aero or Defense</option>
                                                                                            <option value="19">Banking</option>
                                                                                            <option value="20">Business Services</option>
                                                                                            <option value="21">Chemicals</option>
                                                                                            <option value="22">Consumer Products &amp; Services</option>
                                                                                            <option value="23">Education</option>
                                                                                            <option value="24">Energy &amp; Utilities</option>
                                                                                            <option value="25">Engineering &amp; Construction</option>
                                                                                            <option value="26">Entertainment</option>
                                                                                            <option value="27">Financial Services</option>
                                                                                            <option value="28">Food &amp; Beverage</option>
                                                                                            <option value="29">Government</option>
                                                                                            <option value="30">Healthcare</option>
                                                                                            <option value="31">Hospitality &amp; Travel</option>
                                                                                            <option value="32">Human Resources/Staffing</option>
                                                                                            <option value="33">Insurance</option>
                                                                                            <option value="34">Legal or Risk Services</option>
                                                                                            <option value="35">Manufacturing</option>
                                                                                            <option value="36">Media</option>
                                                                                            <option value="37">Not for Profit</option>
                                                                                            <option value="38">Pharmaceuticals</option>
                                                                                            <option value="39">Real Estate</option>
                                                                                            <option value="40">Retail</option>
                                                                                            <option value="41">Technology</option>
                                                                                            <option value="42">Telecommunications</option>
                                                                                            <option value="43">Transportation &amp; Logistis</option>
                                                                                            <option value="44">Other (please specify)</option>
                                                                                        </select><span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[8].AdditionalFieldLabel" data-valmsg-replace="true"></span>                      <div><span id="ErrorSpan_8" className="error-msg"></span></div>
                                                                                        <label for="CandidateAdditionalFields_8__ResponseText" style="display:none;">Blank Text</label>
                                                                                        <div id="otherOption_8" style="display:none; margin-top:5px">
                                                                                            <input className="form-control" data-error-required="Please select current work experience industry" data-field-type-id="2" data-standard-fields="9" data-visibility-id="3" id="CandidateAdditionalFields_8__ResponseText" maxlength="100" name="CandidateAdditionalFields[8].ResponseText" oninput="validateResponseText(8)" type="text" value="">
                                                                                                <span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[8].AdditionalFieldLabel" data-valmsg-replace="true"></span>
                                                                                                <div><span id="ErrorSpanOther_8" className="error-msg"></span></div>
                      </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_9__AdditionalFieldId" name="CandidateAdditionalFields[9].AdditionalFieldId" type="hidden" value="10">            <div className="col-md-6 col-lg-4">
                                                                                        <div className="form-group">
                                                                                            <label className="form-group-label" for="CandidateAdditionalFields_9__ResponseValue">
                                                                                                Was this a paid work experience?:
                      <span className="req-star">*</span>
                                                                                            </label>
                                                                                            <div className="custom-control-inline">
                                                                                                <input checked="checked" data-error-required="Please select was this a paid work experience?" data-field-type-id="4" data-standard-fields="10" data-visibility-id="3" id="CandidateAdditionalFields_9__ResponseValue" name="CandidateAdditionalFields[9].ResponseValue" onclick="validateRadioFields(9)" type="radio" value="45">
                                                                                                    <span>Yes</span>
                      </div>
                                                                                                <div className="custom-control-inline">
                                                                                                    <input data-error-required="Please select was this a paid work experience?" data-field-type-id="4" data-standard-fields="10" data-visibility-id="3" id="CandidateAdditionalFields_9__ResponseValue" name="CandidateAdditionalFields[9].ResponseValue" onclick="validateRadioFields(9)" type="radio" value="46">
                                                                                                        <span>No</span>
                      </div>
                                                                                                    <span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[9].AdditionalFieldLabel" data-valmsg-replace="true" id="spErrCandidateAdditionalFields_0__Value"></span>                    <div><span id="ErrorSpan_9" className="error-msg"></span></div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_10__AdditionalFieldId" name="CandidateAdditionalFields[10].AdditionalFieldId" type="hidden" value="11">            <div className="col-md-6 col-lg-4">
                                                                                                <div className="form-group">
                                                                                                    <label className="form-group-label" for="CandidateAdditionalFields_10__ResponseValue">
                                                                                                        Do you receive course credit or a grade for this work experience?:
                      <span className="req-star">*</span>
                                                                                                    </label>
                                                                                                    <div className="custom-control-inline">
                                                                                                        <input checked="checked" data-error-required="Please select do you receive course credit or a grade for this work experience?" data-field-type-id="4" data-standard-fields="11" data-visibility-id="3" id="CandidateAdditionalFields_10__ResponseValue" name="CandidateAdditionalFields[10].ResponseValue" onclick="validateRadioFields(10)" type="radio" value="47">
                                                                                                            <span>Yes</span>
                      </div>
                                                                                                        <div className="custom-control-inline">
                                                                                                            <input data-error-required="Please select do you receive course credit or a grade for this work experience?" data-field-type-id="4" data-standard-fields="11" data-visibility-id="3" id="CandidateAdditionalFields_10__ResponseValue" name="CandidateAdditionalFields[10].ResponseValue" onclick="validateRadioFields(10)" type="radio" value="48">
                                                                                                                <span>No</span>
                      </div>
                                                                                                            <span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[10].AdditionalFieldLabel" data-valmsg-replace="true" id="spErrCandidateAdditionalFields_0__Value"></span>                    <div><span id="ErrorSpan_10" className="error-msg"></span></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_11__AdditionalFieldId" name="CandidateAdditionalFields[11].AdditionalFieldId" type="hidden" value="12">          <div className="row">
                                                                                                    <div className="col-md-6 col-lg-4">
                                                                                                        <div className="form-group">
                                                                                                            <label className="form-group-label" for="CandidateAdditionalFields_11__ResponseValue">
                                                                                                                Do you feel this work experience prepared you for a career or future job once you graduate?:
                      <span className="req-star">*</span>
                                                                                                            </label>
                                                                                                            <div className="custom-control-inline">
                                                                                                                <input checked="checked" data-error-required="Please enter do you feel this work experience prepared you for a career or future job once you graduate?" data-field-type-id="4" data-standard-fields="12" data-visibility-id="3" id="CandidateAdditionalFields_11__ResponseValue" name="CandidateAdditionalFields[11].ResponseValue" onclick="validateRadioFields(11)" type="radio" value="49">
                                                                                                                    <span>Yes</span>
                      </div>
                                                                                                                <div className="custom-control-inline">
                                                                                                                    <input data-error-required="Please enter do you feel this work experience prepared you for a career or future job once you graduate?" data-field-type-id="4" data-standard-fields="12" data-visibility-id="3" id="CandidateAdditionalFields_11__ResponseValue" name="CandidateAdditionalFields[11].ResponseValue" onclick="validateRadioFields(11)" type="radio" value="50">
                                                                                                                        <span>No</span>
                      </div>
                                                                                                                    <span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[11].AdditionalFieldLabel" data-valmsg-replace="true" id="spErrCandidateAdditionalFields_0__Value"></span>                    <div><span id="ErrorSpan_11" className="error-msg"></span></div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <input data-val="true" data-val-number="The field AdditionalFieldId must be a number." data-val-required="The AdditionalFieldId field is required." id="CandidateAdditionalFields_12__AdditionalFieldId" name="CandidateAdditionalFields[12].AdditionalFieldId" type="hidden" value="13">          <div className="row">
                                                                                                            <div className="col-md-6">
                                                                                                                <div className="form-group">
                                                                                                                    <label className="form-group-label" for="CandidateAdditionalFields_12__ResponseValue">
                                                                                                                        How did this work experience prepare you or not prepare you for a career or future job once you graduate?:
                      <span className="req-star">*</span>
                                                                                                                    </label>
                                                                                                                    <textarea className="form-control" cols="20" data-error-required="Please enter how did this work experience prepare you or not prepare you for a career or future job once you graduate?" data-field-type-id="1" data-standard-fields="13" data-visibility-id="3" id="CandidateAdditionalFields_12__ResponseValue" maxlength="3000" name="CandidateAdditionalFields[12].ResponseValue" oninput="validateFormat(12)" placeholder="Type your comments here..." rows="2">rgs</textarea><span className="field-validation-valid" data-valmsg-for="CandidateAdditionalFields[12].AdditionalFieldLabel" data-valmsg-replace="true"></span>                    <div><span id="ErrorSpan_12" className="error-msg"></span></div>
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
                                                                                                                    <input className="icons-group-horize btn-blue" id="btnContinue" name="btnSubmit" type="submit" value="Continue" onclick="return validateForm();">
                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        )
};

export default ContactDetails;