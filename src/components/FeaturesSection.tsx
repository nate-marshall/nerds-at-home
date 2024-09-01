import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="fas fa-server fa-3x mb-3"></i>
            <h3>Home Labs</h3>
            <p>Learn how to set up and manage your own home lab environment.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="fas fa-cogs fa-3x mb-3"></i>
            <h3>Automation</h3>
            <p>Automate your home and streamline tasks with the latest tools and techniques.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="fas fa-cloud fa-3x mb-3"></i>
            <h3>DevOps</h3>
            <p>Master the principles of DevOps for efficient and scalable workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
