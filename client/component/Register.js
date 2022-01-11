const Register = () =>{
    return(
        <>
        {/* Register */}
        <form className='h-1/4 w-1/3 py-16 bg-gradient-to-r from-indigo-300 to-cyan-500 rounded shadow-cyan-500/50 '>
        <p className='m-4 underline-offset-2 text-center text-xl'>Register</p>
            <div name='register' className='text-center'>
            <label>Name: </label>
            <input placeholder='name' name='name'></input>
            <br/><br/>
            <label>Email ID: </label>
            <input placeholder='email-id' name='email'></input>
            <br/><br/>
            <label>4-digit pin: </label>
            <input placeholder='4-digit-pin' typeof='number' name='pin'></input><br/><br/>
            <button className='border-solid border-2 border-light-yellow-300 px-4 py-2 rounded-md bg-yellow-400'>Submit</button>
            </div>
        </form>
        </>
    )
}

export default Register;