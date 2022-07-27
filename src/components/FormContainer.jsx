import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Warning from './Warning';

const FormContainer = () => {

    const newCustomerSchema = Yup.object().shape({
            name: Yup.string()
                        .min(2, 'Name Too Short') // We can chain multiple validations 
                        .max(40, 'Name Too Long')
                        .required('Required'), // A default message will be display if no argument is specified
            business: Yup.string()
                        .required(),
            email: Yup.string()
                        .email()
                        .required(),
            phone: Yup.number()
                        .positive('Phone must be a valid number')
                        .integer('Phone must be a valid number')
                        .typeError('Phone must be a valid number'), // Some field objects like phone does not take an argument to write the message so we can use the typeError object to overwrite the default message
    })

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

                validationSchema={newCustomerSchema}
            >

                {(data) => { // This arroy function takes all the data from Formik as a parameter
                    // console.log(data);
                    // console.log(data.errors);
                    // console.log(data.touched);
                    const { errors, touched } = data; //apply destructuring
                    return (
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
                                {/* <ErrorMessage name='name' /> // Formik comes with this tool to show an Error Message if the validation is not succeed*/}

                                { errors.name && touched.name ? (
                                    <Warning>{errors.name}</Warning>
                                ) : null }  
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

                                { errors.business && touched.business ? (
                                    <Warning>{errors.business}</Warning>
                                ) : null } 
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

                                { errors.email && touched.email ? (
                                    <Warning>{errors.email}</Warning>
                                ) : null } 
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

                                { errors.phone && touched.phone ? (
                                    <Warning>{errors.phone}</Warning>
                                ) : null } 
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
                )}}        
            </Formik>
        </div>
    )
}

export default FormContainer;