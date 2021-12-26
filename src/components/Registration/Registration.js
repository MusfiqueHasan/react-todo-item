import React, { useRef } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router';
import { addToDb } from '../../localStorage/localDb';
const Registration = () => {
    const passwordRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const history = useHistory()

    const handleSubmit = e => {

        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name, email, password }
        axios.post('http://localhost:5000/registration', newUser)
            .then(res => {
                // console.log(res.data);
                addToDb(email)
                if (res.data.insertedId) {
                    // alert('added successfully')
                    e.target.reset()
                }
                history.push('/addContact')

            })


        e.preventDefault()
    };
    return (
        <div>
            <div className=" my-20 flex flex-col justify-center items-center">
                <h2 className=" text-3xl font-extrabold mb-4 border-b-4 border-green-400">Registration</h2>
                <form onSubmit={handleSubmit} className=" w-3/6 flex flex-col items-center border-2 py-14 shadow-lg">

                    <input
                        type="text"
                        placeholder="name.."
                        ref={nameRef}
                        className="w-4/6 border-2 py-2 px-4 mb-5 rounded-md"
                    />
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
                    <input type="submit" className=" px-7 py-2 bg-green-600 text-white rounded-lg cursor-pointer" value="Registration" />
                </form>
            </div>
        </div>
    );
};

export default Registration;
