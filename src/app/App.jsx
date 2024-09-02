import { useState, useEffect } from "react";
import ProductsList from "./containers/ProductsList/ProductsList";
import AddProduct from "./containers/AddProduct/AddProduct";
import EditProduct from "./containers/EditProduct/EditProduct";
import {
  getProducts,
  createProduct,
  updateProductReq,
  deleteProductReq,
} from "../network/api";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(false);

  const initialFormState = {
    _id: "",
    name: "",
    description: "",
    category: "",
    price: "",
  };

  const [currentProduct, setCurrentProduct] = useState(initialFormState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  const addProduct = async (product) => {
    setProducts([...products, product]);
    await createProduct(product);
  };

  const deleteProduct = async (_id) => {
    setProducts(products.filter((product) => product._id !== _id));
    await deleteProductReq(_id);
  };

  const editRow = (product) => {
    setEditing(true);
    setCurrentProduct({
      _id: product._id,
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
    });
  };

  const updateProduct = async (id, updatedProduct) => {
    setEditing(false);
    setProducts(
      products.map((product) => (product._id === id ? updatedProduct : product))
    );
    await updateProductReq(id, updatedProduct);
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <div>
        {editing ? (
          <EditProduct
            setEditing={setEditing}
            currentProduct={currentProduct}
            updateProduct={updateProduct}
          />
        ) : (
          <AddProduct addProduct={addProduct} />
        )}

        <ProductsList
          products={products}
          editRow={editRow}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
};

export default App;
