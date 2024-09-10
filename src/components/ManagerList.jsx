import React from 'react'
import { useState, useEffect } from 'react'
import ManagerCard from './ManagerCard';
import '../styles/ManagerList.css'

const ManagerList = () => {

  const [managersList, setManagersList] = useState([]);

  useEffect(() => {
    const fetchManagers = async () => {
      const managerAPICall = 'api/tasklists';
      try {
        const res = await fetch(managerAPICall);
        const data = await res.json();
        setManagersList(data);

      } catch (error) {
        console.log('error fetching the API call', error);

      } finally {

      }
    }
    fetchManagers();
  }, [])
  //console.log(managersList);
  return (

      <section className="manager-card-container">
   
        {managersList.map((manager) => (
          <ManagerCard key={manager.id} manager={manager} />
        ))}
      </section>
  )
}

export default ManagerList