import React, { useState } from 'react'

const LoginForm = ({user, setUser, userArray1, setUserArray1, userArray2, setUserArray2}) => {

  

   const handleInput = (e) => {
      setUser(e.target.value)
   }


 const submitForm = (e) => {
   e.preventDefault();
   setUserArray1([...userArray1, user])
   console.log(userArray1)
   setUser({
      form1: '',
   form2: ''
   })

   }

   const submitForm2 = (e) => {
      e.preventDefault();
      setUserArray2([...userArray2, user])
      console.log(userArray2)
      setUser({
         form1: '',
		form2: ''
      })
      }

   return(
    <>
    <h1>Login Form A</h1>
    <form>
      <label>
         FormA: 
      </label>
      <input type='text'
      name='username'
      value={user.form1}
      onChange={handleInput}/>

      <button onClick={ submitForm} type='submit'>Submit</button>
    </form>

    <div>
      {userArray1.map((userList, index) => {
         return(
            <>
            <div key={index}>
            <p>{index + 1 }. {userList} </p>
            </div>
            
            </>
         )
      })}
    </div>


    <h1>Login Form B</h1>
    <form>
      <label>
         FormB: 
      </label>
      <input type='text'
      name='username1'
      value={user.form2}
      onChange={handleInput}/>

      <button onClick={ submitForm2} type='submit'>Submit</button>
    </form>

    <div>
      {userArray2.map((userList, index) => {
         return(
            <>
            <div key={index}>
            <p>{index + 1 }. {userList} </p>
            </div>
            
            </>
         )
      })}
    </div>
    </>
   )
}
export default LoginForm;