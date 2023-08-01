import React, { useState, useEffect } from 'react';
import './GetCss.css';
function Get1Url() {
  const [div, setDiv] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/get1Url');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDiv(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? (
        <p>Loading....</p>
      ) : div ? (
        <p>{div}</p>
      ) : (
        <p>You should write the query to fetch the data.</p>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default Get1Url;
