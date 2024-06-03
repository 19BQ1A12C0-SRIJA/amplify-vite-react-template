import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();

function App() {
  const [toMail, setToMail] = useState('');
  const [body, setBody] = useState('');
  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

 // useEffect(() => {
   // client.models.Todo.observeQuery().subscribe({
     // next: (data) => setTodos([...data.items]),
    //});
  //}, []);

  //function createTodo() {
    //client.models.Todo.create({ content: window.prompt("Todo content") });
  //}
  function sendToMail()
  {
    console.log("Hii");
  }
  return (
        
    <Authenticator>
      {({ signOut, user }) => (
      <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
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
            onClick={sendToMail}
            style={{
              backgroundColor: '#4CAF50',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
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
          cursor: 'pointer'
        }}>
          Sign out
        </button>
      </div>
      
    </main>
        
        )}
        </Authenticator>
  );
}

export default App;
