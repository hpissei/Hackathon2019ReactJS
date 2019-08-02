import React from 'react';
import EvaluatorHeader from '../../EvaluatorHeader/EvaluatorHeader';
import EvaluatorInformationText from '../../EvaluatorInformationText/EvaluatorInformationText';
import AddEvaluator from  '../AddEvaluator/AddEvaluators';
import $ from 'jquery';

class EvaluatorsIndex extends React.Component//= () => {
{

    render(){
        return (
        <div>
            <EvaluatorHeader> </EvaluatorHeader>
            <EvaluatorInformationText />
            <AddEvaluator id = {this.props.match.params.id}></AddEvaluator>
        </div>
    )
    }
};

export default EvaluatorsIndex;