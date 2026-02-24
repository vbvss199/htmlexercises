// This component is not directly used in the current EmployeeDashboard implementation
// as the list is rendered directly in the dashboard for simplicity.
// However, it's good to have the structure if a separate list component is needed later.

import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees, onViewDetails, onDelete, onUpdate }) => {
    return (
        <div className="employee-list-container">
            <h2>All Employees</h2>
            <ul className="employee-list">
                {employees.map(employee => (
                    <li key={employee.id} className="employee-list-item">
                        <span>{employee.name}</span>
                        <div>
                            <button onClick={() => onViewDetails(employee.id)}>View Details</button>
                            <button onClick={() => onDelete(employee.id)}>Delete</button>
                            <button onClick={() => onUpdate(employee)}>Update</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
