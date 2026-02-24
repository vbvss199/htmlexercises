import React, { useState } from 'react';
import { createEmployee } from '../../employee_services/employeeService';
import './AddEmployeeForm.css';

const AddEmployeeForm = ({ onClose }) => {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevEmployee => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createEmployee(employee);
            onClose(); // Close form and refresh dashboard
        } catch (error) {
            console.error("Error adding employee:", error);
        }
    };

    return (
        <div className="add-employee-form-overlay">
            <div className="add-employee-form-container">
                <h2>Add New Employee</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={employee.email} onChange={handleChange} required />
                    </div>
                    <div className="form-actions">
                        <button type="submit">Add Employee</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployeeForm;
