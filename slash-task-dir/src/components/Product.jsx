import React from 'react';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tooltip from '@mui/material/Tooltip';

export const ProductCard = ({ product }) => {
  return (
    <Tooltip title={`${product.name}`}>
      <div className="slider-card text-center bg-gray-200">
        <div className="slider-card-image flex">
          {product.ProductVariations[0] &&
            product.ProductVariations[0].ProductVarientImages[0] && (
              <>
                <img
                  src={
                    product.ProductVariations[0].ProductVarientImages[0]
                      .image_path
                  }
                  alt="Image 1"
                  className="w-1/2 "
                />
                <img
                  src={
                    product.ProductVariations[0].ProductVarientImages[1]
                      .image_path
                  }
                  alt="Image 2"
                  className="w-1/2 "
                />
              </>
            )}
        </div>

        <p className="slider-card-title">{product.name}</p>
        <Rating
          className="slider_rating"
          name="half-rating-read"
          defaultValue={product.product_rating}
          precision={0.5}
          size="small"
          readOnly
        />

        <p className="slider-card-price ">
          {product.ProductVariations[0] && product.ProductVariations[0].price}$
        </p>

        <p className="slider-card-description">{product.description}</p>
        <p className="slider-card-category">
          {product.SubCategories && product.SubCategories.name}
        </p>
      </div>
    </Tooltip>
  );
};
