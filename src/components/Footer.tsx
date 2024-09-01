import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; 2024 Nerds At Home. All Rights Reserved.</p>
        <div>
          <a href="https://twitter.com/yourhandle" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/nate-marshall/nerds-at-home" className="text-white mx-2">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
