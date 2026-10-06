import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const roles = [
    "Aspiring Web Developer",
    "Web Design Learner",
    "Frontend Enthusiast",
    "Backend Beginner"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Images for the Slider
  const groupImages = ["/group1.jpg", "/group2.jpg", "/group3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Auto slide para sa group photos bawat 3.5 segundo
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % groupImages.length);
    }, 3500);
    return () => clearInterval(imageInterval);
  }, [groupImages.length]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log("Audio play blocked or error:", error);
      });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const element = document.createElement("a");
    const file = new Blob([
      "JOMAR FUENTES\nAspiring Web Developer\nCollege Student at Computer Communication Development Institute\n\nSkills: C#, Java, React with Vite, SQL, MySQL, Git, Tailwind CSS\nProjects: Dormitory Allocation System, ABC Inventory Data Analysis\nGitHub: https://github.com/jomarfuentes708-lgtm"
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Jomar_Fuentes_CV.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % groupImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + groupImages.length) % groupImages.length);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f0f0f', color: '#fff', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {/* Audio Element with Paradise */}
      <audio 
        ref={audioRef} 
        src="/paradise.mp4" 
        preload="auto"
        loop 
      />

      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', alignItems: 'center', borderBottom: '1px solid #222', position: 'sticky', top: 0, backgroundColor: '#0f0f0f', zIndex: 100 }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>JF</span>
          <span style={{ fontSize: '11px', color: '#888', border: '1px solid #333', padding: '2px 6px', borderRadius: '4px' }}>@jomarfuentes708-lgtm</span>
        </div>
        
        <div style={{ display: 'flex', gap: '25px', color: '#ccc', fontSize: '14px', alignItems: 'center' }}>
          <span onClick={() => scrollToSection('home')} style={{ color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Home</span>
          <span onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About</span>
          <span onClick={() => scrollToSection('skills')} style={{ cursor: 'pointer' }}>Skills</span>
          <span onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>Projects</span>
          <span onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</span>
        </div>

        {/* Music Play Button */}
        <div>
          <button 
            onClick={togglePlay}
            style={{ 
              backgroundColor: isPlaying ? '#00ffcc' : '#1a1a1a', 
              color: isPlaying ? '#000' : '#fff', 
              border: '1px solid #444', 
              padding: '8px 16px', 
              borderRadius: '20px', 
              cursor: 'pointer', 
              fontSize: '13px', 
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.3s'
            }}
          >
            {isPlaying ? '🎵 Playing Coldplay - Paradise...' : '▶ Play Coldplay - Paradise'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '60px 80px', borderBottom: '1px solid #222' }}>
        
        <div style={{ maxWidth: '450px' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', color: '#00ffcc', marginBottom: '20px' }}>
            🟢 Available for work
          </div>
          <p style={{ fontSize: '18px', color: '#aaa', margin: '0 0 5px 0' }}>Hey there! I'm</p>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 15px 0', letterSpacing: '-1px' }}>
            Jomar Fuentes
          </h1>
          <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px' }}>
            Crafting digital experiences with clean code and innovative solutions.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '320px', height: '320px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #00ffcc', boxShadow: '0 0 20px rgba(0,255,204,0.2)' }}>
            <img 
              src="/profile.jpg" 
              alt="Jomar Fuentes" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>

        <div style={{ maxWidth: '400px', textAlign: 'right' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 10px 0', minHeight: '40px', color: '#fff' }}>
            {roles[currentRoleIndex]}
          </h2>
          <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.5', marginBottom: '25px' }}>
            College student at Computer Communication Development Institute with expertise in web development and modern frameworks.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
            <a 
              href="https://github.com/jomarfuentes708-lgtm" 
              target="_blank" 
              rel="noreferrer"
              style={{ backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #444', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}
            >
              View GitHub Profile
            </a>
            <button 
              onClick={handleDownloadCV}
              style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}
            >
              Download CV
            </button>
          </div>
        </div>

      </div>

      {/* About Me Section with Image Slider */}
      <div id="about" style={{ padding: '80px 80px', borderBottom: '1px solid #222' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>About Me</h2>
        
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: '1.8', marginBottom: '25px' }}>
              I'm a passionate developer with hands-on experience using C#, Java, React with Vite, SQL, and MySQL databases. I specialize in building end-to-end applications—from sleek user interfaces to robust database-backed systems like student service requests, inventory tracking, and management portals.
            </p>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', color: '#ddd' }}>Problem Solver</span>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', color: '#ddd' }}>Fast Learner</span>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', color: '#ddd' }}>Team Player</span>
            </div>
          </div>

          {/* Single-Box Interactive Image Slider */}
          <div style={{ position: 'relative', width: '420px', height: '240px', borderRadius: '12px', overflow: 'hidden', border: '2px solid #333', backgroundColor: '#141414' }}>
            <img 
              src={groupImages[currentImageIndex]} 
              alt={`Group Slide ${currentImageIndex + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease-in-out' }} 
            />
            
            {/* Prev Button */}
            <button 
              onClick={prevImage}
              style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              ‹
            </button>

            {/* Next Button */}
            <button 
              onClick={nextImage}
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              ›
            </button>

            {/* Dots */}
            <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
              {groupImages.map((_, idx) => (
                <span 
                  key={idx} 
                  onClick={() => setCurrentImageIndex(idx)}
                  style={{ width: currentImageIndex === idx ? '20px' : '8px', height: '8px', borderRadius: '4px', backgroundColor: currentImageIndex === idx ? '#00ffcc' : 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'all 0.3s' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div id="skills" style={{ padding: '80px 80px', borderBottom: '1px solid #222' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center' }}>Technical Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          
          <div style={{ backgroundColor: '#141414', border: '1px solid #222', padding: '30px', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '18px', color: '#00ffcc', marginBottom: '15px' }}>Frontend Development</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#ccc' }}>React with Vite</span>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#ccc' }}>HTML5 / CSS3</span>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#ccc' }}>Tailwind CSS</span>
            </div>
          </div>

          <div style={{ backgroundColor: '#141414', border: '1px solid #222', padding: '30px', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '18px', color: '#00ffcc', marginBottom: '15px' }}>Backend & Programming</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#ccc' }}>C# Windows Forms</span>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#ccc' }}>Java</span>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#ccc' }}>.NET Minimal API</span>
            </div>
          </div>

          <div style={{ backgroundColor: '#141414', border: '1px solid #222', padding: '30px', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '18px', color: '#00ffcc', marginBottom: '15px' }}>Databases & Tools</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#ccc' }}>MySQL / MySQL Workbench</span>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#ccc' }}>Git CLI & GitHub</span>
              <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', color: '#ccc' }}>Visual Studio / VS Code</span>
            </div>
          </div>

        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" style={{ padding: '80px 80px', borderBottom: '1px solid #222' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center' }}>Featured Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
          
          <div style={{ backgroundColor: '#141414', border: '1px solid #222', borderRadius: '12px', padding: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#fff', margin: 0 }}>Dormitory Allocation System</h3>
                <span style={{ fontSize: '12px', backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '4px 10px', borderRadius: '20px', color: '#00ffcc' }}>System / App</span>
              </div>
              <p style={{ fontSize: '14px', color: '#aaa', lineHeight: '1.6', marginBottom: '20px' }}>
                A streamlined management application designed to handle room assignments, tenant tracking, and billing record requests efficiently with a secure database backend.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '25px' }}>
                <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', color: '#ccc' }}>C# / .NET</span>
                <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', color: '#ccc' }}>MySQL</span>
                <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', color: '#ccc' }}>Windows Forms</span>
              </div>
            </div>
            <div>
              <a 
                href="https://github.com/jomarfuentes708-lgtm" 
                target="_blank" 
                rel="noreferrer"
                style={{ display: 'inline-block', backgroundColor: '#fff', color: '#000', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none' }}
              >
                View on GitHub ↗
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: '#141414', border: '1px solid #222', borderRadius: '12px', padding: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#fff', margin: 0 }}>ABC Inventory Data Analysis</h3>
                <span style={{ fontSize: '12px', backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '4px 10px', borderRadius: '20px', color: '#00ffcc' }}>Analytics / Database</span>
              </div>
              <p style={{ fontSize: '14px', color: '#aaa', lineHeight: '1.6', marginBottom: '20px' }}>
                An inventory analysis framework utilizing ABC classification methods to evaluate stock value, categorize item importance, and generate performance reports.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '25px' }}>
                <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', color: '#ccc' }}>Java</span>
                <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', color: '#ccc' }}>SQL Database</span>
                <span style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', color: '#ccc' }}>Data Processing</span>
              </div>
            </div>
            <div>
              <a 
                href="https://github.com/jomarfuentes708-lgtm" 
                target="_blank" 
                rel="noreferrer"
                style={{ display: 'inline-block', backgroundColor: '#fff', color: '#000', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none' }}
              >
                View on GitHub ↗
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" style={{ padding: '80px 80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>Get In Touch</h2>
        <p style={{ fontSize: '15px', color: '#aaa', maxWidth: '500px', margin: '0 auto 30px auto' }}>
          Interested in collaborating or discussing web development projects? Feel free to reach out via GitHub or email!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a 
            href="https://github.com/jomarfuentes708-lgtm" 
            target="_blank" 
            rel="noreferrer"
            style={{ backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #444', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}
          >
            GitHub: @jomarfuentes708-lgtm
          </a>
          <button 
            onClick={handleDownloadCV}
            style={{ backgroundColor: '#00ffcc', color: '#000', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}
          >
            Download Resume / CV
          </button>
        </div>
      </div>

    </div>
  );
}