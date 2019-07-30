import React from "react";
import {Link } from 'react-router-dom';//routing
import "./MainMenu.css";
const MainMenu = (props) => {

   return ( <div>
     <div className="btn-group btn-group-justified">
      <Link to="/home">
        <button className="btn btn-success" onClick={props.griddisable}>Home</button>
      </Link>
      <Link to="/grid">
        <button  className="btn btn-success " onClick={props.action}>Grid</button>
      </Link>
      <Link to="/about">
        <button  className="btn btn-success" onClick={props.griddisable}>About</button>
      </Link>
      <Link to="/contact">
        <button  className="btn btn-success" onClick={props.griddisable}>Contact</button>
      </Link>
      </div >
    </div>
   )
}

export default MainMenu;