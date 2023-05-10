import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './View.css'

function View() {

  const [employee,setEmployee]=useState({})

  const params= useParams()

  const getEmployee=async ()=>{
    const empData =await axios.get(`http://localhost:8000/viewEmployee/${params.id}`)

       setEmployee(empData.data.employee)
  }

  useEffect(()=>{
    getEmployee()
  },[])

  return (
    <>
    <Container className='py-5'>
        {/* <h1>{employee.uname}</h1> */}
        <Row>

          <h1 className='card p-4 mb-5'> Employee Details</h1>

        </Row>

        <Row className='rounded'>

          <Col lg={3} md={4} >

            <Row className='card mb-2'>

              <div className=' d-flex justify-content-center p-3' >
                <img className='w-75 rounded' src={employee.image}/>
              </div>

            </Row>
          
          </Col>

          <Col lg={9} md={8} >

           <Row className='card mb-2'>

              <h1 className='text-uppercase pt-2 text-info'>{employee.uname}</h1>

           </Row>

            <Row className='mb-2'>

              <Col lg={4} className='card pt-2'><h3>Age: {employee.age}</h3></Col>
              <Col lg={4} className='card pt-2'><h3>ID : {employee.teamId}</h3></Col>
              <Col lg={4} className='card pt-2'><h3>Team : {employee.teamNo}</h3></Col>
              

            </Row>
            <Row className='mb-2'>

              <Col lg={6} className='card pt-2'><h3>Designation : {employee.designation}</h3></Col>
              <Col lg={6} className='card pt-2'><h3>Salary : {employee.salary}</h3></Col>
             

            </Row>
            <Row className='card mb-2'>

             <h2 className='mb-2 mt-4'>Contact info:</h2>
             <div className='w-75 me-auto ms-auto my-3'  style={{ borderTop: '1px solid lightgrey' }}></div>
             <Row>

              <Col lg={6}>
                  <h3 className='mt-2'>Email : {employee.email} </h3>
              </Col>
              <Col lg={6}>
                  <h3 className='mt-2'>Mob : {employee.phoneNo}</h3>
              </Col>
             </Row>
             <div className='w-75 me-auto ms-auto my-3'  style={{ borderTop: '1px solid lightgrey' }}></div>
             <Row>
              <h4 className='mb-4'>Address : {employee.address} </h4>
             </Row>

            </Row>

            <Row className='text-center'>
            <Link to={"/"}> <button type="button" className="btn btn-outline-light my-3">Back to home</button></Link>
            </Row>
          
          </Col>

        </Row>
        
         
    </Container>
    </>
  )
}

export default View