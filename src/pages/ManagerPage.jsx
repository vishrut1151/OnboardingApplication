import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import ManagerList from '../components/ManagerList'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import '../styles/BackNav.css';
const ManagerPage = () => {
    return (
        <>
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

        <section>
            <div className="m-auto py-6 px-6">
                <ManagerList/>
            </div>
        </section>
    </>
    )
}

export default ManagerPage