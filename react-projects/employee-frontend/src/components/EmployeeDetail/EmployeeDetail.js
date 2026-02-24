import React from 'react';
import './EmployeeDetail.css';

const EmployeeDetail = ({ employee, onDelete, onUpdate, onBack }) => {
    if (!employee) {
        return <div className="employee-detail">No employee selected.</div>;
    }

    return (
        <div className="employee-detail">
            <h2>Employee Details</h2>
            <p><strong>First Name:</strong> {employee.firstName}</p>
            <p><strong>Last Name:</strong> {employee.lastName}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <div className="actions">
                <button onClick={() => onDelete(employee.id)}>Delete</button>
                <button onClick={() => onUpdate(employee)}>Update</button>
                <button onClick={onBack}>Back to List</button>
            </div>
        </div>
    );
};

export default EmployeeDetail;
