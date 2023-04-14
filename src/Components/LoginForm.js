import React from 'react'
import { useRef,useState,useEffect,useContext} from 'react'
import AuthContext from "../context/AuthProvider";
import axios from '../api/axios';
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
    <div>
     	{success ? (<div>logged in</div>) :(
    <div className='flex items-center justify-center bg-slate-300 min-h-screen min-w-[700px]'>
        <div className='px-12 py-6 mt-4 bg-white shadow-lg'>
        <p ref={errRef} className='{errMsg ? "errmsg" : "offscreen"} aria-live="assertive'>{errMsg}</p>
        <h2 className='text-2xl font-bold text-center'>Login</h2>
        <p className='p-2 '>Not registered yet? <a className='text-blue-600'> Sign In</a></p>
        <form onSubmit={handleSubmit}>
                <div className='mt-4'>
                        <div>
                            <label className="block" htmlFor="id">ID Number</label>
                            <input type="text" placeholder="ID Number" id='id' autoComplete="off" required value={idNum} onChange={(e)=>setIdNum(e.target.value)} className="w-full p-1.5 mt-2 border rounded-md" />
                        </div>
                        <div className='mt-4'>
                            <label className="block" htmlFor="Password">Password</label>
                            <input type="password" placeholder="Password" id='password' required value={pwd}  onChange={(e)=>setPwd(e.target.value)}   className="w-full p-1.5 mt-2 border rounded-md" />
                        </div>
                        <div className='mt-4'>
                            <button className='bg-sky-700 p-1.5 w-full rounded hover:bg-sky-500'>Login</button>
                        </div>
                        <div className=' mt-3'>
                            <a className='text-right cursor-pointer'><p>Forget Password?</p></a>
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