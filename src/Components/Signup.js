import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Signup.css'

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('Male');
  const [city, setCity] = useState('Mumbai');
  const [state, setState] = useState('Gujarat');
  const [howDidYouHear, setHowDidYouHear] = useState([]);
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        name,
        email,
        phone,
        gender,
        city,
        state,
        howDidYouHear,
        password
      });
      // Handle successful signup, e.g., show success message, navigate to login page, etc.
      console.log('Signup successful', response.data);
    } catch (error) {
      console.error('Signup error', error);
      // Handle signup error, e.g., display error message to user
    }
  };

  return (
    <form onSubmit={handleSignup} className="signup-form" style={{marginTop: '30px'}}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div>
        <label>City:</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Ahmedabad">Ahmedabad</option>
        </select>
      </div>
      <div>
        <label>State:</label>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </div>
      <div>
        <label>setHowDidYouHear:</label>
        <select value={city} onChange={(e) => setHowDidYouHear(e.target.value)}>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Friends">Friends</option>
          <option value="Job Portal">Job Portal</option>
        </select>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
