import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Alert from '../utils/alert';
import { ProductCard } from './Product';
import { ErrorPage } from '../utils/errorPage';

const ProductsPage = ({ products, message, statusCode }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    severity: 'success',
    message: 'Welcome to our products 🥰',
  });

  // State for filtering options
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');
  const [maxRating, setMaxRating] = useState('');

  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  // Function to filter products based on the current filter values
  const applyFilters = () => {
    const filtered = products.filter(
      (product) =>
        (minPrice === '' ||
          product.ProductVariations[0].price >= parseFloat(minPrice)) &&
        (maxPrice === '' ||
          product.ProductVariations[0].price <= parseFloat(maxPrice)) &&
        (minRating === '' || product.product_rating >= parseFloat(minRating)) &&
        (maxRating === '' || product.product_rating <= parseFloat(maxRating))
    );

    setFilteredProducts(filtered);
  };

  // Function to handle filter apply button click
  const handleFilterApply = () => {
    applyFilters();
    setShowAlert(true); // You can customize this part based on your needs
    setAlertInfo({
      severity: 'success',
      message: 'Filters applied successfully!',
    });
  };

  if (!products) {
    return (
      <>
        <Skeleton animation="wave" height="50px" style={{ margin: '0 20px' }} />
        <Skeleton animation="wave" height="50px" style={{ margin: '0 20px' }} />
        <Skeleton animation="wave" height="50px" style={{ margin: '0 20px' }} />
      </>
    );
  }

  if (statusCode !== 200) {
    return <ErrorPage errorMessage={message}></ErrorPage>;
  }

  return (
    <div>
      {showAlert && (
        <Alert
          severity={alertInfo.severity}
          title={alertInfo.title}
          message={alertInfo.message}
        />
      )}

      {/* Filtering options */}
      <div className="m-3 ">
        <TextField
          className="mr-3"
          label="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <TextField
          label="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="m-3">
        <TextField
          className="mr-3"
          label="Min Rating"
          type="number"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
        />
        <TextField
          label="Max Rating"
          type="number"
          value={maxRating}
          onChange={(e) => setMaxRating(e.target.value)}
        />
      </div>

      {/* Button to apply filters */}
      <Button onClick={handleFilterApply} className="mx-8" >
        Apply Filters
      </Button>

      {/* Display filtered products */}
      <div className="showproducts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-10 my-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))
        ) : (
          <p>No products match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export { ProductsPage };
