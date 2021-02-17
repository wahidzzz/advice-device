import "./index.css";
import React from "react";
import Advice from "./components/Advice";
import Search from "./components/Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
    };
  }
  render() {
    return (
      <div className="app">
        <div className="col">
         <Advice/>
        </div>
        <div className="col">
          <Search/>
        </div>
      </div>
    );
  }
}

export default App;
