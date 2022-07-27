import React from 'react';
import FormContainer from '../components/FormContainer';

const NewCustomer = () => {
    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>New Customer</h1>
            <p className='mt-3'>Fill the form below to add a new customer</p>
            <FormContainer />
        </>
    )
}

export default NewCustomer;