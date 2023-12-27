import React, { useState, useEffect } from 'react';
import Service from './Service';
import Title from './Title';

function Services() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    // Fetch services from the API
    const apiUrl = 'http://localhost:3001/api/Services'; // Update with your API URL

    const fetchServices = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.error('Error fetching services:', error.message);
      }
    };

    fetchServices();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {servicesData.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
