// src/components/ProductCard.js
import React from 'react';
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { Rating } from '@mui/material';

const ProductCard = ({ item }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={item.title}
                    height="200"
                    image={item.image}
                    title={item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {item.category}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;
