import React, { useEffect, useRef, useState } from 'react'

const Id_REGEX = /^[a-zA-Z]+\/\d{4}\/\d{2}\/\d{2}$/; //begin with a-z follow by forward slash then digit of 4 then slash then digit of 2
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; //must contain at least one lower case one upper case and number and special character and the length should be 8-24

function Register() {  
    const errRef = useRef('')
    const [idNum,setIdNum]= useState('');
    const [validId,setValidId] = useState(false);

    const [pwd,setPwd] = useState('');
    const [validPwd,setValidPwd] = useState(false);


    const [matchpwd,setMatchPwd] = useState('');
    const [validMatch,setValidMatch] = useState(false);
    const [errMsg,setErrMsg] =useState('');
    const [success,setSuccess] =useState(false);
    const handleSubmit = (e)=>
    {
        e.PreventDefault();
    }

    useEffect (()=>
    {
        const result = Id_REGEX.test(idNum);
        console.log(result);
        console.log(idNum);
        setValidId(result);
    },[idNum])

    useEffect(()=>
    {
      const result = PWD_REGEX.test(pwd);
      console.log(result);
      console.log(pwd);
      setValidPwd(result);
      const match = pwd === matchpwd;
      setValidMatch(match);
    },[pwd,matchpwd])

    useEffect(()=>{
        setErrMsg('');
    },[idNum,pwd,matchpwd])

  return (
    <section>
        <p>{errMsg}</p>
        <h2>register</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label className="block" htmlFor="id">ID Number</label>
                <input type="text" placeholder="ID Number" id='id' autoComplete="off" className="w-full p-1.5 mt-2 border rounded-md" />
            </div>
            <div className='mt-4'>
                <label className="block" htmlFor="Password">Password</label>
                <input type="password" placeholder="Password" id='password'   className="w-full p-1.5 mt-2 border rounded-md" />
            </div>
            <div className='mt-4'>
                <label className="block" htmlFor="Password">confirmPassword</label>
                <input type="password" placeholder="Password" id='password'   className="w-full p-1.5 mt-2 border rounded-md" />
            </div>
            <div className='mt-4'>
                <button className='bg-sky-700 p-1.5 w-full rounded hover:bg-sky-500'>Sign up</button>
            </div>    
            </form>

    </section>
  )

}

export default Register