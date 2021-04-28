import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="image">
          <img src="images/main2.png" alt="main-imag" />
        </div>
        <div className="big-head">
          <h1>FIND YOUR DREAM COLLEGE NOW!!!</h1>
          <button>Get Started</button>
        </div>
      </div>
    );
  }
}

export default Home;
