import React from 'react'

function Footer() {
  return (
    <>

      <div className='bg-dark pt-3 px-5'>

        <p className='text-center text-light'>  need help? 
       
        <a className='text-success' href='https://wa.me/8921690599' target="_blank"
           style={{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none"}}>
                contact us on &nbsp; 
                   <i className="fa-brands fa-whatsapp"></i></a></p>
        
        <p className='text-end' >
          No rights reserved ha haa ... to get code click
          <a className='text-primary' href='https://github.com/AnandaKrishnanKS/EmployeeDataManager_system'> here</a>
          <br/><br/>
          <span style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
            follow me on
            &nbsp;&nbsp;<a href='...'><i className="fa-brands fa-instagram fs-5 text-primary"></i></a>
            &nbsp;&nbsp;<a href='...'><i className="fa-brands fa-github fs-5 text-primary"></i></a>
            &nbsp;&nbsp;<a href='...'><i className="fa-brands fa-linkedin-in fs-5 text-primary"></i></a>
          </span>
        </p>

      </div>

    </>
  )
}

export default Footer