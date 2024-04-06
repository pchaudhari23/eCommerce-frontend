import produce from 'immer';
import {
    GET_PRODUCTS,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from './constants';

export const initialState = {
    loading: false,
    error: false,
    products: []
}

const productsReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case GET_PRODUCTS:
                break;
            case CREATE_PRODUCT:
                break;
            case UPDATE_PRODUCT:
                break;
            case DELETE_PRODUCT:
                break;
        }
    });

export default productsReducer;