import React from 'react';
import Evaluators from '../index.js';
import AddEvaluatorPageHeader from './AddEvaluatorPageHeader/AddEvaluatorPageHeader.js';
import AddEvaluatorPageBody from './AddEvaluatorPageBody/AddEvaluatorPageBody.js';

const AddEvaluatorPage = () =>{
    return (
        <div>
            {/* <Evaluators></Evaluators> */}
            <AddEvaluatorPageHeader></AddEvaluatorPageHeader>
            <AddEvaluatorPageBody></AddEvaluatorPageBody>
        </div>
    )
};

export default AddEvaluatorPage;