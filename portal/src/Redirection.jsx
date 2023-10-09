import React from 'react';
import { useLocation } from 'react-router-dom';

const RedirectionPage = () => {
  const location = useLocation();
  const { name, email, choice } = location.state || {};

  return (
    <div>
      <h2>Form Data:</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Choice: {choice}</p>
    </div>
  );
};

export default RedirectionPage;