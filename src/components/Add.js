import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';



function Add() {

    const[id,setId]=useState(0)
    const[uName,setuName]=useState('')
    const[age,setAge]=useState(0)
    const[desig,setDesig]=useState('')
    const[salary,setSalary]=useState(0)
    const[address,setAddress]=useState('')
    const[teamNo,setTeamNo]=useState(0)
    const[teamId,setTeamId]=useState(0)
    const[phoneNo,setPhoneNO]=useState(0)
    const[email,setEmail]=useState('')
    const[image,setImage]=useState('')

    //useNavigate is set to an obecjt to use this hook
    const location= useNavigate()

  function Cancel(){
    alert('data you entered has been canceled');
    // window.location.href="/";

    //useNavigation hook form react-router is used here to redirect
    location("/")
  }

  const addEmployee=async (e)=>{

    e.preventDefault()

    // console.log(desig);
    setId(uuid().slice(0,3));

    const body={
      id,
      uname:uName,
      age,
      designation:desig,
      salary,
      address,
      teamNo,
      teamId,
      phoneNo,
      email,
      image
    }
    // console.log(body);

    const result= await axios.post("http://localhost:8000/addEmployee",body)

    alert(result.data.message)

    window.location.reload()

  }

  useEffect(()=>{
    setId(uuid().slice(0,3))
  },[])
   
  return (
    <>

        <div className='bg-light text-center p-3 pt-5'>  
            <h3 style={{overflow:"hidden"}}><i className="fa-solid fa-user-tie"/>&nbsp;&nbsp;Add New Employee</h3>       
        </div>

   <Container>
      <form className='p-4 pb-0'>
      <div className="mb-3" >
          <label>&nbsp;Name</label>
          <input className='form-control' onChange={(e)=>setuName(e.target.value)} type="text" placeholder="Enter Name" required/>
        </div>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Image</Form.Label>
          <Form.Control onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Enter Image Url" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Age</Form.Label>
          <Form.Control onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Enter Age" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Designation</Form.Label>
          <Form.Control onChange={(e)=>setDesig(e.target.value)} type="text" placeholder="Enter Designation" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Team name</Form.Label>
          <Form.Control onChange={(e)=>setTeamNo(e.target.value)} type="text" placeholder="Enter Team name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp; Team Id</Form.Label>
          <Form.Control onChange={(e)=>setTeamId(e.target.value)} type="text" placeholder="Enter Id" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Salary</Form.Label>
          <Form.Control onChange={(e)=>setSalary(e.target.value)} type="text" placeholder="Enter Salary" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Phone Number</Form.Label>
          <Form.Control onChange={(e)=>setPhoneNO(e.target.value)} type="text" placeholder="Enter Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Email id</Form.Label>
          <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email id" required />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>&nbsp;Address</Form.Label>
        <Form.Control onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Address" />
      </Form.Group>
        
        
      </form>

      <div className='text-center py-3 mb-5'>
       <Link to={"/"}> <button type="button" className="btn mx-2 ">Back</button></Link>

       {/* <Link to={"/"}> <button type="submit" className="btn btn-light mx-2 text-danger">Cancel</button></Link> */}

       <button onClick={Cancel}  type="submit" className="btn btn-light mx-2 text-danger">Cancel</button>

        <button onClick={(e)=>addEmployee(e)} type="submit" className="btn btn-success mx-2 text-info ">Submit</button>

      </div>

   </Container>
    </>
  )
}

export default Add