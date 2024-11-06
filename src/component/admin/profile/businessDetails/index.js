import React, { useState } from "react";
import "./index.css"; // Assuming you have the CSS styles in this file

const BusinessDetail = ({ className = "" }) => { // Destructure className from props
    const [formData, setFormData] = useState({
        companyName: "",
        primaryBusiness: "",
        secondaryBusiness: [],
        yearOfEstablishment: "",
        noOfEmployees: "",
        annualTurnover: "",
        ownershipType: "",
        majorMarkets: "",
        companyLogo: null,
        companyDescription: "",
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, files, multiple, checked } = e.target;

        if (type === "file") {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else if (type === "checkbox") {
            // Handling checkboxes by adding/removing values
            setFormData((prevState) => {
                const updatedSecondaryBusiness = checked
                    ? [...prevState.secondaryBusiness, value]
                    : prevState.secondaryBusiness.filter(item => item !== value);
                return { ...prevState, secondaryBusiness: updatedSecondaryBusiness };
            });
        } else if (type === "select-multiple") {
            // Handling multi-select
            const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
            setFormData({
                ...formData,
                [name]: selectedOptions,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    // Form validation
    const validateForm = () => {
        const errors = {};
        if (!formData.companyName) errors.companyName = "Company Name is required";
        if (!formData.primaryBusiness) errors.primaryBusiness = "Primary Business is required";
        if (formData.secondaryBusiness.length === 0) errors.secondaryBusiness = "At least one Secondary Business is required";
        if (!formData.yearOfEstablishment) errors.yearOfEstablishment = "Year of Establishment is required";
        if (!formData.noOfEmployees) errors.noOfEmployees = "No. of Employees is required";
        if (!formData.annualTurnover) errors.annualTurnover = "Annual Turnover is required";
        if (!formData.ownershipType) errors.ownershipType = "Ownership Type is required";
        if (!formData.majorMarkets) errors.majorMarkets = "Major Markets of Business is required";
        if (!formData.companyDescription) errors.companyDescription = "Company Description is required";
        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form data submitted", formData);
            alert("Form Submitted Successfully!");
            setFormData({
                companyName: "",
                primaryBusiness: "",
                secondaryBusiness: [],
                yearOfEstablishment: "",
                noOfEmployees: "",
                annualTurnover: "",
                ownershipType: "",
                majorMarkets: "",
                companyLogo: null,
                companyDescription: "",
            });
            setErrors({});
        }
    };

    return (
        <div className={`form-container ${className}`}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="businessd-detail-form-group-bg-container">
                    {/* Company Name */}
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name:</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                        {errors.companyName && <span className="error">{errors.companyName}</span>}
                    </div>

                    {/* Year of Establishment */}
                    <div className="form-group">
                        <label htmlFor="yearOfEstablishment">Year of Establishment <span className="required">*</span>:</label>
                        <select
                            id="yearOfEstablishment"
                            name="yearOfEstablishment"
                            value={formData.yearOfEstablishment}
                            onChange={handleChange}
                        >
                            <option value="">Select Year</option>
                            <option value="2020">2024</option>
                            <option value="2019">2023</option>
                            <option value="2018">2022</option>
                            <option value="2020">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                        </select>
                        {errors.yearOfEstablishment && <span className="error">{errors.yearOfEstablishment}</span>}
                    </div>

                    {/* Primary Business */}
                    <div className="form-group">
                        <label htmlFor="primaryBusiness">Primary Business <span className="required">*</span>:</label>
                        <input
                            type="text"
                            id="primaryBusiness"
                            name="primaryBusiness"
                            value={formData.primaryBusiness}
                            onChange={handleChange}
                        />
                        {errors.primaryBusiness && <span className="error">{errors.primaryBusiness}</span>}
                    </div>
                </div>
                {/* Secondary Business (Checkboxes) */}
                <div className="form-group">
                    <label>Secondary Business <span className="required">*</span>:</label>
                    <div className="checkbox-group">
                        {["Manufacturer", "Exporter", "Supplier", "Retailer", "Trader", "Distributor", "Importer", "Buying House", "Service Provider"].map((business) => (
                            <div className="business-details-checkbox-container">
                                <label key={business}>
                                    {business}
                                </label>
                                <input
                                    type="checkbox"
                                    name="secondaryBusiness"
                                    value={business}
                                    checked={formData.secondaryBusiness.includes(business)}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>
                    {errors.secondaryBusiness && <span className="error">{errors.secondaryBusiness}</span>}
                </div>



                {/* No. of Employees */}
                <div className="businessd-detail-form-group-bg-container">
                    <div className="form-group">
                        <label htmlFor="noOfEmployees">No. of Employees <span className="required">*</span>:</label>
                        <select
                            id="noOfEmployees"
                            name="noOfEmployees"
                            value={formData.noOfEmployees}
                            onChange={handleChange}
                        >
                            <option value="">Select Number</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-100">51-100</option>
                            <option value="101-500">101-500</option>
                            <option value="501+">501+</option>
                        </select>
                        {errors.noOfEmployees && <span className="error">{errors.noOfEmployees}</span>}
                    </div>

                    {/* Annual Turnover */}
                    <div className="form-group">
                        <label htmlFor="annualTurnover">Annual Turnover <span className="required">*</span>:</label>
                        <select
                            id="annualTurnover"
                            name="annualTurnover"
                            value={formData.annualTurnover}
                            onChange={handleChange}
                        >
                            <option value="">Select Turnover</option>
                            <option value="Less than $1M">Less than $1M</option>
                            <option value="$1M - $5M">$1M - $5M</option>
                            <option value="$5M - $10M">$5M - $10M</option>
                            <option value="$10M - $50M">$10M - $50M</option>
                            <option value="More than $50M">More than $50M</option>
                        </select>
                        {errors.annualTurnover && <span className="error">{errors.annualTurnover}</span>}
                    </div>

                    {/* Ownership Type */}
                    <div className="form-group">
                        <label htmlFor="ownershipType">Ownership Type <span className="required">*</span>:</label>
                        <select
                            id="ownershipType"
                            name="ownershipType"
                            value={formData.ownershipType}
                            onChange={handleChange}
                        >
                            <option value="">Select Ownership Type</option>
                            <option value="Private Limited">Private Limited</option>
                            <option value="Public Limited">Public Limited</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Sole Proprietorship">Sole Proprietorship</option>
                        </select>
                        {errors.ownershipType && <span className="error">{errors.ownershipType}</span>}
                    </div>
                </div>

                {/* Major Markets */}
                <div className="form-group">
                    <label htmlFor="majorMarkets">Major Markets of Business (max 200 characters) <span className="required">*</span>:</label>
                    <textarea
                        id="majorMarkets"
                        className="textarea"
                        name="majorMarkets"
                        value={formData.majorMarkets}
                        onChange={handleChange}
                        maxLength="200"
                    />
                    {errors.majorMarkets && <span className="error">{errors.majorMarkets}</span>}
                </div>

                {/* Company Logo */}
                <div className="form-group">
                    <label htmlFor="companyLogo">Company Logo:</label>
                    <input
                        type="file"
                        id="companyLogo"
                        name="companyLogo"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>

                {/* Company Description */}
                <div className="form-group">
                    <label htmlFor="companyDescription">Company Description <span className="required">*</span>:</label>
                    <textarea
                        id="companyDescription"
                        className="textarea"
                        name="companyDescription"
                        value={formData.companyDescription}
                        onChange={handleChange}
                        required
                    />
                    {errors.companyDescription && <span className="error">{errors.companyDescription}</span>}
                </div>

                {/* Submit Button */}
                <div className="form-group">
                    <button className="businessDetail-button" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default BusinessDetail;
