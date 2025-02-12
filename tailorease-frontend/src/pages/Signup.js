// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/api/auth/register", formData);
//       alert(response.data.message);
//     } catch (error) {
//       alert("Signup failed");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input type="text" name="name" className="form-control" onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input type="email" name="email" className="form-control" onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input type="password" name="password" className="form-control" onChange={handleChange} required />
//         </div>
//         <button type="submit" className="btn btn-primary">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../styles/Signup.css"; // Assuming you have a CSS file for custom styles


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic here
    console.log('Name:', name, 'Email:', email, 'Password:', password);
  };

  return (
    <Container fluid className="signup-container">
      <Row>
        <Col md={6} className="welcome-back">
          <div className="welcome-text">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <Button variant="outline-light" href="/login">Sign In</Button>
          </div>
        </Col>
        <Col md={6} className="create-account">
          <div className="create-account-form">
            <h2>Create Account</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">Sign Up</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
