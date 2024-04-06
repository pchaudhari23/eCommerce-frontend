import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Box from '@mui/system/Box';

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
        <form
            onSubmit={(event) => {
                event.preventDefault()
                props.updateProduct(product.product_id, product)
            }}
        >
            <Box display="flex" flexDirection='column' alignItems={'center'}>
                <Typography display={'flex'} justifyContent={'center'} >Edit Product</Typography>
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
                        type='text'
                        variant='outlined'
                        label='Product Price'
                        margin='normal'
                        name='product_price'
                        value={product.product_price}
                        onChange={handleInputChange}
                    />

                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
                        <Button variant="contained" color="info" type='submit'>Save</Button>
                        <Button variant="contained" color="warning" onClick={() => props.setEditing(false)}>Cancel</Button>
                    </Box>
                </Box>
            </Box>
        </form>
    );
}

export default EditProduct