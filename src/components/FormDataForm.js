import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormDataForm = ({ onSuccessfulSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    other: ''
  });

  const [generatedNumber, setGeneratedNumber] = useState('');

  useEffect(() => {
    // Fetch the latest generated number on component mount
    fetchLatestNumber();
  }, []);

  const fetchLatestNumber = async () => {
    try {
      const response = await axios.get('http://localhost:5106/get-latest-number');
      setGeneratedNumber(response.data.latestNumber || '0000'); // Set to '0000' if no number is available
    } catch (error) {
      console.error('Error fetching latest number:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      uniqueNumber: generatedNumber,
      ...formData
    };

    try {
      await axios.post('http://localhost:5106/submit-data', dataToSubmit);

      console.log('Data successfully submitted to backend:', dataToSubmit);

      setFormData({
        name: '',
        email: '',
        other: ''
      });

      // Increment the generated number by one for the next submission
      setGeneratedNumber((prevNumber) => {
        const incrementedNumber = String(Number(prevNumber) + 1).padStart(4, '0');
        return incrementedNumber;
      });

      onSuccessfulSubmit();
    } catch (error) {
      console.error('Error submitting data to backend:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Form Data Form</h2>
      {/* Display the generated number above the form */}
      <p>Generated Number: {generatedNumber}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="other">Other:</label>
        <input
          type="text"
          id="other"
          name="other"
          value={formData.other}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormDataForm;
