import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/system/Box";

const EditProduct = (props) => {
  const [product, setProduct] = useState(props.currentProduct);

  useEffect(() => {
    setProduct(props.currentProduct);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateProduct(product._id, product);
      }}
    >
      <Box display="flex" flexDirection="column" alignItems={"center"}>
        <Typography display={"flex"} justifyContent={"center"}>
          Edit Product
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
            type="text"
            variant="outlined"
            label="Product Price"
            margin="normal"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />

          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
          >
            <Button variant="contained" color="info" type="submit">
              Save
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => props.setEditing(false)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default EditProduct;
