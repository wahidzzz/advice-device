import "./index.css";
import React from "react";
import Advice from "./components/Advice";
import Search from "./components/Search";
// import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }
  render() {
    return (
      <div className="app">
        <div className="col">
         <Advice advice="The most important thing is the thing most easily forgotten."/>
        </div>
        <div className="col">
          <Search/>
        </div>
      </div>
    );
  }
}

export default App;
