import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(formRef.current);
      const username = formData.get('username');
      const email = formData.get('email');
      const password = formData.get('password');
      // Perform form validation here
      // If validation passes, you can navigate to the home page
      if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
        window.location.href = '/home';
      } else {
        // Handle validation errors here
        alert('Please fill in all fields.');
      }
    };

    const formElement = formRef.current;
    if (formElement) {
      formElement.addEventListener('submit', handleFormSubmit);

      return () => {
        formElement.removeEventListener('submit', handleFormSubmit);
      };
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Sign Up</h2>
          <form ref={formRef}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" name="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
