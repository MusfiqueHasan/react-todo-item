import React, { useRef } from 'react';
import { nanoid } from 'nanoid'
import axios from 'axios'
import { addToDb, getStoredCart } from '../../localStorage/localDb';


const AddContact = ({ loginUser }) => {

    const savedData = getStoredCart()
    console.log(savedData);

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneNumberRef = useRef()


    const handleSubmit = e => {
        const id = nanoid();
        const name = nameRef.current.value;
        const phoneNumber = phoneNumberRef.current.value;
        const email = emailRef.current.value;
        const newUser = {id, name, email, phoneNumber }

        axios.post('http://localhost:5000/addContact', { newUser, savedData })
            .then(res => {
                addToDb(newUser)
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully')
                    e.target.reset()
                }

            })


        e.preventDefault()
    };
    return (
        <div className=" my-20 flex flex-col justify-center items-center">
            <h2 className=" text-3xl font-extrabold mb-4 border-b-4 border-green-400">Add Contact</h2>
            <form onSubmit={handleSubmit} className=" w-3/6 flex flex-col items-center border-2 py-14 shadow-lg">
                <input
                    type="text"
                    placeholder="name.."
                    ref={nameRef}
                    className=" w-4/6 border-2 py-2 px-4 mb-2 rounded-md"
                />

                <input
                    type="email"
                    placeholder="email.."
                    ref={emailRef}
                    className="w-4/6 border-2 py-2 px-4 mb-2 rounded-md"
                />
                <input
                    type="text"
                    placeholder="phoneNumber.."
                    ref={phoneNumberRef}
                    className="w-4/6 border-2 py-2 px-4 mb-5 rounded-md"
                />

                <input type="submit" className=" px-7 py-2 bg-green-600 text-white rounded-lg cursor-pointer" value="ADD" />
            </form>
        </div>
    );
};

export default AddContact;