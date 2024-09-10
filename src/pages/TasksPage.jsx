import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeTaskList from '../components/EmployeeTaskList';
import '../styles/TaskPage.css';

const TasksPage = () => {
    const { employeeId } = useParams();
    const [taskLists, settaskLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [employeeName, setEmployeeName] = useState();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const res = await fetch('/api/tasklists');
                if (!res.ok) {
                    throw new Error('Network response is not okay');
                }
                const data = await res.json();
                const allEmployees = data.flatMap(manager => manager.employees);
                const selectedEmployeeTasklistsName = allEmployees.find(emp => emp.id == employeeId);
                setEmployeeName(selectedEmployeeTasklistsName)
                settaskLists(selectedEmployeeTasklistsName.checklist);
                //console.log(selectedEmployeeTasklists);
            } catch (error) {
                console.error('Failed to fetch employees:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Filter the employee based on the employeeId
    //const employee = employees.find(emp => emp.id === employeeId);

    return (
        <div className='checklist-box'>
            <div className='Checklist-title '>
                CheckList Items for {employeeName.name}
            </div>

            <div className='checklist-items'>
                {/* Render the EmployeeTaskList component with the fetched task lists */}
                <EmployeeTaskList tasklists={taskLists} />
            </div>
        </div>
    );
};

export default TasksPage;
