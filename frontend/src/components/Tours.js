import React, { useState, useEffect } from 'react';
import Tour from './Tour';
import Title from './Title';
import AddTour from './AddTour';

const Tours = () => {
  const [toursData, setToursData] = useState([]);

  useEffect(() => {
    // Fetch tours from the API or other data source
    // Update the following line with your API endpoint
    const apiUrl = '';

    const fetchTours = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setToursData(data);
      } catch (error) {
        console.error('Error fetching tours:', error.message);
      }
    };

    fetchTours();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleDelete = (tourId) => {
    // Logic to delete a tour by ID
    // Update the following line with your delete API endpoint
    const apiUrl =`http://localhost:3001/api/tours/${tourId}`;

    fetch(apiUrl, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Update state after successful deletion
          setToursData((prevTours) =>
            prevTours.filter((tour) => tour.id !== tourId)
          );
        } else {
          console.error('Failed to delete tour:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting tour:', error.message);
      });
  };

  const handleAddTour = (newTour) => {
    // Logic to add a new tour
    // Update the following line with your add API endpoint
    const apiUrl = 'http://localhost:3001/api/Tours';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTour),
    })
      .then((response) => response.json())
      .then((addedTour) => {
        // Update state after successful addition
        setToursData((prevTours) => [...prevTours, addedTour]);
      })
      .catch((error) => {
        console.error('Error adding tour:', error.message);
      });
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {/* Add Tour component */}
          <AddTour onAddTour={handleAddTour} />

          {/* Tour components */}
          {toursData.map((tour) => (
            <Tour key={tour.id} {...tour} onDelete={handleDelete} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;
