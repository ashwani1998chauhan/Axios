// FormComponent1.js

import React, { useState } from 'react';

const FormComponent1 = () => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Form Component 1</h2>
      <form>
        <label>
          Field 1:
          <input type="text" name="field1" value={formData.field1} onChange={handleChange} /><br />
        </label>
        <br />
        <label>
          Field 2:
          <input type="text" name="field2" value={formData.field2} onChange={handleChange} /><br />
        </label>
        <br />
        <label>
          Field 3:
          <input type="text" name="field3" value={formData.field3} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};

export default FormComponent1;
