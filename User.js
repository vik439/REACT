// User.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [userData, setUserData] = useState(null);

  // Using callbacks
  const fetchDataWithCallback = () => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data with callback:', error);
      });
  };

  // Using promises
  const fetchDataWithPromise = () => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data with promise:', error);
      });
  };

  // Using async/await
  const fetchDataWithAsyncAwait = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data with async/await:', error);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchDataWithCallback();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return (
    <div>
      <h1>User Information</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
      <button onClick={fetchDataWithCallback}>Fetch Data with Callback</button>
      <button onClick={fetchDataWithPromise}>Fetch Data with Promise</button>
      <button onClick={fetchDataWithAsyncAwait}>Fetch Data with Async/Await</button>
    </div>
  );
};

export default User;
