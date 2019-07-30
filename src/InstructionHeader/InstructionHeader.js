import React from 'react';
import './InstructionHeader.css';

class InstructionHeader extends React.Component
{
    render()
    {
        return (
            <div className="navout">
                <div className="bluestrip">
                    <div className="candidate-title-wrapper ">
                        <h1 className="head-title">Instructions</h1>
        
                    </div>
                </div>

                <div className="bredcumbs" id="div_breadcrumbs" role="navigation" aria-label="breadcrumb">
                    <ul className="clearfix">
                        <li aria-current="page"><b>Instructions</b></li>
                    </ul>
                </div>
               
            </div>
        );
    }
}

export default InstructionHeader