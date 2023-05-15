// src/components/CartItem.js
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import {Link} from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Grid container direction="row">
          <Grid item xs={4}>
            <CardMedia
              component="img"
              alt={item.name}
              height="140"
              width="100%"
              image={item.image}
              title={item.name}
            />
            <Grid container direction="column"></Grid>
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <CardActions>
                <Link to="/payment">
                <Button size="small" style={{borderRadius: 30, backgroundColor: '#2196f3', color: 'white'}} color="primary" onClick={() => { /* TODO: Implement buy now functionality */ }}>
                  Buy Now
                </Button>
                </Link>
                <Button size="small" style={{color: 'red'}} color="secondary" startIcon={<Delete />} onClick={() => { /* TODO: Implement remove functionality */ }}>
                  Remove
                </Button>
              </CardActions>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CartItem;
