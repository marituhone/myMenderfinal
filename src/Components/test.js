import React, { useState } from 'react'

function LoginForm({Login,error}) {
    const [details,setDetails] = useState({Id:"",password:""});
   
    const submitHandler=(e) =>
    {
        e.preventDefault();
        Login(details);
    }

  return (
    <div className='flex items-center justify-center bg-slate-300 min-h-screen min-w-[700px]'>
        <div className='px-12 py-6 mt-4 bg-white shadow-lg'>
            <h2 className='text-2xl font-bold text-center'>Login</h2>
              {(error!="")?(<div>{error}</div>):""}
            <p className='p-2 '>Not registered yet? <a className='text-blue-600'> Sign In</a></p>
            <form onSubmit={submitHandler}>
                <div className='mt-4'>
                        <div>
                            <label class="block" for="id">ID Number</label>
                            <input type="text" placeholder="ID Number" className="w-full p-1.5 mt-2 border rounded-md" onChange={e=>setDetails({...details,Id:e.target.value})} value={details.Id}/>
                        </div>
                        <div className='mt-4'>
                            <label class="block" for="Password">Password</label>
                            <input type="text" placeholder="Password" className="w-full p-1.5 mt-2 border rounded-md" onChange={e => setDetails({...details,password:e.target.value})} value={details.password}/>
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
  )
}

export default LoginForm