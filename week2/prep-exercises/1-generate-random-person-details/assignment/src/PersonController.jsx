import React, { useState, useEffect } from 'react';
import Person from './Person';

function PersonController() {
  const [people, setPeople] = useState([]);
  const [isGreen, setIsGreen] = useState(false);
  

  async function fetchPeople() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    setPeople(data.results.map(person => ({
      firstName: person.name.first,
      lastName: person.name.last,
      email: person.email,
      phone: person.phone,
    })));
    setIsGreen(!isGreen); 
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div className={`profile-container ${isGreen ? 'green' : ''}`}>
      {people.map((person, index) => (
        <Person 
          key={index}
          firstName={person?.firstName} 
          lastName={person?.lastName} 
          email={person?.email} 
          phNumber={person?.phone} 
          isGreen={isGreen}
        />
      ))}
    <button className='btn' onClick={fetchPeople}>New 10 people</button>
    </div>
    
  );
}

export default PersonController;