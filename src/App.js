import React from 'react';
import logo from './logo.svg';
import './App.css';
import InstructionHeader from './InstructionHeader/InstructionHeader';
import InstructionBody from './InstructionBody/InstructionBody';
import InstructionFooter from './InstructionFooter/InstructionFooter';

function App() {
  return (
    <div className="App">
      <InstructionHeader></InstructionHeader>
      <InstructionBody></InstructionBody>
      <InstructionFooter></InstructionFooter>
    </div>
  );
}

export default App;
