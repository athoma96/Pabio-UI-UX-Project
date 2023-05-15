// src/components/SearchResults.js
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
import { topDeals, mostWanted } from './data';

const SearchResults = () => {
    // Combine topDeals and mostWanted arrays as search results
    const searchResults = [...topDeals, ...mostWanted];

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
                        Search Results
                    </Typography>
                    <Grid container spacing={4}>
                        {searchResults.map((item) => (
                            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                                <ProductCard item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default SearchResults;
