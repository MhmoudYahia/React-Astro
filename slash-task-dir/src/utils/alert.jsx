import React from 'react';
import  Alert from '@mui/material/Alert';
import  AlertTitle from '@mui/material/AlertTitle';
import '../styles/alert.css';

const MyAlert = ({ severity, title, message }) => {
  return (
    <div className="fixed left-1/2 top-20 transform -translate-x-1/2 z-50 alert">
      <Alert className="box-shadow-xl" severity={severity}>
        {title && (
          <AlertTitle className="font-semibold uppercase">{title}</AlertTitle>
        )}
        <div className="font-bold capitalize">{message}</div>
      </Alert>
    </div>
  );
};

export default MyAlert;
