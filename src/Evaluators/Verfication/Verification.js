import React from 'react';
import EvaluatorHeader from '../../EvaluatorHeader/EvaluatorHeader';
import EvaluatorInformationText from '../../EvaluatorInformationText/EvaluatorInformationText';
import ContactDetails from './ContactDetails/ContactDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

//extends React.Component{
const Verification = (props) => {

    alert(props.location.search.substring(4,props.location.search.length));

    $.ajax({
        url: 'http://localhost:56345/api/Candidate/' + props.location.search.substring(4,props.location.search.length),
        //data: props.location.search.substring(4,props.location.search.length),
        success: function(response){
            alert(response);
        },
        fail: function (response){
            alert(response);
        },
        error: function(response){
            alert(response);
        }
    })

    return (
        <div>
            <EvaluatorHeader> </EvaluatorHeader>
            {/* <EvaluatorInformationText /> */}
            {console.log('verification' + JSON.stringify( props))}
            {console.log('verification param' + JSON.stringify( props.location.search.substring(4,props.location.search.length)))}
            <ContactDetails></ContactDetails>
        </div>
    )
};

export default Verification;