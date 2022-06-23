import { useLayoutEffect, useState } from "react"
import React from 'react';


function AppCustomers() {
    const [customers, setCustomers] = useState([
        {id:1, name: 'Ksenija', age: 23},
        {id:2, name: 'Nikola', age: 25},
        {id:3, name: 'Katarina', age: 28},
        {id:4, name: 'Dunja', age: 21}
    ]);


    const handleRemove = (index) => {
        setCustomers([...customers.slice(0, index), ...customers.slice(index + 1)])
    }
    return (
        <div>
            <h3>
            List of customers:
            </h3>
    
            <ul>
                {customers.map((customer, index) => (
                    <li key={index}>{customer.name}-{customer.age}
                    <button onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                    ))}
                    
            </ul>
            
        </div>
    );
}

export default AppCustomers;