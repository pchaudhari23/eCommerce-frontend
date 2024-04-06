import { useState, useEffect } from 'react';
import ProductsList from './containers/ProductsList/ProductsList';
import AddProduct from './containers/AddProduct/AddProduct';
import EditProduct from './containers/EditProduct/EditProduct';
import { getProducts, createProduct, updateProductReq, deleteProductReq } from '../network/api';

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
        const response = await getProducts();
        setProducts(response);
    }
    
    const addProduct = async (product) => {
        product.product_id = JSON.stringify(Math.floor(Math.random() * 90000 + 10000))
        setProducts([...products, product])
        await createProduct();
    }

    const deleteProduct = async (product_id) => {
        setProducts(products.filter((product) => product.product_id !== product_id))
        await deleteProductReq(product_id)
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

    const updateProduct = async (id, updatedProduct) => {
        setEditing(false)
        setProducts(products.map((product) => (product.product_id === id ? updatedProduct : product)))
        await updateProductReq(id)
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