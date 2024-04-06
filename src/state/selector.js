import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProducts = state => state.products || initialState;

const makeSelectCreateProduct = () => {
    createSelector(
        selectProducts, 
        productsState => productsState.products
    );
}

const makeSelectGetProducts = () => {
    createSelector(
        selectProducts, 
        productsState => productsState.products
    );
}

const makeSelectUpdateProduct = () => {
    createSelector(
        selectProducts, 
        productsState => productsState.products
    );
}

const makeSelectDeleteProduct = () => {
    createSelector(
        selectProducts, 
        productsState => productsState.products
    );
}

export {
    selectProducts,
    makeSelectCreateProduct,
    makeSelectGetProducts,
    makeSelectUpdateProduct,
    makeSelectDeleteProduct
}