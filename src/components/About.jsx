import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function AboutMe() {
  const [name, setName] = useState('SUJITHA')
  const [description, setDescription] = useState('My name is SUJITHA. I am a hardworking and friendly person who always tries to learn new things. I like to improve myself every day and do my best in whatever I do. I enjoy studying, solving problems, and completing my tasks on time. I ask for help when needed and also help others when I can. I believe in being honest, respectful, and responsible. I want to build a good future for myself through continuous learning and effort.')
  const navigate = useNavigate()

  const handleSave = () => {
    // Here you can save the data if needed, e.g., to localStorage or API
    navigate('/')
  }

  return (
    <div className="app">
      <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Hello! I'm <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></h2>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="10" cols="50" />
            <br />
            <button onClick={handleSave}>Save</button>
          </div>
          <div className="about-image">
            <p style={{ marginBottom: '10px', textAlign: 'center', fontStyle: 'italic' }}>
              
            </p>
            <div style={{ border: '2px solid #007bff', borderRadius: '10px', padding: '10px', display: 'inline-block' }}>
              <img src="https://via.placeholder.com/300x300?text=Profile+Photo" alt="Profile Photo" style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
