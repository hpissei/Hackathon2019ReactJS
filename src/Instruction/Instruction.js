import React from 'react';
import InstructionBody from  './InstructionBody/InstructionBody'
import InstructionHeader from './InstructionHeader/InstructionHeader'

class Instruction extends React.Component
{
    componentDidMount()
    {
        alert('Instruction main' + this.props.match.params.id);
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