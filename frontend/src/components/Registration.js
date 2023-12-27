import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic can be added if necessary

    // Fetch API logic for sending a POST request to the server
    const apiUrl = ''; // Update with your API URL

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful registration (optional)
        console.log('User registered successfully');
        // You might want to redirect the user to a login page or show a success message
      } else {
        // Handle registration failure
        console.error('Registration failed:', response.statusText);
        // You might want to show an error message to the user
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
      // You might want to show an error message to the user
    }
  };

  return (
    <div className='register__wrapper'>
      <h3>Register Here</h3>
      <form className='register__form' onSubmit={handleSubmit}>
        <div className='input__wrapper'>
          <label>Name</label>
          <input
            type='text'
            placeholder='Enter Full Name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className='input__wrapper'>
          <label>Email</label>
          <input
            type='text'
            placeholder='e.g. abc@example.com'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='input__wrapper'>
          <label>Password</label>
          <input
            type='password'
            placeholder='*******'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
