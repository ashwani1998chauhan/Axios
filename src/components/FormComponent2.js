// FormComponent2.js

import React, { useState } from 'react';

const FormComponent2 = () => {
  const [formData, setFormData] = useState({
    field4: '',
    field5: '',
    field6: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Form Component 2</h2>
      <form>
        <label>
          Field 4:
          <input type="text" name="field4" value={formData.field4} onChange={handleChange} />
        </label>
        <br />
        <label>
          Field 5:
          <input type="text" name="field5" value={formData.field5} onChange={handleChange} />
        </label>
        <br />
        <label>
          Field 6:
          <input type="text" name="field6" value={formData.field6} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};

export default FormComponent2;
