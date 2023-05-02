import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Edit() {

  const params= useParams()

  const id=params.id
  

    //useNavigate is set to an obecjt to use this hook
    const location= useNavigate()
  
  function Cancel(){
    alert('changes has been canceled');
    // window.location.href="/";

    //useNavigation hook form react-router is used here to redirect
    location("/")
  }

  useEffect(()=>{

  },[])
  
  return (
    <>
    
    <div className='bg-light text-center p-3 pt-5'>  
            <h3 style={{overflow:"hidden"}}><i className="fa-solid fa-user-tie"/>&nbsp;&nbsp;Edit Employee details</h3>       
        </div>

   <Container>
      <Form className='p-4 pb-0'>
      <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Name</Form.Label>
          <Form.Control  type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Age" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Designation</Form.Label>
          <Form.Control  type="text" placeholder="Enter Designation" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Salary</Form.Label>
          <Form.Control type="text" placeholder="Enter Salary" />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>&nbsp;Address</Form.Label>
        <Form.Control placeholder="Enter Address" />
      </Form.Group>
        
        
      </Form>

      <div className='text-center py-3 mb-5'>
       <Link to={"/"}> <button type="button" className="btn mx-2 ">Back</button></Link>
       <button onClick={Cancel}  type="submit" className="btn btn-light mx-2 text-danger">Cancel</button>
        <button  type="submit" className="btn btn-success mx-2 text-info ">Update</button>
      </div>

   </Container>
    
    </>
  )
}

export default Edit