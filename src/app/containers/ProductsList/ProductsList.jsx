import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#472fb5',
        color: '#ffffff',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#F5F5F5',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const ProductsList = (props) => {
    return (
        <Box>
            <Typography display={'flex'} justifyContent={'center'}>Products List</Typography>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }} >
                    <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Product Name</StyledTableCell>
                                <StyledTableCell align="left">Description</StyledTableCell>
                                <StyledTableCell align="left">Catergory</StyledTableCell>
                                <StyledTableCell align="left">Price</StyledTableCell>
                                <StyledTableCell align="left">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.products.length > 0 ? (
                                props.products.map((product) => (
                                    <StyledTableRow key={product.product_id}>
                                        <StyledTableCell component="th" scope="row">{product.product_name}</StyledTableCell>
                                        <StyledTableCell align="left">{product.product_description}</StyledTableCell>
                                        <StyledTableCell align="left">{product.product_category}</StyledTableCell>
                                        <StyledTableCell align="left">{product.product_price}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            <EditIcon color='info' onClick={() => { props.editRow(product) }} />
                                            <DeleteIcon color='error' onClick={() => props.deleteProduct(product.product_id)} />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))) : (
                                <StyledTableRow>
                                    <StyledTableCell align="left">
                                        <Typography>No Products</Typography>
                                    </StyledTableCell>
                                </StyledTableRow>
                            )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default ProductsList;