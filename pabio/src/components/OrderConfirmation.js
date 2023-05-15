import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const OrderConfirmationPage = () => {
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
        <div className="order-confirmation-page" style={{ backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div className="card" style={{height: '150px', width: '350px', textAlign: 'center', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)', borderRadius: '30px', backgroundColor: '#57C5B6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '70px'}}>
                <div className="card-body">
                    <h2 className="card-title" style={{ color: '#000000', fontSize:'20px' }}>Thank you, we have received your order</h2>
                </div>
            </div>
            <h2 style={{ color: '#333', marginBottom: '10px', fontSize: '20px' }}>Recommended for you</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="horizontal-card" style={{ width: '180px', height: '150px', backgroundColor: '#fefefe', borderRadius: '10px', textAlign: 'center' }}>
                    <img src="https://www.thespruce.com/thmb/i428zoKWoFbwAXPB6KkZyQ-6cWU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roundhillbestaccentchairsforsmallspaces-1bfebd7d87bf42bea3b8445f39236eac.jpg" alt="Product 1" style={{ width: '100%', height: '105px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                    <div className="card-body">
                        <h3 className="card-title" style={{ color: '#333', marginBottom: '5px', fontSize:'15px'}}>Chair</h3>
                    </div>
                </div>
                <div className="horizontal-card" style={{ width: '180px', height: '150px', backgroundColor: '#fefefe', borderRadius: '10px', textAlign: 'center', marginLeft: '20px' }}>
                    <img src="https://rb.gy/n6duy" alt="Product 2" style={{ width: '100%', height: '105px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                    <div className="card-body">
                        <h3 className="card-title" style={{ color: '#333', marginBottom: '5px', fontSize:'15px' }}>Yello Sofa</h3>
                    </div>
                </div>
            </div>
            <h2 style={{ color: '#333', marginBottom: '10px', fontSize: '20px' }}>Most Popular</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="horizontal-card" style={{ width: '180px', height: '150px', backgroundColor: '#fefefe', borderRadius: '10px', textAlign: 'center' }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRa1b9tNAifX04V4zRPiJrAg9a4DKKFqdIk4dAOvOoc5d_xXYqCUPO1mUVqJHNPQP-ieo&usqp=CAU" alt="Product 1" style={{ width: '100%', height: '105px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                    <div className="card-body">
                        <h3 className="card-title" style={{ color: '#333', marginBottom: '5px', fontSize:'15px'}}>Comfy White Chair</h3>
                    </div>
                </div>
                <div className="horizontal-card" style={{ width: '180px', height: '150px', backgroundColor: '#fefefe', borderRadius: '10px', textAlign: 'center', marginLeft: '20px' }}>
                    <img src="https://cdn.home-designing.com/wp-content/uploads/2017/08/white-and-wooden-chair-office-600x596.jpg" alt="Product 2" style={{ width: '100%', height: '105px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
                    <div className="card-body">
                        <h3 className="card-title" style={{ color: '#333', marginBottom: '5px', fontSize:'15px' }}>Desk and Chair set </h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OrderConfirmationPage;