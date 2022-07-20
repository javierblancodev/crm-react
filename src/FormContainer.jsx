import React from 'react'
import { Formik, Form, Field } from 'formik'

const FormContainer = () => {
    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Add customer</h1>
            <Formik>
                <Form className='mt-10'>
                    <div className='mb-4'>
                        <label className='text-gray-800' htmlFor='name'>Name: </label>
                        <Field 
                            id="name"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Customer's Name"
                        />
                        <Field />
                    </div>

                    <div className='mb-4'>
                        <label className='text-gray-800' htmlFor='business'>Business: </label>
                        <Field 
                            id="business"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Business Name"
                        />
                        <Field />
                    </div>

                    <div className='mb-4'>
                        <label className='text-gray-800' htmlFor='email'>Email: </label>
                        <Field 
                            id="email"
                            type="email"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Email"
                        />
                        <Field />
                    </div>

                    <div className='mb-4'>
                        <label className='text-gray-800' htmlFor='phone'>Phone Number: </label>
                        <Field 
                            id="phone"
                            type="tel"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Phone Number"
                        />
                        <Field />
                    </div>

                    <div className='mb-4'>
                        <label className='text-gray-800' htmlFor='comments'>Comments: </label>
                        <Field
                            as="textarea"
                            id="comments"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50 h-40"
                            placeholder="Phone Number"
                        />
                        <Field />
                    </div>

                    <input 
                        type="submit" 
                        value="Add Customer"
                        className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
                    />

                </Form>
            </Formik>
        </div>
    )
}

export default FormContainer;