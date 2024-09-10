// FilterTab.js
import React, { useState, useEffect } from 'react';
import { FaSortAlphaDown, FaSortAlphaUp, FaSort } from 'react-icons/fa';
import '../styles/FilterTab.css';

const FilterTab = ({ onFilter, onClear, onSort }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  // const [minTasks, setMinTasks] = useState(0);
 const [maxTasks, setMaxTasks] = useState('');
 const [sortOrder, setSortOrder] = useState('default');

 useEffect(() => {
    setSortOrder('default');
  }, []);

  const handleFilter = () => {
    //console.log('Applying filters:', { name, department, maxTasks });
    onFilter({ name, department, maxTasks });
  };
  const handleClear = () => {
    setName('');
    setDepartment('');
    setMaxTasks('');
    onClear();
    setSortOrder('default');
  };

  const handleSort = () => {
    let newSortOrder;
    if (sortOrder === 'default' || sortOrder === 'desc') {
        newSortOrder = 'asc';
    } else if (sortOrder === 'asc') {
        newSortOrder = 'desc';
    }
    setSortOrder(newSortOrder);
    onSort(newSortOrder);
};

const renderSortIcon = () => {
    if (sortOrder === 'asc') {
        return <FaSortAlphaDown />;
    } else if (sortOrder === 'desc') {
        return <FaSortAlphaUp />;
    } else {
        return <FaSort />;
    }
};


  return (
    <div className='filter-block'>

    <div className="filter-tab">
      <input
        type="text"
        placeholder="Filter by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min tasks"
        value={maxTasks}
        min = {0}
        onChange={(e) => setMaxTasks(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filters</button>
      <button onClick={handleClear}>Clear Filters</button>
      <button onClick={handleSort}>Sort {renderSortIcon()}</button>
    </div>
    </div>
  );
};

export default FilterTab;