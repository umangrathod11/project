import React, { useState } from 'react';

const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [education, setEducation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use the form data for further processing, validation, or sending to a server
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Birthdate:', birthdate);
    console.log('Education:', education);
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Birthdate:</label>
          <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
        </div>
        <div>
          <label>Education:</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
