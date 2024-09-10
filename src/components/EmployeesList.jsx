import React from 'react'
import { useState, useEffect } from 'react'
import EmployeeCard from './EmployeeCard'
import FilterTab from './FilterTab'
import '../styles/ManagerList.css'

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [sortOrder, setSortOrder] = useState('default');
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const res = await fetch('api/tasklists');
                if (!res.ok) {
                    throw new Error('Network response is not okay');
                }
                const data = await res.json();
                const allEmployees = data.flatMap(manager => manager.employees);
                setEmployees(allEmployees);
                setFilteredEmployees(allEmployees);
                //setLoading(false);

            } catch (error) {
                //setError(error);
                //setLoading(false);
                console.error('Failed to fetch employees:', error);

            } finally {

            }

        }

        fetchEmployees();

    }, [])

    const handleFilter = ({ name, department, maxTasks }) => {
        console.log('Applying filters in EmployeeList:', { name, department, maxTasks });
        const filtered = employees.filter(employee => {
            console.log('Filtering employee:', employee);
            return (
                // (name === '' || employee.name.toLowerCase().includes(name.toLowerCase())) &&
                (name === '' || employee.name.includes(name)) &&
                (department === '' || employee.department.toLowerCase().includes(department.toLowerCase())) &&
                // (maxTasks === 0 || employee.checklist.length <= maxTasks)
                (maxTasks === '' || employee.checklist.length <= parseInt(maxTasks))
            );
        });
        setFilteredEmployees(filtered);
    };

    const handleClear = () => {
        setFilteredEmployees(employees);
        //setSortOrder('default');
    };

    const handleSort = () => {
        let newSortOrder;
        if (sortOrder === 'default' || sortOrder === 'desc') {
            newSortOrder = 'asc';
        } else if (sortOrder === 'asc') {
            newSortOrder = 'desc';
        } else {
            newSortOrder = 'default';
        }
        setSortOrder(newSortOrder);
    
        let sortedEmployees;
        if (newSortOrder === 'asc') {
            sortedEmployees = [...filteredEmployees].sort((a, b) => a.name.localeCompare(b.name));
        } else if (newSortOrder === 'desc') {
            sortedEmployees = [...filteredEmployees].sort((a, b) => b.name.localeCompare(a.name));
        } else {
            sortedEmployees = employees;
        }
        setFilteredEmployees(sortedEmployees);
    };
    
    
    return (
        <div>
            <FilterTab onFilter={handleFilter} onClear={handleClear} onSort={handleSort}  />
            <section className="manager-card-container" >
                {filteredEmployees.map(employee => (
                    <EmployeeCard key={employee.id} employee={employee} />
                ))}
            </section>
        </div>


    )
}

export default EmployeesList