import React from 'react';
import {
    AppBar,
    Box,
    Container,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from './data';

const Categories = () => {
    const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
    ];

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#ff5722' }}>
                <Toolbar>
                    <Link to="/home">
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 0.1, paddingRight: '175px' }}
                        >
                            Pabio
                        </Typography>
                    </Link>
                    <Link to="/search">
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                    </Link>
                    <Link to="/cart">
                        <IconButton color="inherit">
                            <ShoppingCartIcon />
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
            <Container>
                <Box mt={2}>
                    <Typography variant="h5" component="h2">
                        Furniture Categories
                    </Typography>
                    <Grid container spacing={4}>
                        {uniqueCategories.map((category, index) => {
                            const item = products.find(
                                (product) => product.category === category
                            );
                            return (
                                <Grid
                                    item
                                    key={index}
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                >
                                    <ProductCard item={item} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Categories;
