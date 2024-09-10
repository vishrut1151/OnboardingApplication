import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ManagerList.css';
import '../styles/ManagerCard.css';

const EmployeeCard = ({ employee }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tasklists/${employee.id}`);
    
    // navigate(`/tasklists`);

  }
  return (

    <div className="manager-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="manager-name-block">
        <div className="manager-details">
          <div className="manager-name">{employee.name}</div>
          <div className="manager-email">Email - {employee.email}</div>
          <div className="manager-email">phone - {employee.phone}</div>
          <div className="manager-email">Department - {employee.department}</div>
          <div className="employee-buddyName"> Buddy Name -
            <span className="employee-buddyNameValue">{" " + employee.buddyName} </span> </div>
        </div>
      </div>
      <div className="employee-tasklist-count">
        Total Tasks - {employee.checklist.length}
      </div>

    </div>


  );
}

export default EmployeeCard