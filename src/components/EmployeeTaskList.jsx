import React from 'react'

const EmployeeTaskList = (taskLists) => {
  return (
    <div>
      <div>
        {taskLists.tasklists.map((task, index) => (
          <div key={index} className = 'task-item'>
            <div>
              <input
                id="push-email"
                name="push-notifications"
                type="checkbox"
                className='task-checkbox'
              />

            </div>
            <label htmlFor={`task-${index}`} className="task-label">
              {task}
            </label>
          </div>
        ))}
      </div>

    </div>
  )
}

export default EmployeeTaskList