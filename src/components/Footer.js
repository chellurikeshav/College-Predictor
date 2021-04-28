import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h1>Contact Us:</h1>
        <div className="icons">
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
              className="instagram"
              alt="instagram"
            />
          </div>
          <div className="icon">
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              className="Linkedin"
              alt="Linkedin"
            />
          </div>
          <div className="icon">
            <img
              src="https://img.icons8.com/color/48/000000/gmail.png"
              className="Gmail"
              alt="Gmail"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
