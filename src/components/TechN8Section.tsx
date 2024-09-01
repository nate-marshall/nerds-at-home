import React from 'react';
import TechN8Logo from '../assets/images/nahpaint.webp';  // Replace with your actual image paths
import YouTubeBanner from '../assets/images/nahbanner_2560x1440.jpeg';

const TechN8Section: React.FC = () => {
  return (
    <section id="techN8" className="techN8-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={TechN8Logo} alt="NAH" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2>Welcome to TechN8</h2>
            <p>TechN8 is my YouTube channel where I help beginners with their home labs, home automation, platform DevOps, and much more. Subscribe to stay updated on the latest tech tutorials and tips!</p>
            <img src={YouTubeBanner} alt="NAH Neon" className="img-fluid mt-3 rounded" />
            <a href="https://www.youtube.com/your-channel-link" className="btn btn-primary mt-3">Visit My YouTube Channel</a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TechN8Section;
