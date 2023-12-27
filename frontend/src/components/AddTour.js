import React, { useState } from 'react';

const AddTour = ({ onAddTour }) => {
  const [newTour, setNewTour] = useState({
    // Initialize fields for the new tour
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTour((prevTour) => ({
      ...prevTour,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic can be added if necessary

    // Pass the new tour to the parent component
    onAddTour(newTour);

    // Clear the form after submitting
    setNewTour({
      // Reset fields for the new tour
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      <button type="submit">Add Tour</button>
    </form>
  );
};

export default AddTour;
