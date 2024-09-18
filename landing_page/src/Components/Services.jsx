import React from 'react';
import { FaCode, FaMobileAlt, FaDatabase, FaBook } from 'react-icons/fa'; 
import '../Services.css'; 
const servicesData = [
  {
    icon: <FaCode size={40} />,
    title: 'Web Development',
    description: 'Building responsive and interactive websites using modern technologies like React, HTML, CSS, and JavaScript.'
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: 'Mobile App Development',
    description: 'Creating mobile applications for iOS and Android using frameworks like React Native and Flutter.'
  },
  {
    icon: <FaDatabase size={40} />,
    title: 'Backend Development',
    description: 'Developing robust server-side applications and APIs with technologies like Node.js, Express, and databases like MongoDB and SQL.'
  },
  {
    icon: <FaBook size={40} />,
    title: 'E-Learning Solutions',
    description: 'Designing and implementing educational platforms and tools to enhance the learning experience.'
  }
];

const Services = () => {
  return (
    <section className="services" id="Services" data-aos="fade-up"
    data-aos-duration="3000">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
