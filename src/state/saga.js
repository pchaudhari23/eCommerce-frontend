import { call, put, select } from 'redux-saga/effects';
import {
    createProduct,
    getProducts,
    updateProductReq,
    deleteProductReq
} from '../network/api';

export function* doGetProducts({}) {
    try {
      const response = yield call(getProducts, {});
      if (response.status === 200) {
        yield put(getProductsSuccess(response.data));
      } else {
        yield put(getProductsFailure(response.data));
      }
    } catch (ex) {
      console.log('error: ', ex);
      yield put(getProductsFailure({}));
    }
}

export function* doCreateProduct({ payload }) {
    try {
      const response = yield call(createProduct, { payload });
      if (response.status === 200) {
        yield put(createProductSuccess(response.data));
      } else {
        yield put(createProductFailure(response.data));
      }
    } catch (ex) {
      console.log('error: ', ex);
      yield put(createProductFailure({}));
    }
}

export function* doUpdateProduct({}) {
    try {
      const response = yield call(updateProductReq, {});
      if (response.status === 200) {
        yield put(updateProductSuccess(response.data));
      } else {
        yield put(updateProductFailure(response.data));
      }
    } catch (ex) {
      console.log('error: ', ex);
      yield put(updateProductFailure({}));
    }
}

export function* doDeleteProduct({}) {
    try {
      const response = yield call(deleteProductReq, {});
      if (response.status === 200) {
        yield put(deleteProductSuccess(response.data));
      } else {
        yield put(deleteProductFailure(response.data));
      }
    } catch (ex) {
      console.log('error: ', ex);
      yield put(deleteProductFailure({}));
    }
}