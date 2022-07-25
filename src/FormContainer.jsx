import React from 'react'
import { Formik, Form, Field } from 'formik'

const FormContainer = () => {

    function handleSubmit(values) {
        console.log(values);
    }

    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Add customer</h1>
            <Formik
                initialValues={{
                    name: '',
                    business: '',
                    email: '',
                    phone: '',
                    comments: ''
                }}

                onSubmit={(values) => {
                    handleSubmit(values);
                }}
            >

                {() => (
                    <Form className='mt-10'>
                        <div className='mb-4'>
                            <label className='text-gray-800' htmlFor='name'>Name: </label>
                            <Field 
                                id="name"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Customer's Name"
                                name="name"
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='text-gray-800' htmlFor='business'>Business: </label>
                            <Field 
                                id="business"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Business Name"
                                name="business"
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='text-gray-800' htmlFor='email'>Email: </label>
                            <Field 
                                id="email"
                                type="email"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Email"
                                name="email"
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='text-gray-800' htmlFor='phone'>Phone Number: </label>
                            <Field 
                                id="phone"
                                type="tel"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Phone Number"
                                name="phone"
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='text-gray-800' htmlFor='comments'>Comments: </label>
                            <Field
                                as="textarea"
                                id="comments"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                placeholder="Phone Number"
                                name="comments"
                            />
                        </div>

                        <input 
                            type="submit" 
                            value="Add Customer"
                            className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
                        />
                    </Form>
                )}           
            </Formik>
        </div>
    )
}

export default FormContainer;