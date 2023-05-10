import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Edit() {

  

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

  const params= useParams()
  
  // console.log(params.id);

    const fetchData=async ()=>{
     const result =await axios.get(`http://localhost:8000/viewEmployee/${params.id}`)
        // console.log(result.data.employee);
        const data=result.data.employee;

        setId(data.id)
        setuName(data.uname)
        setAge(data.age)
        setDesig(data.designation)
        setSalary(data.salary) 
        setAddress(data.address)
        setTeamNo(data.teamNo)
        setTeamId(data.teamId)
        setPhoneNO(data.phoneNo)
        setEmail(data.email)
        setImage(data.image)
        // console.log(id);
        // console.log(uName);
    }
  

    //useNavigate is set to an obecjt to use this hook
    const location= useNavigate()
  
  function Cancel(){
    alert('changes has been canceled');
    // window.location.href="/";

    //useNavigation hook form react-router is used here to redirect
    location("/")
  }

  const updateEmployee=async (e)=>{

    //to prevent looping
    e.preventDefault()

    const body={
      id,
      uName,
      age,
      desig,
      salary,
      address,
      teamNo,
      teamId,
      phoneNo,
      email,
      image
    }

   const result=await axios.post('http://localhost:8000/editEmployee',body)

   alert(result.data.message)

   location("/")
  }

  useEffect(()=>{
      fetchData()
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
          <Form.Control  type="text" placeholder="Name" onChange={(e)=>setuName(e.target.value)} value={uName} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Image Url</Form.Label>
          <Form.Control  type="text" placeholder="image Url" onChange={(e)=>setImage(e.target.value)} value={image} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Age</Form.Label>
          <Form.Control type="text" placeholder="Age" onChange={(e)=>setAge(e.target.value)} value={age} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Designation</Form.Label>
          <Form.Control  type="text" placeholder="Designation" onChange={(e)=>setDesig(e.target.value)} value={desig}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Team Name</Form.Label>
          <Form.Control  type="text" placeholder="Team Name" onChange={(e)=>setTeamNo(e.target.value)} value={teamNo}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Team Id</Form.Label>
          <Form.Control  type="text" placeholder="Team Id" onChange={(e)=>setTeamId(e.target.value)} value={teamId}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Salary</Form.Label>
          <Form.Control type="text" placeholder="Salary" onChange={(e)=>setSalary(e.target.value)} value={salary} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" onChange={(e)=>setPhoneNO(e.target.value)} value={phoneNo} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>&nbsp;Email id</Form.Label>
          <Form.Control type="text" placeholder="Email id" onChange={(e)=>setEmail(e.target.value)} value={email} />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>&nbsp;Address</Form.Label>
        <Form.Control placeholder="Address" onChange={(e)=>setAddress(e.target.value)} value={address} />
      </Form.Group>
        
        
      </Form>

      <div className='text-center py-3 mb-5'>
       <Link to={"/"}> <button type="button" className="btn mx-2 ">Back</button></Link>
       <button onClick={Cancel}  type="submit" className="btn btn-light mx-2 text-danger">Cancel</button>
        <button onClick={(e)=>updateEmployee(e)} type="submit" className="btn btn-success mx-2 text-info ">Update</button>
      </div>

   </Container>
    
    </>
  )
}

export default Edit