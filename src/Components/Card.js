import React from 'react';
import '../styles/Card.css';

const Card = ({ title, description, image }) => {
    return (
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwor32FhPuijNt4gyu1xv90L132SSa6Go5B4oJ31jKOA&s" alt = 'DIET' />
        <div className="card-body">
          <h5 className="card-title">DIET</h5>
          <p className="card-text">DIET is training institution regarding in 
          the field of primary and upper primary school teachers for their better
           teaching learning methods.</p>
        </div>
      </div>
      
    );
  };
 