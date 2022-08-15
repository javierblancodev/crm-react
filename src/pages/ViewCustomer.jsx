import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewCustomer = () => {

    const [customer, setCustomer] = useState({});

    // console.log(useParams());
    const { id } = useParams();

    useEffect(() => {
        const getCustomerAPI = async () => {
            try {
                const url = `http://localhost:4000/customers/${id}`
                const response = await fetch(url);
                const result = await response.json();
                setCustomer(result);
            } catch(error) {
                console.log(error);
            }
        }
        getCustomerAPI();
    }, []);

    return (
        <div>

            <h1 className='font-black text-4xl text-blue-900'>View Customer: {customer.name}</h1>
            <p className='mt-3'>About the customer</p>

            {customer.name && (
                <p className='text-4xl text-gray-600 mt-10'>
                    <span className='text-gray-800 uppercase font-bold'>Name: </span>{customer.name}
                </p>                
            )}            

            {customer.email && (
                <p className='text-2xl text-gray-600 mt-4'>
                    <span className='text-gray-800 uppercase font-bold'>Email: </span>{customer.email}
                </p>
            )}

            {customer.phone && (
                <p className='text-2xl text-gray-600 mt-4'>
                    <span className='text-gray-800 uppercase font-bold'>Phone: </span>{customer.phone}
                </p>
            )}

            {customer.business && (
                <p className='text-2xl text-gray-600 mt-4'>
                    <span className='text-gray-800 uppercase font-bold'>Business: </span>{customer.business}
                </p>
            )}

            {customer.comments && (
                <p className='text-2xl text-gray-600 mt-4'>
                    <span className='text-gray-800 uppercase font-bold'>Comments: </span>{customer.comments}
                </p>
            )}

        </div>
    ) 
}

export default ViewCustomer;