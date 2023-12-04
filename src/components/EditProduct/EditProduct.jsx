import { useState, useEffect } from 'react';

const EditProduct = (props) => {
    const [product, setProduct] = useState(props.currentProduct)

    useEffect(() => {
        setProduct(props.currentProduct)
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setProduct({ ...product, [name]: value })
    }

    return (
        <div>
            <label>Edit Product</label>
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        props.updateProduct(product.product_id, product)
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
                    <div>
                        <button className="">Save</button>
                        <button className="" onClick={() => props.setEditing(false)}>Cancel</button>
                    </div>
                </form>
        </div>
    );
}

export default EditProduct