import {
    GET_PRODUCTS,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from './constants';

export function getProducts() {
    return { type: GET_PRODUCTS };
}

export function createProduct(payload) {
    return { type: CREATE_PRODUCT, payload };
}

export function updateProduct(payload) {
    return { type: UPDATE_PRODUCT, payload };
}

export function deleteProduct(payload) {
    return { type: DELETE_PRODUCT, payload };
}