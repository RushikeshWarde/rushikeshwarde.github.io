import React from 'react';
import { Spinner } from 'reactstrap';

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Spinner
      style={{
        animation: 'spinner-border 1s linear infinite',
        width: '4rem',
        height: '4rem',
        borderWidth: '0.4rem',
        borderColor: '#f3f3f3',
        borderTopColor: '#3498db',
      }}
    />
  </div>
);

export default LoadingSpinner;
