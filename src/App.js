import React from 'react';
//import logo from './logo.svg';
import './App.css';
import InstructionHeader from './InstructionHeader/InstructionHeader';
import InstructionBody from './InstructionBody/InstructionBody';
import InstructionFooter from './InstructionFooter/InstructionFooter';
import { BrowserRouter as Router, Route } from 'react-router-dom';//routing
import MainMenu from './MainMenu/MainMenu';
//import CompanyLogo from './CompanyLogo/CompanyLogo';
import Header from './Header/Header';
import AddEvaluator from './Evaluators/AddEvaluator/AddEvaluators';
import AddEvaluatorPage from './Evaluators/AddEvaluatorPage/AddEvaluatorPage';
import Evaluators from './Evaluators/index';
import Verification from './Evaluators/Verfication/Verification';// '../Evaluators/Verification/Verification';
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <InstructionHeader></InstructionHeader>
      <InstructionBody></InstructionBody>
      <InstructionFooter></InstructionFooter>
      {/* <header className="App-header">
        
      </header> */}
      <Router>
        <div>
          <Header></Header>
          <Verification></Verification>
          <Route exact path="/AddEvaluatorPage" component={AddEvaluatorPage} ></Route>
          <Route exact path="/AddEvaluator" component={AddEvaluator}/>
          <Route exact path="/about" />
          <Route exact path="/contact"  />
          <Route exact path="/"  />
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;