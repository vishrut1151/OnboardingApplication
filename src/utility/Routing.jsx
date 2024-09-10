import React from 'react'
import Login from '../../src/components/Login'

const Routing = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />} >
                <Route index element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
                <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
                <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>)
    )
    return <RouterProvider router={router} />
}
export default Routing