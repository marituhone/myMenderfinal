import React from 'react';
import { useRef,useState,useEffect,useContext} from 'react';
import AuthContext from "../../providers/AuthContext";

import { Link } from 'react-router-dom';
import axios from '../../api/axios';
const LOGIN_URL = '/auth'
function LoginForm() {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();
    const [identification_number,setIdentificationNumber] = useState('');
    const [password,setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    useEffect(()=>{
        setErrMsg('');
    },[identification_number,password])
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data =
        {
            identification_number,
            password,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/auth/login/',
                JSON.stringify(data ),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
          
            setIdentificationNumber('');
            setPassword('');
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
  return (
    <div className=''>
     	{success ? (<div>logged in</div>) :(
    <div className='flex items-center justify-center border-gray-400 shadow-lg min-h-screen '>
        <div className='px-16 sm:px-10 py-8 mt-4 bg-white shadow-lg sm:mx-auto sm:w-full sm:max-w-md'>
        <p ref={errRef} className='{errMsg ? "errmsg" : "offscreen"} aria-live="assertive'>{errMsg}</p>
        <h2 className='text-2xl font-bold text-center'>Login</h2>
        <p className='p-2 '>Not registered yet? <Link to="/register" className='font-medium text-indigo-800 hover:text-indego-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-1'> Sign Up</Link> </p>
        <form onSubmit={handleSubmit} className='space-y-6 mb-0 p-2'>
                <div className='mt-4'>
                        <div>
                            <label className="block" htmlFor="id">ID Number</label>
                            <input type="text" placeholder="ID Number" id='id' autoComplete="off" required value={identification_number} onChange={(e)=>setIdentificationNumber(e.target.value)} className="w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                        <div className='mt-4'>
                            <label className="block" htmlFor="Password">Password</label>
                            <input type="password" placeholder="Password" id='password' required value={password}  onChange={(e)=>setPassword(e.target.value)}   className="w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                        <div className='mt-4'>
                            <button className='w-full justify-center bg-indigo-600 px-4 border-transparent font-medium text-sm shadow-sm text-white py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md'>Login</button>
                        </div>
                        <div className=' mt-3'>
                            <a className='text-right cursor-pointer font-medium text-indigo-800 hover:text-indego-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-1'><p>Forget Password?</p></a>
                        </div>

                </div>

            </form>
           
            
            </div>
   
        
    </div>
     )}
   </div>
  )
}

export default LoginForm