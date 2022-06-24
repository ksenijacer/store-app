import AppProducts from "../pages/AppProducts";

class ProductService {
    constructor(){
        this.products = [
            {id:1, name: 'Computer', category: 'Electronics'},
            {id:1, name: 'Teddy Bear', category: 'Toys'},
            {id:3, name: 'Sofa', category: 'Furniture'},
            {id:4, name: 'iPhone Case', category: 'Accessories'}
        ]
    }
    getAll() {
     return [...this.products];
    }



  }


  export default new ProductService;