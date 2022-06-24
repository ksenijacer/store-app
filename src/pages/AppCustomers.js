import { useLayoutEffect, useState } from "react"
import React from 'react';
import CustomerService from "../services/CustomerService";


function AppCustomers() {
    const [customers, setCustomers] = useState(CustomerService.getAll());



    const [newCustomer, setNewCustomer] = useState({
        name: '',
        age: ''
      });


    const handleRemove = (index) => {
        setCustomers([...customers.slice(0, index), ...customers.slice(index + 1)])
    }

    const handleNameChange = (e) => {
        setNewCustomer({
          ...newCustomer,
          name: e.target.value
        })
      }

      const handleAgeChange = (e) => {
        setNewCustomer({
          ...newCustomer,
          age: e.target.value
        })
      }

    const addCustomer = (e) => {
        e.preventDefault();
    
        setCustomers([...customers, newCustomer])
        setNewCustomer({
          name: '',
          age: ''
        });
      }
    return (
        <div>
            <h3>
            List of customers:
            </h3>
    
            <ul>
                {customers.map((customer, index) => (
                    <li key={index}>{customer.name}, {customer.age}
                    <button onClick={() => handleRemove(index)}>Remove</button>
                    </li>
                    ))}
                    
            </ul>
            
    <div>
        <div>
            <h3>New customer</h3>
            <form className="form" onSubmit={addCustomer}>
                <input required type="text" value={newCustomer.name}  placeholder="Name" onChange={handleNameChange}/>
                <input required type="text" value={newCustomer.age}  placeholder="Age" onChange={handleAgeChange}/>
                <button>Add</button>
            </form>
        </div>
    </div>
</div>
    );
}

export default AppCustomers;