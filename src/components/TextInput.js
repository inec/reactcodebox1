import React from "react";
import TextShow from "./TextShow";

type Props = {
  initText: string
};

class TextInput extends React.Component {
  state: {
    text: string
  };

  //
  constructor(props: Props) {
    // super
    super(props);

    //
    this.state = {
      text: ""
    };
  }

  // 定`this`
  handleChange = (e: Event) => {
    //
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
/*
TextInput.propTypes = {
  initText: React.PropTypes.string.isRequired
};*/

//匯出TextInput模組
export default TextInput;
