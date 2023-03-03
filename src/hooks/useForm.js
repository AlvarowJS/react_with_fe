import React, { useState } from 'react'
// {
//     username: '',
//     email: '',
//     password: ''
// }
const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm)

    // desustructuracion

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const onResetForm = () => {
        setFormState(initialForm)
    }
    // Trabjar con objetos
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

export default useForm