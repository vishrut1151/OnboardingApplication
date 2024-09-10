import React from 'react'
import EmployeesList from '../components/EmployeesList'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import '../styles/BackNav.css'

const EmployeesPage = () => {
    return (
        <div>
              <Navbar />
        <section className= "back-nav-conatainer" > 
            <div className="m-auto py-6 px-6 ">
                <Link
                    to="/dashboard"
                    className="text-indigo-500 hover:text-indigo-600 flex items-center"
                >
                    <FaArrowLeft className="mr-2" /> Back to Job Listings
                </Link>
            </div>
        </section>
            <div>
                <EmployeesList/>
            </div>
        </div>

    )
}

export default EmployeesPage