import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {IndexRoute} from 'react-router';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';//routing
import MainMenu from './MainMenu/MainMenu';
//import CompanyLogo from './CompanyLogo/CompanyLogo';
import Header from './Header/Header';
import AddEvaluator from './Evaluators/AddEvaluator/AddEvaluators';
import AddEvaluatorPage from './Evaluators/AddEvaluatorPage/AddEvaluatorPage';
import Evaluators from './Evaluators/index';
import Verification from './Evaluators/Verfication/Verification';// '../Evaluators/Verification/Verification';
import Footer from './Footer/Footer'
import Instruction from './Instruction/Instruction';
import EvaluatorIndex from './Evaluators/EvaluatorsIndex/EvaluatorIndex';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      redirect: false
    }

    alert( 'App props' + JSON.stringify(props));
  }

  render(){
  return (
    <div className="App">
      <Router>
        <Switch>
        <div>
          <Header></Header>
          {/* <IndexRoute component="/Instruction"></IndexRoute> */}
          <Route path="/Instruction/:id" component={Instruction}></Route>
          <Route exact path="/Verification/:id" data={this.state.id} component={Verification}></Route>
          <Route exact path="/AddEvaluatorPage/:id" component={AddEvaluatorPage} ></Route>
          <Route exact path="/AddEvaluator" component={AddEvaluator}/>
          <Route exact path="/about" />
          <Route exact path="/contact"  />
          <Route exact path="/EvaluatorIndex/:id" component = {EvaluatorIndex} />
          {/* <Footer></Footer> */}
        </div>
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
