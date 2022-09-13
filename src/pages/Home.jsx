import {useEffect, useState} from 'react';
import Customer from '../components/Customer';

const Home = () => {

    const [customers, setCustomers] = useState([]);

    useEffect( () => {
        const getCustomersAPI = async function() {
            const url = import.meta.env.VITE_API_URL;
            try {
                const response = await fetch(url);
                const result = await response.json();

                setCustomers(result);
            } catch (error) {
                console.log(error);
            }
        }

        getCustomersAPI();
    }, [] );

    const handleDelete = async (id) => {
        const approval = confirm('Are you sure you want to delete this customer?')

        if(approval) {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`;
                // console.log(url);
                const response = await fetch(url, {
                    method: 'DELETE'
                });
                await response.json();

                // The instace is now delete but our app still show the previous list of customers until it is the page is reloaded and a new get request is made. Two options then:
                // 1. reload the page to issue a new get request against the now up-to-date db
                // location.reload(); // bad performance
                // 2. Simply update the state that contains the customers to display them in real time
                const updatedCustomersList = customers.filter(customer => customer.id !== id);
                setCustomers(updatedCustomersList);

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Customers</h1>
            <p className='mt-3'>Manage your customers</p>
            
            <table className="w-full mt-5 table-auto shadow bg-white">
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Name</th>
                        <th className='p-2'>Contact</th>
                        <th className='p-2'>Business</th>
                        <th className='p-2'>Options</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        customers.map(customer => (
                            <Customer 
                                key={customer.id}
                                customer={customer}
                                handleDelete={handleDelete}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Home;