import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const intialState ={
    email:'',
    password:''
  }

  const [signUp, setSignUP] = useState('logIn')
  const [loginDatas, setLoginDatas]= useState(intialState)
  const [signDatas, setSignDatas]= useState({})


const handleLoginDatas =(e)=>{
const {name, value}= e.target
setLoginDatas({...loginDatas, [name]:value})

}
const handleSignDatas =(e)=>{
const {name, value}= e.target
setSignDatas({...signDatas, [name]:value})

}

const handleOnsubmit =(e)=>{
      e.preventDefault()
    
      if (signUp === 'signUp'){
        console.log(signDatas) 
      }
      else{
        console.log(loginDatas)
        setLoginDatas(intialState)
      }
     
      
      
      
}

  return (
    <div>
    <div className="w-full min-h-[500px] flex justify-center items-center  my-2">
        <div className="forms  py-5 px-10 glassEffect">
           {
            signUp === "logIn" && <form action="" method='POST' className='flex flex-col gap-5' onSubmit={(e)=> handleOnsubmits(e)}>
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" value={loginDatas.email} className='border-2 p-2  rounded-sm w-full md:w-[400px]' placeholder='example@gmail.com' onChange={(e)=> handleLoginDatas(e)}/>
            
            <label htmlFor="pass">Password</label>
            <input id="pass" name='password'   type="password" value={loginDatas.password} className='border-2 p-2  rounded-sm w-full md:w-[400px]' placeholder='password' onChange={(e)=> handleLoginDatas(e)}/>
            
            <div className="flex justify-between md:px-3 items-center gap-3 ">
                <button className='button-55 h-10 flex items-center bg-[#00ed46]'>Submit</button>
                <p className='text-blue-500 text-sm md:text-md'><Link  >forrget your password ?</Link> </p>
            </div>
            <hr />
            <div className="">
                <p className='text-center text-red-300'><Link to={''} onClick={()=> setSignUP("signUp")}>Create a new account.</Link></p></div> 
         </form>
           }

           {
            signUp === "signUp" &&  <form action="" method='POST' className='flex flex-col gap-5 signup' onSubmit={(e)=> handleOnsubmit(e)}>
            <label htmlFor="name">Name</label>
            <input id="name" name='name' type='text' className='border-2 p-2  rounded-sm w-full md:w-[400px]' placeholder='jhon' onChange={(e)=> handleSignDatas(e)}/>
            
            <label htmlFor="email">E-mail</label>
            <input id="email" name='email' type="email" className='border-2 p-2  rounded-sm w-full md:w-[400px]' placeholder='example @gmail.com'onChange={(e)=> handleSignDatas(e)}/>
            
            <label htmlFor="ph">PhoneNumber</label>
            <input id="ph" name='phoneNumber' type="number" className='border-2 p-2  rounded-sm w-full md:w-[400px]' placeholder='999458030' onChange={(e)=> handleSignDatas(e)}/>
            
            <label htmlFor="pass">Password</label>
            <input id="pass" name='password' type="password" className='border-2 p-2  rounded-sm w-full md:w-[400px]' placeholder='Pa**W*****d' onChange={(e)=> handleSignDatas(e)}/>
            
            <div className="flex justify-between md:px-3 items-center gap-3">
                <button className='button-55 h-10 flex items-center bg-[#00ed46]'>Submit</button>
                <p className='text-blue-500 text-sm md:text-md' href="" onClick={()=> setSignUP("logIn")}><Link>Already I Have Account !</Link></p>
            </div>
            
            </form>
           }
             

        </div>
    </div>
    </div>
  )
}

export default Login
