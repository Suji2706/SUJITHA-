import React, { useState, useEffect } from 'react';

const Home = () => {
  const getInitialBiodata = () => {
    const savedData = localStorage.getItem('biodata');
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      const defaultData = [
        { label: 'Name', value: 'SUJITHA P' },
        { label: 'Age', value: '19' },
        { label: 'Degree', value: 'B.Tech IT' },
        { label: 'College', value: 'National Engineering College, Kovilpatti' },
      ];
      localStorage.setItem('biodata', JSON.stringify(defaultData));
      return defaultData;
    }
  };

  const [biodata, setBiodata] = useState(getInitialBiodata);

  useEffect(() => {
    // Listen for changes in localStorage (e.g., from Contact page)
    const handleStorageChange = () => {
      const savedData = localStorage.getItem('biodata');
      if (savedData) {
        setBiodata(JSON.parse(savedData));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Home Page</h1>
      <h2 style={{ textAlign: 'center', color: '#555' }}>My Biodata</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {biodata.map((item, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            width: '300px',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>{item.label}</h3>
            <p style={{ margin: '0', fontSize: '18px', color: '#333' }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
