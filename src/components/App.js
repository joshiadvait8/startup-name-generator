import React, { Component } from "react";
import "./styles.css";
import { SearchBox } from "./searchbox/SearchBox";
import { SearchCard } from "./SearchCard/SearchCard";

const name = require("@rstacruz/startup-name-generator");
class App extends Component {
  constructor() {
    super();
    this.state = {
      startupNames: []
    };
  }
  //we can pass funtions as props as well to compoments
  // but it will run in App.js components
  handleSearch = searchval => {
    console.log(name(searchval));
    this.setState({ startupNames: name(searchval) });
  };

  render() {
    return (
      <div className="App">
        <h1>Startup Name Generator</h1>
        <SearchBox
          placeholderName="type here"
          handleSeach={this.handleSearch}
        />
        <div className="startupNameContainer">
          {this.state.startupNames.map(startupName => {
            return <SearchCard startupName={startupName} key={startupName} />;
          })}
        </div>
      </div>
    );
  }
}
export default App;
