import React from 'react';
import '../styles/ManagerCard.css';

const ManagerCard = ({ manager }) => {
    return (
        <div className="manager-card">
            <div className="manager-name-block">
                <div className="manager-image-container">
                    <img
                        className="manager-image"
                        src={manager.picture}
                        alt="Manager"
                    />
                </div>
                <div className="manager-details">
                    <div className="manager-name">{manager.name}</div>
                    <div className="manager-email">Email - {manager.email}</div>
                    <div className="manager-email">Department - {manager.department}</div>
                </div>
            </div>
            <div className="manager-employees">
                <div>Incoming Employees - {manager.employees.length}</div>
            </div>
        </div>
    );
};

export default ManagerCard;
