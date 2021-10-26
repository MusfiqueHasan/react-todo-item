import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateContact = () => {


    const { todo } = useParams()
    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    })

    useEffect(() => {

        const url = `http://localhost:5000/users/${todo}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { ...user ,name: updatedName };
        setUser(updatedUser)
    }
    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = {...user , email: updatedEmail };
        setUser(updatedUser)
    }
    const handlePhoneNumberChange = e => {
        const updatedPhoneNumber = e.target.value;
        const updatedUser = {...user , phoneNumber: updatedPhoneNumber };
        setUser(updatedUser)
    }
    const handleUpdate = (e) => {
        const url = `http://localhost:5000/users/${todo}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfully')
                    setUser({})
                }
            })

        e.preventDefault()


    }

    return (
        <div className=" my-20 flex flex-col justify-center items-center">
            <h2 className=" text-3xl font-extrabold mb-4 border-b-4 border-green-400">Update Contact</h2>
            <form onSubmit={handleUpdate} className=" w-3/6 flex flex-col items-center border-2 py-14 shadow-lg">
                <input
                    type="text"
                    placeholder="name.."
                    onChange={handleNameChange}
                    value={user.name}
                    className=" w-4/6 border-2 py-2 px-4 mb-2 rounded-md"
                />

                <input
                    type="email"
                    placeholder="email.."
                    onChange={handleEmailChange}
                    value={user.email}
                    className="w-4/6 border-2 py-2 px-4 mb-2 rounded-md"
                />
                <input
                    type="text"
                    placeholder="phoneNumber.."
                    onChange={handlePhoneNumberChange}
                    value={user.phoneNumber}
                    className="w-4/6 border-2 py-2 px-4 mb-5 rounded-md"
                />

                <input type="submit" className=" px-7 py-2 bg-green-600 text-white rounded-lg cursor-pointer" value="UPDATE" />
            </form>
        </div>
    );
};

export default UpdateContact;