import { Link } from 'react-router-dom';

function Register() {
    const deadLInk = (event) => {
        event.preventDefault()
    }

    return (
        <div className='h-screen overflow-y-hidden bg-black'>
            <div className="grid place-items-center md:mx-40 pb-72 h-full p-10 md:p-20">
                <p className="login-p md:absolute md:top-40 text-2xl font-bold text-white mb-5">GERICHT</p>
                <form>
                    <input className='bg-transparent border p-2 px-5 outline-none w-full md:w-96 text-white mb-5' type="text" placeholder='Username' /> <br />
                    <input className='bg-transparent border p-2 px-5 outline-none w-full md:w-96 text-white mb-5' type="email" placeholder='Email' /> <br />
                    <input className='bg-transparent border p-2 px-5 outline-none w-full md:w-96 text-white mb-5' type="password" placeholder='Password' /> <br />
                    <input className='bg-transparent border p-2 px-5 outline-none w-full md:w-96 text-white' type="password" placeholder='Confirm Password' /> <br /><br />
                    <div class="flex items-center mb-6">
                        <input type="checkbox" name="remember" className="form-checkbox h-5 w-5 text-green-500" />
                        <label htmlFor="remember" className="ml-2 block text-gray-700 text-sm leading-5">
                            Remember Me
                        </label>
                    </div>
                    <button onClick={deadLInk} className='bg-goldcolor text-black p-2 px-5 hover:opacity-75 hover:text-white' type="submit">Register</button>
                     <hr className='opacity-30 mt-5'/>
                    <p className='text-center text-white opacity-80 mt-5'>Have an account already? <Link to='/login' className='text-goldcolor'>Login</Link> Here</p>
                </form>
            </div>
        </div>
    )
}

export default Register;