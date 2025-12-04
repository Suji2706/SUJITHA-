import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    degree: '',
    college: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('biodata');
    if (savedData) {
      const data = JSON.parse(savedData);
      setFormData({
        name: data.find(item => item.label === 'Name')?.value || '',
        age: data.find(item => item.label === 'Age')?.value || '',
        degree: data.find(item => item.label === 'Degree')?.value || '',
        college: data.find(item => item.label === 'College')?.value || '',
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBiodata = [
      { label: 'Name', value: formData.name },
      { label: 'Age', value: formData.age },
      { label: 'Degree', value: formData.degree },
      { label: 'College', value: formData.college },
    ];
    localStorage.setItem('biodata', JSON.stringify(updatedBiodata));
    alert('Biodata updated successfully!');
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Edit Biodata</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#007bff' }}>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#007bff' }}>Age:</label>
            <input type="text" name="age" value={formData.age} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#007bff' }}>Degree:</label>
            <input type="text" name="degree" value={formData.degree} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#007bff' }}>College:</label>
            <input type="text" name="college" value={formData.college} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
