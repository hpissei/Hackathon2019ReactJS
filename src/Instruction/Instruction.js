import React from 'react';
import InstructionBody from  './InstructionBody/InstructionBody'
import InstructionHeader from './InstructionHeader/InstructionHeader'

class Instruction extends React.Component
{
    render()
    {
        return(
            <div>
                <InstructionHeader></InstructionHeader>
                <InstructionBody></InstructionBody>   
            </div>
        );
    }
}

export default Instruction