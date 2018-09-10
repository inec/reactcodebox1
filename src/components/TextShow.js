import React from "react";
import PropTypes from "prop-types";

const TextShow = (props: { text: string }) => <h1>{props.text}</h1>;

// addprops
TextShow.propTypes = {
  text: PropTypes.string.isRequired
};

// export TextShow
export default TextShow;
