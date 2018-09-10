import React from "react";
import TextShow from "./TextShow";
import PropTypes from "prop-types";
type Props = {
  initText: string
};

class TextInput extends React.Component {
  state: {
    text: string
  };

  //
  constructor(props: Props) {
    super(props);

    //
    this.state = {
      text: ""
    };
  }

  handleChange = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      this.setState({ text: e.target.value });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          placeholder={this.props.initText}
          onChange={this.handleChange}
        />
        <TextShow text={this.state.text} />
      </div>
    );
  }
}

TextInput.propTypes = {
  initText: PropTypes.string.isRequired
};

export default TextInput;
