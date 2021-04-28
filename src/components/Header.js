import React from "react";

class Header extends React.Component {
  // refs
  dropDownRef = React.createRef();

  handleClick = () => {
    const navbar = this.dropDownRef.current;
    navbar.classList.toggle("clicked");
  };

  render() {
    return (
      <section className="head">
        <h1>College Predictor</h1>
        <div className="buttons">
          <button>About</button>
          <button>Register</button>
          <button>Login</button>
        </div>
        <div className="navbar">
          <div className="hamburger" onClick={this.handleClick}>
            <p className="top"></p>
            <p className="middle"></p>
            <p className="bottom"></p>
          </div>
          <ul className="dropdown" ref={this.dropDownRef}>
            <li>About</li>
            <li>Register</li>
            <li>Login</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;
