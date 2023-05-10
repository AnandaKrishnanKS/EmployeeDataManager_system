import  {React, useState,useEffect } from 'react'
import './Admin.css'
import { Container,ButtonGroup } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Admin() {


  // state for all employee data
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

   //state for search query
   const [query,setQuery]=useState('')
  //  console.log(allEmployees.filter(emp=>emp.uname.includes(query)));

  
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
                    <input onChange={(e)=>setQuery(e.target.value)} className="serchbox ps-3 py-2" type="search" placeholder="search employee" />
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
                    <th>Team Name</th>
                    <th>Team Id</th>
                    <th>Designation</th>
                    <th>Action</th>
                    </tr>
                </thead>

                {
                  allEmployees.filter(item=>item.uname.toLowerCase().includes(query) ||
                                            item.designation.toLowerCase().includes(query) 
                                     ).map((item,index)=>(

                    <tbody className='tablebrdr bg-light text-dark'>
                    <tr  className=' text-center '>
                        <td>{index+1}</td>
                        <td>{item.uname}</td>
                        <td>{item.teamNo}</td>
                        <td>{item.teamId}</td>
                        <td>{item.designation} &nbsp;&nbsp;</td>
                        <td>
                            <div>
            
                               <Link to={`/edit/${item.id}`}> 
                                <button className='btn btn-sm mb-2 me-1 text-black'> &nbsp;Edit </button>
                               </Link>
                               

                               <Link to={`/view/${item.id}`} style={{textDecoration:"none"}}> <button  className='btn btn-sm mb-2 me-1 text-black'> View</button></Link>
                                
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