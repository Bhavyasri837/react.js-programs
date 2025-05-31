import React, { useState } from 'react';
import './App.css';
import Example from './firstprogram';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    gender: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const [emoji, setEmoji] = useState('🐵'); // default happy monkey emoji

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFocus = () => {
    setEmoji('🙈'); // happy monkey with closed eyes emoji
  };

  const handleBlur = () => {
    setEmoji('🐵'); // revert to default happy monkey emoji
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else {
      // Basic email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else {
      // Basic phone number validation (digits only, length 10)
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Phone number is invalid';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Process form data here
      console.log('Form submitted successfully:', formData);
      alert('Form submitted successfully!');
      // Reset form
      setFormData({
        name: '',
        password: '',
        confirmPassword: '',
        gender: '',
        email: '',
        phone: '',
      });
    }
  };

  return (
    <div className="container">
      <div className="emoji" aria-label="monkey emoji" role="img">{emoji}</div>
      <div className="card">
        <form onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>User Registration</legend>

            <label htmlFor="name">Name:</label><br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div style={{color: 'red'}}>{errors.name}</div>}
            <br />

            <label htmlFor="password">Password:</label><br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.password && <div style={{color: 'red'}}>{errors.password}</div>}
            <br />

            <label htmlFor="confirmPassword">Confirm Password:</label><br />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && <div style={{color: 'red'}}>{errors.confirmPassword}</div>}
            <br />

            <fieldset>
              <legend>Gender:</legend>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label><br />
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label><br />
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                />
                Other
              </label>
              {errors.gender && <div style={{color: 'red'}}>{errors.gender}</div>}
            </fieldset>
            <br />

            <label htmlFor="email">Email ID:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
            <br />

            <label htmlFor="phone">Phone No:</label><br />
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div style={{color: 'red'}}>{errors.phone}</div>}
            <br />

            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
