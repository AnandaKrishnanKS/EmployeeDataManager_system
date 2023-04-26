import React from 'react'
import './Admin.css'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';


function Admin() {
  return (
    <>
        <div className='bg-light text-center p-3 pt-5'>  
                <h1><i class="fa-solid fa-user-tie"></i>&nbsp; Employee Data Management System</h1>       
        </div>
       <Container>
            
            <div className='p-4 pt-5 text-dark'>
                <p>An employee management system is a tool that gives you better employee database management, employee payroll and more. This enriches the work experience of your employees. Getting appreciation for the efforts and hard work employees put in your business makes them feel happy.</p>
            </div>
            <div>   
              <div className='text-end me-4'>    
                <button className='btn ps-3 pe-3 p-2 m-4 mt-2 btn-outline-light'>Add New Employee</button>
              </div>
                <Table bordered hover className='table'>
                <thead>
                    <tr className='text-white bg-primary text-center'>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody className='bg-light text-dark'>
                    <tr className='text-center'>
                    <td>1</td>
                    <td>Mark</td>
                    <td>34</td>
                    <td>Developer</td>
                    <td>35000</td>
                    <td>
                        <div className=''>
        
                            <button className='btn btn-sm mb-2 me-1 text-black'> &nbsp;Edit </button>
                            <button className='btn btn-sm mb-2 me-1 text-black'> View</button>
                            <button className='btn btn-sm mb-2 me-1 text-black'> Delete</button>
                            
                       </div>
                    </td>
                    </tr>
                </tbody>
                </Table>
                
            </div>
       </Container>
    </>
  )
}

export default Admin