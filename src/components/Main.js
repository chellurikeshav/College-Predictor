import React from "react";
import FormElement from "./FormElement";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-head">
          <h1>Select your options</h1>
        </div>
        <form action="" className="options">
          <FormElement/>
        </form>
      </div>
    );
  }
}

export default Main;
