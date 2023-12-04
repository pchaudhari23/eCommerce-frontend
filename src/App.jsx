import { useState, useEffect } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';

const App = () => {
    const [products, setProducts] = useState([])
    const [editing, setEditing] = useState(false)
    
    const initialFormState = { 
        product_id:"",
        product_name:"",
        product_description:"",
        product_category:"",
        product_price:""
    }
    
    const [currentProduct, setCurrentProduct] = useState(initialFormState);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch('src/assets/Products.json');
        const productsData = await response.json();
        setProducts(productsData);
    }
    
    const addProduct = (product) => {
        product.product_id = JSON.stringify(Math.floor(Math.random() * 90000 + 10000))
        setProducts([...products, product])
    }

    const deleteProduct = (product_id) => {
        setProducts(products.filter((product) => product.product_id !== product_id))
    }

    const editRow = (product) => {
        setEditing(true)
        setCurrentProduct({
            product_id:product.product_id,
            product_name:product.product_name,
            product_description:product.product_description,
            product_category:product.product_category,
            product_price:product.product_price
        })
    }

    const updateProduct = (id, updatedProduct) => {
        setEditing(false)
        setProducts(products.map((product) => (product.product_id === id ? updatedProduct : product)))
    }

    return (
        <div className="container">
            <h1>Products</h1>
            <div>
            {editing ? 
                <EditProduct setEditing={setEditing} currentProduct={currentProduct} updateProduct={updateProduct}/>  
                : <AddProduct addProduct={addProduct} /> 
            }
            
            <ProductsList products={products} editRow={editRow} deleteProduct={deleteProduct} />
            </div>
        </div>
    )
}

export default App