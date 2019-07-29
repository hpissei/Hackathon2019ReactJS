import React from 'react';
import EvaluatorHeader from '../EvaluatorHeader/EvaluatorHeader';
import EvaluatorInformationText from '../EvaluatorInformationText/EvaluatorInformationText';
import AddEvaluator from '../Evaluators/AddEvaluator/AddEvaluators';

const Evaluators = () => {

    return (
        <div>
            <EvaluatorHeader> </EvaluatorHeader>
            <EvaluatorInformationText />
            <AddEvaluator></AddEvaluator>
        </div>
    )
};

export default Evaluators;