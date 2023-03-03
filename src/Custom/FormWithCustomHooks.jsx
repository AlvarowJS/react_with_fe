import React, { useEffect, useState } from 'react'
import useForm from '../hooks/useForm'

const FormWithCustomHooks = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    
    // const { username, email, password } = formState

    return (
        <div>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" name='username' value={username} onChange={onInputChange} />

            </div>
            <div>
                <label htmlFor="">email</label>
                <input type="email" name='email' value={email} onChange={onInputChange} />
            </div>
            <div>
                <label htmlFor="">pasword</label>
                <input type="password" name='password' value={password} onChange={onInputChange} />
            </div>

            <button onClick={ onResetForm }>Borrar</button>
        </div>
    )
}

export default FormWithCustomHooks