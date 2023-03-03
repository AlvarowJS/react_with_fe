import React from 'react'
import { useCounter, useFetch } from '../hooks'
import LoadingQuote from './LoadingQuote'
import Quote from './Quote'
// import useCounter from '../hooks/useCounter'
// import { useFetch } from '../hooks/useFetch'

const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    console.log({ data, isLoading, hasError })

    // Convertira el !!data de undefined -> true -> false 
    const { quote, author } = !!data && data[0];

    return (
        <div>
            <h1> Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading ?
                    <LoadingQuote />
                    :
                    <Quote />

            }

            <button onClick={() => increment()} className='btn btn-primary' disabled={isLoading}>Next quote</button>


        </div>
    )
}

export default MultipleCustomHooks