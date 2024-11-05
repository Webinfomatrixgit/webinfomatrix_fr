import React, { useState } from 'react';
import './index.css'
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('http://34.207.92.172:3000/api/registration', formData);
                
                if (response.data.success === true) {
                    setSuccessMessage('Registration successful! Please check your email for confirmation.');
                    console.log('Registration successful:', response.data.message);
                } else {
                    // Set errors as an object, not a string
                    setErrors({ api: `Registration failed. ${response.data.message}` });
                    console.log(response.data.message);
                }
                
                // Reset form
                setFormData({ firstName: '', lastName: '', email: '', password: '', phone: '' });
            } catch (error) {
                console.error('Error during registration:', error);
                setErrors({ api: 'Registration failed. Please try again.' });
            }
        } else {
            setErrors(validationErrors);
        }
    };
    
    return (
        <div className="registration-form">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
                <div>
                    <label>Last name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                
                {/* Handle general API errors */}
                {errors.api && <div className="error">{errors.api}</div>}
                
                <button type="submit">Register</button>
            </form>

            {/* Show success message */}
            {successMessage && <div className="success">{successMessage}</div>}

            <div className="login-section-bg-container">
                <p>If your profile already exists, please <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default RegistrationForm;
