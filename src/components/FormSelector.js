// FormSelector.js

import React from 'react';

const FormSelector = ({ onSelectChange }) => {
  const handleSelectChange = (e) => {
    onSelectChange(e.target.value);
  };

  return (
    <div>
      <label>Select Form:</label>
      <select onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="form1">Form Component 1</option>
        <option value="form2">Form Component 2</option>
      </select>
    </div>
  );
};

export default FormSelector;
