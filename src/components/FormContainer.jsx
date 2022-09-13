import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Warning from './Warning';
import Spinner from './Spinner';

const FormContainer = ({customer, loading}) => {

    const navigate = useNavigate();

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

    const handleSubmit = async (values) => {
        try {

            let response;

            if (customer.id) {
                const url = `${import.meta.env.VITE_API_URL}/${customer.id}`;

                response = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            } else {
                const url = import.meta.env.VITE_API_URL;

                response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }

            const result = await response.json();
            console.log(result);

            navigate('/customers');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        loading ? <Spinner /> : (
            <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
                <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>{customer.name ? "Edit Customer" : "Add Customer"}</h1>
                <Formik
                    initialValues={{
                        name: customer?.name ?? "", // if whatever is after ? returns undefined, then return whatever is after ?? 
                        // name: customer.name ? customer.name : "", // Alternatively we could use a ternary 
                        business: customer?.business ?? "",
                        email: customer?.email ?? "",
                        phone: customer?.phone ?? "",
                        comments: customer?.comments ?? ""
                    }}
                    enableReinitialize={true} // Prop to allow reinitialize the component with the initial values, false by default
                    onSubmit={ async (values, {resetForm}) => {
                        // Stop the workflow until the handleSubmit function is completey done
                        await handleSubmit(values);

                        resetForm();
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
                                    value={customer.name ? "Save Changes" : "Add Customer"}
                                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
                                />
                            </Form>
                    )}}        
                </Formik>
            </div>
        )
    )
}

// We can set up props by default for our component so that these props are used in case there are no passed props
// In this case, this will avoid error since the newCustomer component does not pass any props
FormContainer.defaultProps = {
    customer: {},
    loading: false
}

export default FormContainer;