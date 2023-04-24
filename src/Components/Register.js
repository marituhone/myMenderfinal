import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../api/axios';

 const Name_REGEX= /^[A-z][A-z]{3,23}$/;
 const Id_REGEX = /^bole\/\d{5}\/\d{4}$/ //begin with a-z follow by forward slash then digit of 4 then slash then digit of 2
 const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; //must contain at least one lower case one upper case and number and special character and the length should be 8-24
 const EMAIL_REGEX = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9._-]+)\.([a-zA-Z]{2,5})$/;

 const REGISTER_URL = '/register';
function Register() {  
    const errRef = useRef('')
 
    const [Fname, setFname] = useState('');
    const [validFname,setValidFname] = useState(false);

    const [Lname, setLname] = useState('');
    const [validLname,setvalidLname] = useState(false);


    const [pwd,setPwd] = useState('');
    const [validPwd,setValidPwd] = useState(false);

    const [confirmPwd,setconfirmPwd] = useState('');
    const [validconfirmPwd,setvalidconfirmPwd] = useState(false);


    const [idNum,setIdNum]= useState('');
    const [validId,setValidId] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] = useState(false);


    const [errMsg,setErrMsg] =useState('');
    const [success,setSuccess] =useState(false);


    useEffect (() =>
    {
        const fresult = Name_REGEX.test(Fname);
        console.log(fresult);
        setValidFname(fresult);
        //setValidFname(Name_REGEX.test(Fname))

    },[Fname])

    useEffect(()=>
    {
        const emailresult = EMAIL_REGEX.test(email);
        console.log(emailresult);
        setValidEmail(emailresult);
    },[email])

    useEffect (() =>
    {
        const lresult = Name_REGEX.test(Lname);
        console.log(lresult);
        setvalidLname(lresult);
        //setValidLname(Name_REGEX.test(Lname))

    },[Lname])

    useEffect (()=>
    {
        const result = Id_REGEX.test(idNum);
        console.log(result);
        console.log(idNum);
        setValidId(result);
        //setValidId(Name_REGEX.test(idnum))
    },[idNum])

    useEffect(()=>
    {
      const result = PWD_REGEX.test(pwd); 
      console.log(result);
      console.log(pwd)
      setValidPwd(result);
      const match = pwd === confirmPwd;
      setvalidconfirmPwd(match);
      console.log(confirmPwd)
      
    },[pwd,confirmPwd])


    
    useEffect(()=>{
        setErrMsg(''); //clearing the error message
    },[Fname,Lname,idNum,pwd,confirmPwd])


   
    
    const handleSubmit = async (e)=>
    {
        
        e.preventDefault();
        try 
        {
          const response = await axios.post('http://localhost:8000/api/register/',JSON.stringify({first_name:Fname,last_name:Lname,password:pwd,identification_number:idNum,email:email}),  {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
            
        });
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            setFname('');
            setPwd('');
            setLname('');
            setIdNum('');
            setconfirmPwd('');
            setValidEmail('');

          
        }
        catch(err)
        {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus()
        }
    }



    

  return (
    <>
    {success ? (<div>Sucessss</div>) : (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center   py-12 px-6 lg:px-8">
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='font-semibold text-center text-2xl text-gray-900'>Create your account</h2>
        <p className='text-center'>
            Already registered?
            <Link to="/login" className='font-medium text-indigo-800 hover:text-indego-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-1'>Sign in</Link>
            {/* <a href="#" className='font-medium text-indigo-800 hover:text-indego-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-1' >Sign in</a> */}

        </p>
        <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>{errMsg}</p>
        </div>
  
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white shadow rounded-lg  py-8 px-6 sm:px-10'>
            <form className='space-y-6 mb-0' onSubmit={handleSubmit}>
                <div className='flex space-x-3'>
                    <div>
                        <label htmlFor='firstname' className='block font-medium text-sm text-gray-700'>First name</label>
                        <div class="mt-1">
                        <input id='firstname' type="text"  aria-invalid={validFname ? "false" : "true"}  aria-describedby="fnote" autoComplete="off" onChange={(e) =>setFname(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                        </div>
                        <p id='fnote' className={Fname &&  !validFname ? "mr-1 text-xs bg-red-600 text-white py-1 px-1  bottom-10 " : "hidden"}>
                            4 to 24 alphabets.<br />
                         </p>
                    </div>
                    <div>
                        <label htmlFor='lasttname' className='block font-medium text-sm text-gray-700'>Last name</label>
                        <div class="mt-1">
                        <input id='lastname' type="text"   aria-invalid={validLname ? "false" : "true"} aria-describedby="Lnote"  autoComplete="off" onChange={(e)=>setLname(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                        </div>
                        <p id='Lnote' className={Lname &&  !validLname ? "mr-1 text-xs bg-red-600 text-white py-1 px-1  bottom-10" : "hidden"}>
                            only alphabets.<br />
                         </p>
                    </div>
                </div>


            <div>
                <label htmlFor='idcard' className='block font-medium text-sm text-gray-700' >ID card</label>
                <div class="mt-1">
                <input type='text' id='idcard' autoComplete='off' aria-invalid={validId ? "false" : "true"} aria-describedby='inote' onChange={(e) =>setIdNum(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                </div>
                <p id='inote' className={idNum && !validId ? "mr-1 text-xs bg-red-600 text-white py-1 px-1  bottom-10" : "hidden"}>
                            enter a valid id.<br />
                         </p>
            </div>


            <div>
                <label htmlFor='email' className='block font-medium text-sm text-gray-700' >Email</label>
                <div class="mt-1">
                <input type='email' id='email' autoComplete='off' aria-invalid={validEmail ? "false" : "true"} aria-describedby='emnote' onChange={(e) =>setEmail(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                </div>
                <p id='emnote' className={email && !validEmail ? "mr-1 text-xs bg-red-600 text-white py-1 px-1  bottom-10" : "hidden"}>
                            enter a valid email.<br />
                         </p>
            </div>
            
    
            <div>
                <label htmlFor='password' className='block font-medium text-sm text-gray-700' >Password</label>
                <div class="mt-1">
                <input type='password' id='password' aria-invalid={pwd ? "false" : "true"} aria-describedby='pnote' onChange={(e)=>setPwd(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                <p id='pnote' className={pwd && !validPwd ? "mr-1 text-xs bg-red-600 text-white py-1 px-1  bottom-10 " : "hidden" }>8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span></p>
                </div>
            </div>
            <div>
                <label htmlFor='cpassword' className='block font-medium text-sm text-gray-700' >Confirm Password</label>
                <div class="mt-1">
                <input type='password' id='cpassword' aria-invalid={confirmPwd ? "false" : "true"} aria-describedby='cnote' onChange={(e) => setconfirmPwd(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                </div>
                <p id='cnote' className={confirmPwd && !validconfirmPwd ?  "mr-1 text-xs bg-red-600 text-white py-1 px-1  bottom-10 " : "hidden" }>password doesn't match</p>
            </div>
            <div>
                <button  type="submit" className='w-full justify-center bg-indigo-600 px-4 border-transparent font-medium text-sm shadow-sm text-white py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md' >Sign up</button>
            </div>
            </form>
        </div>
        </div>
  </div>
)}
  </>
  
  )

}

export default Register