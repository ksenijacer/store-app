import AppCustomers from "../pages/AppCustomers";

class CustomersService {
    constructor(){
        this.customers = [
            {id:1, name: 'Ksenija', age: 23},
            {id:2, name: 'Nikola', age: 25},
            {id:3, name: 'Katarina', age: 28},
            {id:4, name: 'Dunja', age: 21}
        ]
    }
    getAll() {
     return [...this.customers];
    }



  }


  export default new CustomersService;