import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/system/Box";

const AddProduct = (props) => {
  const initialFormState = {
    name: "",
    description: "",
    category: "",
    price: "",
  };

  const [product, setProduct] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !product.name ||
          !product.description ||
          !product.category ||
          !product.price
        )
          return;
        props.addProduct(product);
        setProduct(initialFormState);
      }}
    >
      <Box display="flex" flexDirection="column" alignItems={"center"}>
        <Typography display={"flex"} justifyContent={"center"}>
          Add Product
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          border={"1.5px solid black"}
          borderRadius={1}
          padding={2.5}
          margin={2.5}
          width={"75%"}
        >
          <TextField
            type="text"
            variant="outlined"
            label="Product Name"
            margin="normal"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />

          <TextField
            type="text"
            variant="outlined"
            label="Product Description"
            margin="normal"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />

          <TextField
            type="text"
            variant="outlined"
            label="Product Category"
            margin="normal"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />

          <TextField
            type="number"
            variant="outlined"
            label="Product Price"
            margin="normal"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />

          <Button variant="contained" color="success" type="submit">
            Add Product
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AddProduct;
