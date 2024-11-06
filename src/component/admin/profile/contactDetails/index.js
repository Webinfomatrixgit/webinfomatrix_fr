import React, { useState } from 'react';
import './index.css'; // Import the CSS for styling

const CompanyForm = (className) => {
    const [formData, setFormData] = useState({
        division: '',
        contactPerson: '',
        designation: '',
        companyName: '',
        address: '',
        country: '',
        state: '',
        locality: '',
        postalCode: '',
        companyWebsite: '',
        primaryMobile: '',
        alternateMobile: '',
        primaryEmail: '',
        alternateEmail: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Form validation
    const validateForm = () => {
        const newErrors = {};
        if (!formData.contactPerson) newErrors.contactPerson = 'Contact Person is required';
        if (!formData.designation) newErrors.designation = 'Designation is required';
        if (!formData.companyName) newErrors.companyName = 'Company Name is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.postalCode) newErrors.postalCode = 'Postal/Zip Code is required';
        if (!formData.primaryMobile) newErrors.primaryMobile = 'Primary Mobile No is required';
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            setSuccessMessage('Form submitted successfully!');
            console.log('Form Data:', formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className={`form-container ${className.className}`}>
            <form onSubmit={handleSubmit}>
                <div className='form-group-bg-group-container'>
                    <div className='form-group-bg-container'>
                        <div className="form-group">
                            <label>Division:</label>
                            <select
                                name="division"
                                value={formData.division}
                                onChange={handleChange}
                            >
                                <option value="">Select Division</option>
                                <option value="hr">HR</option>
                                <option value="sales">Sales</option>
                                <option value="marketing">Marketing</option>
                                <option value="it">IT</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Company Name <span className="required">*</span>:</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                            {errors.companyName && <span className="error">{errors.companyName}</span>}
                        </div>

                        <div className="form-group">
                            <label>State <span className="required">*</span>:</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                            />
                            {errors.state && <span className="error">{errors.state}</span>}
                        </div>

                        <div className="form-group">
                            <label>Company Website:</label>
                            <input
                                type="url"
                                name="companyWebsite"
                                value={formData.companyWebsite}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Primary Email:</label>
                            <input
                                type="email"
                                name="primaryEmail"
                                value={formData.primaryEmail}
                                onChange={handleChange}
                            />
                        </div>


                    </div>
                    <div className='form-group-bg-container'>
                        <div className="form-group">
                            <label>Contact Person <span className="required">*</span>:</label>
                            <input
                                type="text"
                                name="contactPerson"
                                value={formData.contactPerson}
                                onChange={handleChange}
                            />
                            {errors.contactPerson && <span className="error">{errors.contactPerson}</span>}
                        </div>

                        <div className="form-group">
                            <label>Country <span className="required">*</span>:</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                            {errors.country && <span className="error">{errors.country}</span>}
                        </div>

                        <div className="form-group">
                            <label>Locality:</label>
                            <input
                                type="text"
                                name="locality"
                                value={formData.locality}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Primary Mobile No <span className="required">*</span>:</label>
                            <input
                                type="tel"
                                name="primaryMobile"
                                value={formData.primaryMobile}
                                onChange={handleChange}
                            />
                            {errors.primaryMobile && <span className="error">{errors.primaryMobile}</span>}
                        </div>

                        <div className="form-group">
                            <label>Alternate Email:</label>
                            <input
                                type="email"
                                name="alternateEmail"
                                value={formData.alternateEmail}
                                onChange={handleChange}
                            />
                        </div>


                    </div>

                    <div className='form-group-bg-container'>

                        <div className="form-group">
                            <label>Designation <span className="required">*</span>:</label>
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                            />
                            {errors.designation && <span className="error">{errors.designation}</span>}
                        </div>

                        <div className="form-group">
                            <label>Address (Building No/Floor, Street) <span className="required">*</span>:</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <span className="error">{errors.address}</span>}
                        </div>


                        <div className="form-group">
                            <label>Postal/Zip Code <span className="required">*</span>:</label>
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                            {errors.postalCode && <span className="error">{errors.postalCode}</span>}
                        </div>
                        <div className="form-group">
                            <label>Alternate Mobile No:</label>
                            <input
                                type="tel"
                                name="alternateMobile"
                                value={formData.alternateMobile}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="submit-btn">Save</button>
                </div>
            </form>

            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
};

export default CompanyForm;
