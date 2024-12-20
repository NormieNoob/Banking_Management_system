'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSuccess(false);

    try {
      console.log('Attempting to sign in...'); // Debug log
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        }),
      });

      const sessionCheck = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/test-session`, {
        method: 'GET',
        credentials: 'include'
      });

      console.log(sessionCheck)

      const data = await response.json();
      console.log('Response:', data); // For debugging

      if (response.ok) {
        setSuccess(true);
        setMessage('Successfully signed in!');
        router.push(`/${formData.username}/dashboard`);
      } else {
        setSuccess(false);
        setMessage(data.message || 'Failed to sign in.');
      }
    } catch (error) {
      console.error('Error:', error); // For debugging
      setSuccess(false);
      setMessage('An unexpected error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome Back!</h2>
        <p style={styles.subheading}>Sign in to access your account</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>
        {message && (
          <p style={success ? styles.successMessage : styles.errorMessage}>{message}</p>
        )}
        <p style={styles.signupLink}>
          Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f0f4f8',
  },
  card: {
    maxWidth: '400px',
    width: '100%',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  successMessage: {
    marginTop: '10px',
    color: 'green',
    fontSize: '14px',
  },
  errorMessage: {
    marginTop: '10px',
    color: 'red',
    fontSize: '14px',
  },
  signupLink: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#666',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
