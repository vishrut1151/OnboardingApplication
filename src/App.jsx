import React from 'react'
import Login from './components/Login'
import NotFoundPage from './pages/NotFoundPage'
import Routing from './utility/Routing'
import JobBoard from './pages/JobBoard'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ContactForm from './pages/ContactFormPage'
import ManagerPage from './pages/ManagerPage'
import EmployeesPage from './pages/EmployeesPage'
import TasksPage from './pages/TasksPage'




const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/managerPage' element={<ManagerPage />} />
        <Route path='/employeesPage' element={<EmployeesPage />} />
        <Route path="/tasklists/:employeeId" element={<TasksPage />} />
        {/* <Route path="/tasklists" element={<TasksPage />} /> */}
        <Route path='/contact-form' element={<ContactForm />} />
        <Route path='/jobboard' element={<JobBoard />} />       
        <Route path='*' element={<NotFoundPage />} />



      </>

    )
  )
  return <RouterProvider router={router} />
  // return (
  //   <div >
  //     <Login/>
  //     {/* <Routing/> */}
  //     <NotFoundPage/>
  //     {/* <JobBoard/> */}
  //     </div>
  // )
};

export default App