import React from "react";

class FormElement extends React.Component {
  dropdownList_ref = React.createRef();
  listElement_ref = React.createRef();
  handleClick = () => {
    const dropdownList = this.dropdownList_ref.current;
    dropdownList.classList.toggle("open");
  };

  handleChange = () => {
    const list_element = this.dropdownList_ref.current;
  };

  render() {
    return (
      <div className="dropdown">
        <label htmlFor="Rank" className="dropdown-label">
          Rank
        </label>
        <input
          onClick={this.handleClick}
          type="text"
          id="Rank"
          placeholder="Select your Options"
          className="dropdown-input"
        />

        <div className="dropdown-list" ref={this.dropdownList_ref}>
          <a href="#" className="check-all">
            Check All
          </a>
          <input
            type="checkbox"
            name="check-one"
            id="check-one"
            ref={this.listElement_ref}
          />
          <label htmlFor="check-one" className="dropdown-option">
            One
          </label>

          <input type="checkbox" name="check-two" id="check-two" />
          <label htmlFor="check-two" className="dropdown-option">
            Two
          </label>

          <input type="checkbox" name="check-three" id="check-three" />
          <label htmlFor="check-three" className="dropdown-option">
            Three
          </label>

          <input type="checkbox" name="check-four" id="check-four" />
          <label htmlFor="check-four" className="dropdown-option">
            Four
          </label>
        </div>
      </div>
    );
  }
}

export default FormElement;
