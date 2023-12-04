const ProductsList = (props) => {
    return (
        <div>
            <label>Products List</label>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.length > 0 ? 
                        (
                            props.products.map((product) => (
                                <tr key={product.product_id}>
                                    <td>{product.product_name}</td>
                                    <td>{product.product_description}</td>
                                    <td>{product.product_category}</td>
                                    <td>{product.product_price}</td>
                                    <td>
                                        <button className=""  onClick={() => {props.editRow(product)}}>Edit</button>
                                        <button className="" onClick={() => props.deleteProduct(product.product_id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>No Products</td>  
                            </tr>
                        )
                    }
                    
                    
                </tbody>
            </table>
        </div>
    );
}

export default ProductsList