import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [pin, setPin] = useState();



    return(
        <>
        {/* Login */}
            <form className='h-1/4 w-1/3 py-16 bg-gradient-to-r from-green-300 to-blue-400 text-center '>
            <p className='m-4 underline-offset-2 text-center text-xl' >Login</p>
            <label>Email ID: </label>
            <input name='email'></input><br/><br/>
            <label>Pin with added captcha digits</label>
            <input></input><br/><br/>
            <button className='border-solid border-2 border-light-yellow-300 px-4 py-2 rounded-md bg-yellow-400'>Submit</button>
            </form>
        </>
    )
}

export default Login;