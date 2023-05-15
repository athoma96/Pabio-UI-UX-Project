import React from 'react';
import { Link } from 'react-router-dom';
import { products, topDeals, mostWanted } from './data';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import './HomePage.css';

const HomePage = () => {

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
      <div>
        <main>
          <div className="furniture-categories">
            <h2>Furniture Categories</h2>
            <div className="furniture-categories-container">
              <div className='furniture-categories-items'>
                {products.map((product) => (
                  <Link to="/themes">
                  <div key={product.id} className="category-item">
                    <img src={product.image} alt={product.title} />
                    <p>{product.category}</p>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>



          <div className="top-deals">
            <h2>Pabio Top Deals</h2>
            <p>Check out our best deals on furniture</p>
            <div className="top-deals-items-container">
              <div className="top-deals-items">
                {topDeals.map((deal) => (
                  <Link to={`/product/${deal.id}`}>
                    <div key={deal.id} className="deal-item">
                      <img src={deal.image} />
                      <h3>{deal.title}</h3>
                      <p>${deal.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="most-wanted">
            <h2>Pabio Most Wanted</h2>
            <p>Explore Our Most Wanted Furnitures</p>
            <div className="most-wanted-items-container">
              <div className="most-wanted-items">
                {mostWanted.map((item) => (
                  <Link to={`/product/${item.id}`}>
                    <div key={item.id} className="most-wanted-item">
                      <img src={item.image} />
                      <h3>{item.title}</h3>
                      <p>${item.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


export default HomePage;
