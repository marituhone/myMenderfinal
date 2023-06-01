// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {registerUser, setError } from '../../actions/authActions';
import {setMessage,clearMessage} from '../../actions/message'
import { useDispatch, useSelector } from 'react-redux';


 const Name_REGEX= /^[A-z][A-z]{3,23}$/;
 const Id_REGEX = /^bole\/\d{5}\/\d{4}$/ //begin with a-z follow by forward slash then digit of 4 then slash then digit of 2
 const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; //must contain at least one lower case one upper case and number and special character and the length should be 8-24
 const EMAIL_REGEX = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9._-]+)\.([a-zA-Z]{2,5})$/;

//  const REGISTER_URL = '/register';
function Register() {  
    // const errRef = useRef('')
    const dispatch = useDispatch()
    // const error = useSelector(state => state.auth.error);
    const error = useSelector(state => state.auth.error);
    const message = useSelector(state => state.message.message);
    const [first_name, setFname] = useState('');
    const [validFname,setValidFname] = useState(false);

    const [last_name, setLname] = useState('');
    const [validLname,setvalidLname] = useState(false);


    const [password,setPassword] = useState('');
    const [validPassword,setValidPassword] = useState(false);

    const [password2,setPassword2] = useState('');
    const [validPassword2,setvalidPassword2] = useState(false);


    const [identification_number,setIdentificationNumber]= useState('');
    const [validId,setValidId] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] = useState(false);


    // const [errMsg,setErrMsg] =useState('');
    // const [success,setSuccess] =useState(false);


    useEffect (() =>
    {
        const fresult = Name_REGEX.test(first_name);
        console.log(fresult);
        setValidFname(fresult);
        //setValidFname(Name_REGEX.test(Fname))

    },[first_name])

    useEffect(()=>
    {
        const emailresult = EMAIL_REGEX.test(email);
        console.log(emailresult);
        setValidEmail(emailresult);
    },[email])

    useEffect (() =>
    {
        const lresult = Name_REGEX.test(last_name);
        console.log(lresult);
        setvalidLname(lresult);
        //setValidLname(Name_REGEX.test(Lname))

    },[last_name])

    useEffect (()=>
    {
        const result = Id_REGEX.test(identification_number);
        console.log(result);
        console.log(identification_number);
        setValidId(result);
        //setValidId(Name_REGEX.test(idnum))
    },[identification_number])

    useEffect(()=>
    {
      const result = PWD_REGEX.test(password); 
      console.log(result);
      console.log(password)
      setValidPassword(result);
      const match = password === password2;
      setvalidPassword2(match);
      console.log(password2)
      
    },[password,password2])


    
    
   
    
    const handleSubmit = () => {
        dispatch(registerUser ({ identification_number, first_name,last_name,email, password,password2 }))
          .then(() => {
            dispatch(setMessage('Registration successful'));
            console.log('Registration successful!');
            
            setFname('');
            setLname('');
            setPassword('');
            setPassword2('');
            setIdentificationNumber('');
            setEmail('');

          })
          .catch(() => {
            dispatch(setMessage(''));
            dispatch(setMessage(error.response.data.message));
          });
      };
    
      const handleCloseMessage = () => {
        dispatch(clearMessage());
      };
    



    

  return (
    <>
 
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center   py-12 px-6 lg:px-8">
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='font-semibold text-center text-2xl text-gray-900'>Create your account</h2>
        <p className='text-center'>
            Already registered?
            {error && <div className="error">{error}</div>}
            {message && <div className="message">{message}</div>}
            <Link to="/login" className='font-medium text-indigo-800 hover:text-indego-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-1'>Sign in</Link>
            {/* <a href="#" className='font-medium text-indigo-800 hover:text-indego-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-1' >Sign in</a> */}

        </p>
        {/* <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>{errMsg}</p> */}
        </div>
  
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white shadow rounded-lg  py-8 px-6 sm:px-10'>
            <form className='space-y-6 mb-0'>
                <div className='flex space-x-3'>
                    <div>
                        <label htmlFor='firstname' className='block font-medium text-sm text-gray-700'>First name</label>
                        <div class="mt-1">
                        <input id='firstname' type="text"  aria-invalid={validFname ? "false" : "true"}  aria-describedby="fnote" autoComplete="off" value={first_name} onChange={(e) =>setFname(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                        </div>
                        <p id='fnote' className={first_name &&  !validFname ? "mr-1 text-xs text-black py-1 px-1  bottom-10 " : "hidden"}>
                            4 to 24 alphabets.<br />
                         </p>
                    </div>
                    <div>
                        <label htmlFor='lasttname' className='block font-medium text-sm text-gray-700'>Last name</label>
                        <div class="mt-1">
                        <input id='lastname' type="text"   aria-invalid={validLname ? "false" : "true"} aria-describedby="Lnote"  autoComplete="off" value={last_name} onChange={(e)=>setLname(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                        </div>
                        <p id='Lnote' className={last_name &&  !validLname ? "mr-1 text-xs text-black py-1 px-1  bottom-10" : "hidden"}>
                            only alphabets.<br />
                         </p>
                    </div>
                </div>


            <div>
                <label htmlFor='idcard' className='block font-medium text-sm text-gray-700' >ID card</label>
                <div class="mt-1">
                <input type='text' id='idcard' autoComplete='off' aria-invalid={validId ? "false" : "true"} aria-describedby='inote'value={identification_number} onChange={(e) =>setIdentificationNumber(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                </div>
                <p id='inote' className={identification_number && !validId ? "mr-1 text-xs text-black py-1 px-1  bottom-10" : "hidden"}>
                            enter a valid id.<br />
                         </p>
            </div>


            <div>
                <label htmlFor='email' className='block font-medium text-sm text-gray-700' >Email</label>
                <div class="mt-1">
                <input type='email' id='email' autoComplete='off' aria-invalid={validEmail ? "false" : "true"} aria-describedby='emnote' value={email} onChange={(e) =>setEmail(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                </div>
                <p id='emnote' className={email && !validEmail ? "mr-1 text-xs text-black py-1 px-1  bottom-10" : "hidden"}>
                            enter a valid email.<br />
                         </p>
            </div>
            
    
            <div>
                <label htmlFor='password' className='block font-medium text-sm text-gray-700' >Password</label>
                <div class="mt-1">
                <input type='password' id='password' aria-invalid={password ? "false" : "true"} aria-describedby='pnote' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                <p id='pnote' className={password && !validPassword ? "mr-1 text-xs  text-black py-1 px-1  bottom-10 " : "hidden" }>8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span></p>
                </div>
            </div>
            <div>
                <label htmlFor='password2' className='block font-medium text-sm text-gray-700' >Confirm Password</label>
                <div class="mt-1">
                <input type='password' id='cpassword' aria-invalid={password2 ? "false" : "true"} aria-describedby='cnote' value={password2}    onChange={(e) => setPassword2(e.target.value)} className='w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' />
                </div>
                <p id='cnote' className={password2 && !validPassword2 ?  "mr-1 text-xs text-black py-1 px-1  bottom-10 " : "hidden" }>password doesn't match</p>
            </div>
            <div>
                <Link to="/register">
                <button  type="submit" onClick={handleSubmit} className='w-full justify-center bg-indigo-600 px-4 border-transparent font-medium text-sm shadow-sm text-white py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md' >Sign up</button>
                </Link>
            </div>
            </form>
        </div>
        </div>
  </div>

  </>
  
  )

}

export default Register