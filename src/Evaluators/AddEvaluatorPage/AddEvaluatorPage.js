import React from 'react';
import Evaluators from '../index.js';
import AddEvaluatorPageHeader from './AddEvaluatorPageHeader/AddEvaluatorPageHeader.js';
import AddEvaluatorPageBody from './AddEvaluatorPageBody/AddEvaluatorPageBody.js';

class AddEvaluatorPage extends React.Component{//= () =>{


    render(){
        return (
        <div>
            {/* <Evaluators></Evaluators> */}
            <AddEvaluatorPageHeader></AddEvaluatorPageHeader>
            <AddEvaluatorPageBody id = {this.props.match.params.id}></AddEvaluatorPageBody>
        </div>
    )}
};

export default AddEvaluatorPage;