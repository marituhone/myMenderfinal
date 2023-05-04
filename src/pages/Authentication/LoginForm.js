import React from 'react';
import { useRef,useState,useEffect,useContext} from 'react';
import AuthContext from "../../providers/AuthContext";
import axios from '../../services/api';
import { Link } from 'react-router-dom';
// const LOGIN_URL = '/auth'
function LoginForm() {
    const { setAuth } = useContext(AuthContext)
    const errRef = useRef();
    const [idNum,setIdNum] = useState('');
    const [pwd,setPwd] = useState('');
    const [errMsg,setErrMsg]= useState('');
    const [success,setSuccess] = useState(false)
    
    useEffect(()=>{
        setErrMsg('');
    },[idNum,pwd])
    const handleSubmit = async (e) =>
            {
              e.preventDefault(); 
              try{
                const response = await axios.post('/api/login/',JSON.stringify({idNum,pwd}),
                {
                    headers:{'Content-Type':'application/json'},
                    withCredentials:true
                }
                );
              console.log(JSON.stringify(response?.data));

              setSuccess(true);
              }
              catch (err)
              {
               if(!err?.response)
               {
                setErrMsg('No server response')
               }
               else if(err.response ?.status === '400')
               {
                   setErrMsg('Missing username or password');
               }
               else if(err.response ?.status === '401')
               {
                    setErrMsg('unautherized')
               }
               else{
                  setErrMsg('LOginfaild')
               }
              }
              
            }
  return (
    <div className=''>
     	{success ? (<div>logged in</div>) :(
    <div className='flex items-center justify-center border-gray-400 shadow-lg min-h-screen min-w-[700px]'>
        <div className='px-16 sm:px-10 py-8 mt-4 bg-white shadow-lg'>
        <p ref={errRef} className='{errMsg ? "errmsg" : "offscreen"} aria-live="assertive'>{errMsg}</p>
        <h2 className='text-2xl font-bold text-center'>Login</h2>
        <p className='p-2 '>Not registered yet? <Link to="/" className='font-medium text-indigo-800 hover:text-indego-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ml-1'> Sign Up</Link> </p>
        <form onSubmit={handleSubmit} className='space-y-6 mb-0 p-2'>
                <div className='mt-4'>
                        <div>
                            <label className="block" htmlFor="id">ID Number</label>
                            <input type="text" placeholder="ID Number" id='id' autoComplete="off" required value={idNum} onChange={(e)=>setIdNum(e.target.value)} className="w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                        <div className='mt-4'>
                            <label className="block" htmlFor="Password">Password</label>
                            <input type="password" placeholder="Password" id='password' required value={pwd}  onChange={(e)=>setPwd(e.target.value)}   className="w-full border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
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