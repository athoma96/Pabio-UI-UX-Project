// src/components/Cart.js
import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import './Cart.css';
import CartItem from './CartItem';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Replace this with fetched cart items
  const cartItems = [
    { id: 1, name: 'Recliner', description: 'A comfortable chair', price: 50, image: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=100804389-847&recipeName=680' },
    { id: 2, name: 'Bookshelf', description: 'A nice bookshelf', price: 120, image: 'https://secure.img1-cg.wfcdn.com/im/01742772/compr-r85/1910/191086328/corrigan-studio-3-layer-cube-corner-bookshelf-bamboo-corner-bookcase-storage-book-stand.jpg' },
    { id: 3, name: 'Wardrobe', description: 'A minimal wardrobe', price: 200, image: 'https://www.ikea.com/us/en/images/products/idanaes-wardrobe-dark-brown-stained__0939228_pe794473_s5.jpg?f=s' },
    { id: 2, name: 'Coffee Table', description: 'A modern coffee table', price: 180, image: 'https://i.etsystatic.com/17622763/r/il/91132c/3527305689/il_570xN.3527305689_2gb4.jpg' }
  ];

  // Calculate the total cost
  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
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
      <Container>
        <Button>
          Cart
        </Button>
        <Grid container spacing={4}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Grid>
        <div className="cart-total">
          <Typography variant="h5">Total: {totalCost}</Typography>
          <Link to="/payment">
          <Button variant="contained" style={{ backgroundColor: '#ff5722', color: 'white', borderRadius: 30 }} color="primary" onClick={() => { /* TODO: Implement checkout */ }}>
            Checkout
          </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
