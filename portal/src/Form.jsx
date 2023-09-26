import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [choice, setChoice] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleChoiceChange = (e) => setChoice(e.target.value);

  return (
    <div className="container">
      <form>
      
        <label htmlFor="Name">Name: </label>
        <input type="text" placeholder="Enter Name" name="name" id="name" value={name} onChange={handleNameChange} required />
        <br />

        <label htmlFor="email">Email: </label>
        <input type="text" placeholder="Enter Email" name="email" id="email" value={email} onChange={handleEmailChange} required />
        <br />

        <div className="choices">
          <input type="radio" id="yes" name="choice" value="yes" checked={choice === 'yes'} onChange={handleChoiceChange} required />
          <label htmlFor="yes">YES</label>

          <input type="radio" id="no" name="choice" value="no" checked={choice === 'no'} onChange={handleChoiceChange} required />
          <label htmlFor="no">NO</label>
        </div>

        <button type="submit">SUBMIT</button>

        
      </form>
    </div>
  );
};

export default Form;
