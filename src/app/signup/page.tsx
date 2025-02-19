import React from 'react'
import addTeamMember from './actions/addTeamMember'

function SignUp() {
    
    
  return (
      <div className='flex flex-col gap-5 bg-black text-white h-screen w-screen items-center justify-center'>
          <div className='flex flex-col gap-5 justify-center items-center w-[80%] h-[70%] bg-yellow-100 text-black'>
               <h1>sign up</h1>
              <form action={addTeamMember} className='flex flex-col gap-3 h-[95%]' >
                  <label>First Name</label>
                  <input type='text' name='fname'/>
                  <label>Email</label>
                  <input type='email' name='email' />
                  <button type='submit'>Submit</button>
                </form>
          </div>
  
    </div>
  )
}

export default SignUp

