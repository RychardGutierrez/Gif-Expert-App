import React from 'react';
import PropTypes from "prop-types";
const Index = ({ inputText, handleInputChange }) => {
  return (
    <>
      <h2>Add Category</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
      />
    </>
  )
}

Index.propTypes = {
  inputText: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default Index;

