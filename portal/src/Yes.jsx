import React from 'react';

const Yes = ({ location }) => {
  // Access the form data from the location state
  const { state } = location;
  const { name, email, choice } = state || {};

  return (
    <div>
      <h2>Confirmation</h2>
      <p>Thank you, {name}, for confirming your attendance to the hackathon!</p>
      <p>Your email address: {email}</p>
      <p>Choice: {choice}</p>
    </div>
  );
};

export default Yes;
