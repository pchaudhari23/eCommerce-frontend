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
    try {
      const response = await getProducts();
      if (response && response.length > 0) {
        setProducts(response);
      } else {
        throw new Error("No products found");
      }
    } catch (error) {
      alert(error);
    }
  };

  const addProduct = async (product) => {
    try {
      const response = await createProduct(product);
      if (response) {
        // setProducts([...products, product]);
        await fetchData();
      } else {
        throw new Error("Error in adding new product");
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteProduct = async (_id) => {
    try {
      if (!_id) {
        throw new Error("Product ID is undefined");
      }
      const response = await deleteProductReq(_id);
      if (response) {
        setProducts(products.filter((product) => product._id !== _id));
      } else {
        throw new Error("Error in deleting product");
      }
    } catch (error) {
      alert(error);
    }
  };

  const editRow = (product) => {
    console.log("product", product);
    try {
      if (!product?._id) {
        throw new Error("EDITROW: Product ID is undefined");
      }
      setEditing(true);
      setCurrentProduct({
        _id: product._id,
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
      });
    } catch (error) {
      alert(error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      if (!id) {
        throw new Error("UPDATEPRODUCT: Product ID is undefined");
      }
      const response = await updateProductReq(id, updatedProduct);
      if (response) {
        setEditing(false);
        setProducts(
          products.map((product) =>
            product._id === id ? updatedProduct : product
          )
        );
      } else {
        throw new Error("Error in deleting product");
      }
    } catch (error) {
      alert(error);
    }
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
