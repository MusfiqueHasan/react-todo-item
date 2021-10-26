import React, { useRef } from 'react';

const Login = () => {

    const passwordRef = useRef()
    const emailRef = useRef()
    const handleSubmit = e => {

    }
    return (
        <div>
            <div className=" my-20 flex flex-col justify-center items-center">
                <h2 className=" text-3xl font-extrabold mb-4 border-b-4 border-green-400">Login</h2>
                <form onSubmit={handleSubmit} className=" w-3/6 flex flex-col items-center border-2 py-14 shadow-lg">

                    <input
                        type="email"
                        placeholder="email.."
                        ref={emailRef}
                        className="w-4/6 border-2 py-2 px-4 mb-5 rounded-md"
                    />
                    <input
                        type="password"
                        placeholder="password.."
                        ref={passwordRef}
                        className=" w-4/6 border-2 py-2 px-4 mb-2 rounded-md"
                    />
                    <input type="submit" className=" px-7 py-2 bg-green-600 text-white rounded-lg cursor-pointer" value="LOGIN" />
                </form>
            </div>
        </div>
    );
};

export default Login;