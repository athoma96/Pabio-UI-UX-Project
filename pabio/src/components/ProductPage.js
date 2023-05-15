import React from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Box, Button, Container, Grid, IconButton, Paper, Rating, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { topDeals, mostWanted } from './data';
import { Link } from 'react-router-dom';

const ProductImage = styled('img')`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const ProductPage = () => {
  const { id } = useParams();
  const allItems = [...topDeals, ...mostWanted];
  const item = allItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#ff5722" }}>
        <Toolbar>
          <Link to="/home">
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.1, paddingRight: '175px' }}>
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
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>

            <ProductImage src={item.image} alt={item.title} />

          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2">
              {item.title}
            </Typography>
            <Rating value={item.rating} precision={0.5} readOnly />
            <Typography variant="h6" component="p">
              {item.price ? `$${item.price.toFixed(2)}` : "Price not available"}
            </Typography>
            <Typography>
              Dimensions: {item.dimensions}
            </Typography>
            <Link to="/cart">
            <Button variant="contained" color="primary" sx={{ mt: 1 }}>
              Add to Cart
            </Button>
            </Link>
            <Link to="/payment">
            <Button variant="contained" color="secondary" sx={{ mt: 1, ml: 1 }}>
              Rent Now
            </Button>
            </Link>
            <Paper sx={{ mt: 2, p: 2 }}>
              <Typography variant="h6" component="h3">
                Product Description
              </Typography>
              <Typography>
                This is a sample product description
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductPage;
