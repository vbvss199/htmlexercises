import React, { useState, useEffect } from 'react';
import { updateEmployee }  from '../../employee_services/employeeService';
import './UpdateEmployeeForm.css';

const UpdateEmployeeForm = ({ employee, onClose }) => {
    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    useEffect(() => {
        if (employee) {
            setFormData({
                id: employee.id,
                firstName: employee.firstName || '',
                lastName: employee.lastName || '',
                email: employee.email || '',
            });
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateEmployee(formData.id, formData);
            onClose(); // Close form and refresh dashboard
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };

    return (
        <div className="update-employee-form-overlay">
            <div className="update-employee-form-container">
                <h2>Update Employee</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-actions">
                        <button type="submit">Update Employee</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEmployeeForm;
