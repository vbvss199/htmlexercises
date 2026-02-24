import React, { useEffect, useState } from 'react';
import { getemployees, deleteEmployee, getEmployeeById } from '../../employee_services/employeeService';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import UpdateEmployeeForm from '../UpdateEmployeeForm/UpdateEmployeeForm';
import './EmployeeDashboard.css';

const EmployeeDashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await getemployees();
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    const handleViewDetails = async (id) => {
        try {
            const response = await getEmployeeById(id);
            setSelectedEmployee(response.data);
        } catch (error) {
            console.error("Error fetching employee details:", error);
        }
    };

    const handleDeleteEmployee = async (id) => {
        try {
            await deleteEmployee(id);
            fetchEmployees();
            setSelectedEmployee(null); // Clear selected employee if deleted
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    const handleAddEmployee = () => {
        setIsAdding(true);
        setSelectedEmployee(null);
        setIsUpdating(false);
    };

    const handleUpdateEmployee = (employee) => {
        setIsUpdating(true);
        setSelectedEmployee(employee);
        setIsAdding(false);
    };

    const handleFormClose = () => {
        setIsAdding(false);
        setIsUpdating(false);
        setSelectedEmployee(null);
        fetchEmployees(); // Refresh list after add/update
    };

    return (
        <div className="employee-dashboard">
            <h1>Employee Dashboard</h1>

            <button onClick={handleAddEmployee}>Add New Employee</button>

            {isAdding && <AddEmployeeForm onClose={handleFormClose} />}
            {isUpdating && selectedEmployee && <UpdateEmployeeForm employee={selectedEmployee} onClose={handleFormClose} />}

            {selectedEmployee ? (
                <EmployeeDetail employee={selectedEmployee} onDelete={handleDeleteEmployee} onUpdate={handleUpdateEmployee} onBack={() => setSelectedEmployee(null)} />
            ) : (
                <div className="employee-list-container">
                    <h2>All Employees</h2>
                    <ul className="employee-list">
                        {employees.map(employee => (
                            <li key={employee.id} className="employee-list-item">
                                <span>{employee.firstName} {employee.lastName}</span>
                                <div>
                                    <button onClick={() => handleViewDetails(employee.id)}>View Details</button>
                                    <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                                    <button onClick={() => handleUpdateEmployee(employee)}>Update</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EmployeeDashboard;
