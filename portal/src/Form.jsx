import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'firebase/storage';
import "./styles.css";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [choice, setChoice] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    validateForm(newName, email, choice);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(name, newEmail, choice);
  };

  const handleChoiceChange = (e) => {
    const newChoice = e.target.value;
    setChoice(newChoice);
    validateForm(name, email, newChoice);
  };

  const validateForm = (newName, newEmail, newChoice) => {
    setIsFormValid(newName.trim() !== '' && newEmail.trim() !== '' && newChoice !== '');
  };

  return (
    <div className="container">

  <form>
    <label htmlFor="Name">Name: </label>
    <input type="text" placeholder="Enter Name" name="name" id="name" value={name} onChange={handleNameChange} required />
    <br />

    <label htmlFor="email">Email: </label>
    <input type="text" placeholder="Enter Email" name="email" id="email" value={email} onChange={handleEmailChange} required />
    <br />

    <h3>Are you still planning to attend the hackathon?</h3>
    
    <div className="choices">
      <label>
        <input type="radio" id="yes" name="choice" value="yes" checked={choice === 'yes'} onChange={handleChoiceChange} required />
        YES, I'll be there!
      </label>
      
      <br></br>

      <label>
        <input type="radio" id="no" name="choice" value="no" checked={choice === 'no'} onChange={handleChoiceChange} required />
        NO, I am unable to attend
      </label>
    </div>

    <Link to={isFormValid && (choice === 'yes' ? '/yes' : '/no')}>
      <button type="submit" disabled={!isFormValid}>SUBMIT</button>
    </Link>
  </form>
</div>
  );
};

export default Form;
