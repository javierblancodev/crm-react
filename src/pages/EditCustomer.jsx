import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormContainer from '../components/FormContainer';

const EditCustomer = ({}) => {

    const [customer, setCustomer] = useState({});
    const [loading, setLoading] = useState(true);

    // console.log(useParams());
    const { id } = useParams();

    useEffect(() => {
        // setLoading(!loading);
        const getCustomerAPI = async () => {
            try {
                const url = `http://localhost:4000/customers/${id}`
                const response = await fetch(url);
                const result = await response.json();
                console.log(result);
                setCustomer(result);
            } catch(error) {
                console.log(error);
            }
            setLoading(!loading);
        }
        getCustomerAPI();
    }, []);

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Edit Customer</h1>
            <p className='mt-3'>Use this form to edit customer's details</p>
            
            {customer?.name ? 
                <FormContainer customer={customer} loading={loading}/> : 
                <p>Customer id no valid</p>}
        </>
    )
}

export default EditCustomer;