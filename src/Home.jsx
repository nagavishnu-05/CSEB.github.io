import { useState, useEffect } from 'react';
import './assets/Home.css';
import Vcet from './assets/VCET Logo.jpg';
import Vcet1 from './assets/Vcet1.png';
import Vcet2 from './assets/Vcet2.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Vcet1, Vcet2, Vcet1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Navbar */}
      <div id="navbar">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img id="vlogo" src={Vcet} alt="VCET Logo" />
          <h1 id="vcet">Velammal College of Engineering and Technology</h1>
        </div>
        <nav id="nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>

      {/* Centered Gallery */}
      <div id="gallery-container">
        <div id="gallery">
          <img
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            className="galleryimg"
          />
        </div>
      </div>      

        <h1>About VCET</h1>
        <pre>
          Velammal College of Engineering and Technology (VCET) in Madurai offers quality education in various engineering disciplines.{"\n\n"}
          Affiliated with Anna University, it provides state-of-the-art facilities and experienced faculty.{"\n\n"}
          VCET focuses on holistic development through extracurricular activities and industry connections.{"\n\n"}
          The college prepares students for successful careers in engineering and technology.
        </pre>
    </div>
  );
};

export default Home;
