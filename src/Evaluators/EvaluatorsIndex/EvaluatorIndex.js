import React from 'react';
import EvaluatorHeader from '../../EvaluatorHeader/EvaluatorHeader';
import EvaluatorInformationText from '../../EvaluatorInformationText/EvaluatorInformationText';
import AddEvaluator from  '../AddEvaluator/AddEvaluators';

const EvaluatorsIndex = () => {

    return (
        <div>
            <EvaluatorHeader> </EvaluatorHeader>
            <EvaluatorInformationText />
            <AddEvaluator></AddEvaluator>
        </div>
    )
};

export default EvaluatorsIndex;