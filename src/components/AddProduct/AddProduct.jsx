import { useState } from 'react';

const AddProduct = (props) => {
    const initialFormState = { 
        product_id:'',
        product_name:'',
        product_description:'',
        product_category:'',
        product_price:''
    }
    
    const [product, setProduct] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target
        setProduct({ ...product, [name]: value })
    }

    return (
        <div>
            <label>Add Product</label>
                <form
                    onSubmit={event => {
                        event.preventDefault()
                        if (!product.product_name || !product.product_description || !product.product_category || !product.product_price) return
                        props.addProduct(product)
                        setProduct(initialFormState)
                    }}
                >
                    <div>
                        <label>Product Name: </label>
                        <input type="text" name="product_name" value={product.product_name} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Product Description: </label>
                        <input type="text" name="product_description" value={product.product_description} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Product Category: </label>
                        <input type="text" name="product_category" value={product.product_category} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Product Price: </label>
                        <input type="text" name="product_price" value={product.product_price} onChange={handleInputChange}/>
                    </div>
                    <button className="">Add Product</button>
                </form>
        </div>
    );
}

export default AddProduct