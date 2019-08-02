import React from 'react';
import EvaluatorHeader from '../../EvaluatorHeader/EvaluatorHeader';
import EvaluatorInformationText from '../../EvaluatorInformationText/EvaluatorInformationText';
import ContactDetails from './ContactDetails/ContactDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

let selected = 0;
//extends React.Component{
class Verification extends React.Component//= (props) => {
{
    
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            id: this.props.location.search.substring(4, this.props.location.search.length),
            //selected: 0
        }
    }

   
    //alert(props.location.search.substring(4,props.location.search.length));
    componentDidMount() {
        $.ajax({
            url: 'http://localhost:56345/api/Candidate/' + this.props.location.search.substring(4, this.props.location.search.length),
            //data: props.location.search.substring(4,props.location.search.length),
            //dataType: 'jsonp',

            success: function (response) {
                //alert('success' + JSON.stringify(response));
                console.log(response);
                //$("#veteran").val(response.veteran);
                console.log('veteran response '+ response.isVeteran);
                let veteran = response.isVeteran ? "false": "true";
                $("#date").val(response.feedbackDueDate);
                $("#FirstName").val(response.firstName);
                $("#LastName").val(response.lastName);
                $("#Email").val(response.email);
                $("#year select").val(response.fieldYear);
                $("#year").value = response.fieldYear;
                $('input[id="veteran"][value="' + response.isVeteran + '"]').checked = true;    
                selected = response.fieldYear;
                
                console.log('Selected ' + selected);
            },
            fail: function (response) {

                //  alert('fail' + JSON.stringify(response));
            },
            error: function (response) {
                alert('error' + JSON.stringify(response));
            }
        })

    }
    render() {
        return (
            <div>
                <EvaluatorHeader> </EvaluatorHeader>
                {/* <EvaluatorInformationText /> */}
                {console.log('verification' + JSON.stringify(this.props))}
                {console.log('verification param' + JSON.stringify(this.props.location.search.substring(4, this.props.location.search.length)))}
                <ContactDetails data = {this.state.id} selected = {selected}></ContactDetails>
                <input type="hidden" id="hdnCandidateId" value = {this.state.id} ></input>

               
            </div>
        )
    }

   
};

export default Verification;