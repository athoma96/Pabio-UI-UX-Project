import React, { useState } from 'react';
import './PaymentPage.css';
import {Link} from "react-router-dom";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const renderCreditCardFields = () => {
        return (
            <div>
                <div>
                    <input
                        placeholder='Card Number'
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(event) => setCardNumber(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        placeholder='Card Holders Name'
                        type="text"
                        id="cardHolder"
                        value={cardHolder}
                        onChange={(event) => setCardHolder(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        placeholder='Expiry Date'
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(event) => setExpiryDate(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        placeholder='CVV'
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(event) => setCvv(event.target.value)}
                        required
                    />
                </div>
            </div>
        );
    };

    const renderPaymentFields = () => {
        switch (paymentMethod) {
            case 'creditCard':
                return renderCreditCardFields();
            case 'paypal':
            case 'applePay':
            default:
                return null;
        }
    };

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
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Payment Method</label>
                    <div>
                        <label htmlFor="creditCard">
                            <input
                                type="radio"
                                id="creditCard"
                                name="paymentMethod"
                                value="creditCard"
                                checked={paymentMethod === 'creditCard'}
                                onChange={handlePaymentMethodChange}
                            />
                            Credit Card
                        </label>
                        <label htmlFor="paypal">
                            <input
                                type="radio"
                                id="paypal"
                                name="paymentMethod"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={handlePaymentMethodChange}
                            />
                            Paypal
                        </label>
                        <label htmlFor="applePay">
                            <input
                                type="radio"
                                id="applePay"
                                name="paymentMethod"
                                value="applePay"
                                checked={paymentMethod === 'applePay'}
                                onChange={handlePaymentMethodChange}
                            />
                            Apple Pay
                        </label>
                    </div>
                </div>
                <div>
                    {renderPaymentFields()}
                </div>
                <div>
                    <input
                        placeholder='Street Address'
                        type="text"
                        id="streetAddress"
                        value={streetAddress}
                        onChange={(event) => setStreetAddress(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        placeholder='Zip Code'
                        type="text"
                        id="zipCode"
                        value={zipCode}
                        onChange={(event) => setZipCode(event.target.value)}
                        required
                    />
                </div>
                <Link to="/confirm">
                <button type="submit">Submit Payment</button>
                </Link>
            </form>
        </div>
        </div>
    );
};

export default PaymentPage;