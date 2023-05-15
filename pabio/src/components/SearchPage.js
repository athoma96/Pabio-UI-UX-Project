import React from 'react';
import './SearchPage.css';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';


const SearchPage = () => {
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
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Search furniture..." />
          <button>Search</button>
        </div>
        <div className="popular-searches">
          <h2>Popular Searches</h2>
          <div className="search-item">
            <Link to="/search_result">
            <a href="#">Dining Room</a>
            </Link>
          </div>
          <div className="search-item">
            <Link to="/search_result">
            <a href="#">Outdoor</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
