import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loading.scss';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="loading">
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default Loading;
