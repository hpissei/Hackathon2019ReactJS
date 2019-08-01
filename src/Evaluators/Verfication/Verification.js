import React from 'react';
import EvaluatorHeader from '../../EvaluatorHeader/EvaluatorHeader';
import EvaluatorInformationText from '../../EvaluatorInformationText/EvaluatorInformationText';
import ContactDetails from './ContactDetails/ContactDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

//extends React.Component{
const Verification = (props) => {

    alert(props.location.search.substring(4,props.location.search.length));
debugger;
    $.ajax({
        url: 'http://localhost:56345/api/Candidate/' + props.location.search.substring(4,props.location.search.length),
        //data: props.location.search.substring(4,props.location.search.length),
        dataType: 'jsonp',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials' : true,
'Access-Control-Allow-Methods' : 'GET, POST',
'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept'
        },
        success: function(response){
            alert('success' + JSON.stringify(response));
        },
        fail: function (response){
            alert('fail' + JSON.stringify(response));
        },
        error: function(response){
            alert('error' + JSON.stringify(response));
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