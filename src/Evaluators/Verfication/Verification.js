import React from 'react';
import EvaluatorHeader from '../../EvaluatorHeader/EvaluatorHeader';
import EvaluatorInformationText from '../../EvaluatorInformationText/EvaluatorInformationText';
import ContactDetails from './ContactDetails/ContactDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const Verification = () => {

    return (
        <div>
            <EvaluatorHeader> </EvaluatorHeader>
            {/* <EvaluatorInformationText /> */}
            <ContactDetails></ContactDetails>
        </div>
    )
};

export default Verification;