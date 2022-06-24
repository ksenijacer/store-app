import ProductService from "../services/ProductService";
import ProductsTable from "../components/ProductsTable";


function AppProducts() {
    const [products, setProducts] = useState(ProductService.getAll());
    const [search, setSearch] = useState('');


    const productsList = () =>
    products.filter((product) => product.name.toLowerCase().includes(search));
    return (
        <div>
            <h3>
            List of products:
            </h3>
    
            <ul>
                {customers.map((products, index) => (
                    <li key={index}>{products.name}, {products.category}
                    </li>
                    ))}
                    
            </ul>
        </div>
    )

}

export default AppProducts;