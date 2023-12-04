import React, { useState } from 'react';

const UpdatedNumberGenerator = () => {
  const [generatedNumber, setGeneratedNumber] = useState(0);

  const handleGenerateNumber = () => {

    setGeneratedNumber((prevNumber) => (prevNumber + 1) % 10000);
  };

  return (
    <div>
      <h2>Generated Number: {generatedNumber.toString().padStart(4, '0')}</h2>
      <button onClick={handleGenerateNumber}>Generate New Number</button>
    </div>
  );
};

export default UpdatedNumberGenerator;
