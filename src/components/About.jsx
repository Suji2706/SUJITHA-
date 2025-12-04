import '../App.css'

function AboutMe() {
  return (
    <div className="app">
      <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Hello! I'm SUJITHA</h2>
            <p>
             My name is SUJITHA. I am a hardworking and friendly person who always tries to learn new things. I like to improve myself every day and do my best in whatever I do. I enjoy studying, solving problems, and completing my tasks on time. I ask for help when needed and also help others when I can. I believe in being honest, respectful, and responsible. I want to build a good future for myself through continuous learning and effort.
            </p>
            
          </div>
          <div className="about-image">
            <p style={{ marginBottom: '10px', textAlign: 'center', fontStyle: 'italic' }}>
              This is a placeholder image. Replace with your actual profile photo.
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