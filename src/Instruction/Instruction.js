import React from 'react';
import InstructionBody from  './InstructionBody/InstructionBody'
import InstructionHeader from './InstructionHeader/InstructionHeader'
import 'bootstrap/dist/css/bootstrap.min.css';

class Instruction extends React.Component
{
    componentDidMount()
    {
        console.log('Instruction main' + this.props.match.params.id);
    }
    render()
    {
        
        return(
            <div>
               
                <InstructionHeader ></InstructionHeader>
                <InstructionBody id = {this.props.match.params.id}></InstructionBody>   
            </div>
        );
    }
}

export default Instruction;