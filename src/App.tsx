import React, { useState } from 'react';

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function App() {
  const [toMail, setToMail] = useState('');
  const[subject, setsubject] =useState('');
  const [body, setBody] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('https://ls4nowshkf.execute-api.us-east-1.amazonaws.com/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toMail,
          body,
          subject,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        // Set the success message
        setSuccessMessage('Email sent successfully!');

        // Refresh the page
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        // Handle error
        console.error('Error sending email:', response.status);
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Authenticator>
      {({ signOut }) => (

         
  <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
       <div>
          <form onSubmit={handleSubmit}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        
        <div>
          <label htmlFor="toMail" style={{ fontSize: '16px', fontWeight: 'bold' }}>
            To Mail:
          </label>
          <input
            type="email"
            id="toMail"
            name="toMail"
            value={toMail}
            onChange={(e) => setToMail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              margin: '5px 0',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          />
        </div>
        <div>
          <label htmlFor="subject" style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Subject
          </label>
          <input
            type="subject"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              margin: '5px 0',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          />
        </div>
        <div>
          <label htmlFor="body" style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Body:
          </label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              margin: '5px 0',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          />
        </div>
        <div>
          <button
            type="submit"
           
            style={{
              backgroundColor: '#4CAF50',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Send Mail
          </button>
        </div>
        <button onClick={signOut} style={{
          backgroundColor: '#4CAF50',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Sign out
        </button>
      </div>
      {successMessage && (
        <div style={{ color: 'green', marginTop: '10px' }}>
          {successMessage}
        </div>
      )}
      
      </form>
          </div>
        </main>
  
        )}
        </Authenticator>
);
}

export default App;