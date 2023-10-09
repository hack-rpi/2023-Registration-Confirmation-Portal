import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./styles.css";
import { storage } from './firebase'; // Import Firebase storage


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [choice, setChoice] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const history = useHistory();

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

  const handleSubmit = () => {
    if (isFormValid) {
      // Create a reference to the Firebase Storage bucket
      const storageRef = storage.ref();

      // Create a reference to a specific location in the bucket (e.g., 'formData')
      const formDataRef = storageRef.child('responses');

      // Create an object with the form data
      const formData = { name, email, choice };

      // Convert the form data object to JSON
      const formDataJSON = JSON.stringify(formData);

      // Upload the JSON data to Firebase Storage
      formDataRef
        .child('user_responses.json') // You can choose a filename
        .putString(formDataJSON)
        .then(() => {
          // Data has been successfully uploaded
          // You can add any further actions here
          console.log('Form data uploaded to Firebase Storage');

          // Now, navigate to the redirection page with the form data
          history.push(choice === 'yes' ? '/yes' : '/no', { name, email, choice });
        })
        .catch((error) => {
          // Handle errors if any
          console.error('Error uploading form data:', error);
        });
    }
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

        <button type="button" onClick={handleSubmit} disabled={!isFormValid}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;