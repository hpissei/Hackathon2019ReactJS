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
            selected: 0
        }
    }

   
    componentDidMount = () => {
        alert('verification params' + this.props.match.params.id);
        $.ajax({
            url: 'http://localhost:56345/api/Candidate/' + this.props.match.params.id,//this.props.location.search.substring(4, this.props.location.search.length),
            //data: props.location.search.substring(4,props.location.search.length),
            //dataType: 'jsonp',

            success: function (response) {
                $("#date").val(response.feedbackDueDate);
                $("#FirstName").val(response.firstName);
                $("#LastName").val(response.lastName);
                $("#Email").val(response.email);
                $("#year select").val(response.fieldYear);
                $("#year").value = response.fieldYear;
                $('input[id="veteran"][value="' + response.isVeteran + '"]').checked = true;  
                selected =   response.fieldYear;
               },
            fail: function (response) {
                alert('fail' + JSON.stringify(response));
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
                {/* {console.log('verification' + JSON.stringify(this.props))}
                {console.log('verification param' + JSON.stringify(this.props.location.search.substring(4, this.props.location.search.length)))} */}
                <ContactDetails data = {1} selected = {selected} id= {this.props.match.params.id}> </ContactDetails>
                <input type="hidden" id="hdnCandidateId" value = {this.props.match.params.id} ></input>
            </div>
        )
    }

   
};

export default Verification;