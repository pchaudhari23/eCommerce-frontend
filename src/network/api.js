import { axiosInstance } from './interceptor';

export const createProduct = async (product) => {
    try {
        const response = await axiosInstance.post('/addproduct', product);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const updateProductReq = async (id) => {
    try {
        const response = await axiosInstance.put(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getProducts = async () => {
    try {
        const response = await axiosInstance.get('/products');
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteProductReq = async (id) => {
    try {
        const response = await axiosInstance.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

// app.get('/',
// app.post('/addproduct',
// app.get('/products',
// app.get('/products/:id',
// app.put('/products/:id',
// app.patch('/products/:id',
// app.delete('/products/:id',