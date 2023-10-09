import React from 'react';

const No = ({ location }) => {
  // Access the form data from the location state
  const { state } = location;
  const { name, email, choice } = state || {};

  return (
    <div>
      <h2>Sorry to hear that!</h2>
      <p>Thank you, {name}, for letting us know that you won't be able to attend the hackathon.</p>
      <p>Your email address: {email}</p>
      <p>Choice: {choice}</p>
    </div>
  );
};

export default No;