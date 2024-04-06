import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Box from '@mui/system/Box';

const AddProduct = (props) => {
    const initialFormState = {
        product_id: '',
        product_name: '',
        product_description: '',
        product_category: '',
        product_price: ''
    }

    const [product, setProduct] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target
        setProduct({ ...product, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!product.product_name || !product.product_description || !product.product_category || !product.product_price) return
                props.addProduct(product)
                setProduct(initialFormState)
            }}
        >
            <Box display="flex" flexDirection='column' alignItems={'center'}>
                <Typography display={'flex'} justifyContent={'center'}>Add Product</Typography>
                <Box
                    display="flex"
                    flexDirection='column'
                    border={'1.5px solid black'}
                    borderRadius={1}
                    padding={2.5}
                    margin={2.5}
                    width={'75%'}
                >
                    <TextField
                        type='text'
                        variant='outlined'
                        label='Product Name'
                        margin='normal'
                        name='product_name'
                        value={product.product_name}
                        onChange={handleInputChange}
                    />

                    <TextField
                        type='text'
                        variant='outlined'
                        label='Product Description'
                        margin='normal'
                        name='product_description'
                        value={product.product_description}
                        onChange={handleInputChange}
                    />

                    <TextField
                        type='text'
                        variant='outlined'
                        label='Product Category'
                        margin='normal'
                        name='product_category'
                        value={product.product_category}
                        onChange={handleInputChange}
                    />

                    <TextField
                        type='number'
                        variant='outlined'
                        label='Product Price'
                        margin='normal'
                        name='product_price'
                        value={product.product_price}
                        onChange={handleInputChange}
                    />

                    <Button variant="contained" color="success" type='submit'>Add Product</Button>

                </Box>
            </Box>
        </form>
    );
}

export default AddProduct