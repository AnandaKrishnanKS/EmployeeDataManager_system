import  {React, useState,useEffect } from 'react'
import './Admin.css'
import { Container,ButtonGroup } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Admin() {

  const [allEmployees,setAllEmployee]=useState([])

  const fetchdata = async()=>{
      const result= await axios.get('http://localhost:8000/getAllEmployee')
      setAllEmployee(result.data.employees)
  }

  // console.log(allEmployees);

  const deletEmp =async (id)=>{
   const result = await axios.delete(`http://localhost:8000/deleteEmployee/${id}`)
   alert(result.data.message)

  //  window.location.reload()

  //fetchdata function is used to reload data
  fetchdata()
  }

  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <>
        <div className='bg-light text-center p-3 pt-5'>  
                <h1 style={{overflow:"hidden"}}><i className="fa-solid fa-user-tie"></i>&nbsp; Employee Data Management System</h1>       
        </div>
       <Container className='mb-5'>
            
            <div className='p-4 pt-5 text-dark'>
                <p>An employee management system is a tool that gives you better employee database management, employee payroll and more. This enriches the work experience of your employees. Getting appreciation for the efforts and hard work employees put in your business makes them feel happy.</p>
            </div>

            <div>   
              <div className='text-end me-4'>   

                  <ButtonGroup className='me-3'>
                    <input className="serchbox ps-3 py-2" type="search" placeholder="search employee" />
                    <button className="btn btn-sm " type="submit">
                      <div className='m-1 ms-0 mb-0'>
                      <i className="fa-solid fa-magnifying-glass fs-5"></i>
                      </div>
                    </button>
                  </ButtonGroup>

                  <Link to={'/add'}>  
                     <button  className='btn px-3  py-2 m-3  btn-outline-light'>Add New Employee</button>             
                  </Link>

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

                {
                  allEmployees.map((item,index)=>(

                    <tbody className='tablebrdr bg-light text-dark'>
                    <tr className=' text-center '>
                        <td>{index+1}</td>
                        <td>{item.uname}</td>
                        <td>{item.age}</td>
                        <td>{item.designation}</td>
                        <td>{item.salary} &nbsp;&nbsp;
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        </td>
                        <td>
                            <div>
            
                               <Link to={`/edit/${item.id}`}> 
                                <button className='btn btn-sm mb-2 me-1 text-black'> &nbsp;Edit </button>
                               </Link>

                                <button className='btn btn-sm mb-2 me-1 text-black'> View</button>
                                
                                <button onClick={()=>deletEmp(item.id)} className='btn btn-sm mb-2 me-1 text-black'> Delete</button>
                                
                            </div>
                        </td>
                    </tr>
                </tbody>

                  ))
                }
                

                </Table>
                
            </div>
       </Container>
    </>
  )
}

export default Admin