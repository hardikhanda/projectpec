// StudentDashboard.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Navi from './Nav';

const StudentDashboard = () => {
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const date = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const currentTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const greeting = getGreeting(currentDate);

  return (
    <div>
      <Navi />
      <Container className="d-flex flex-column justify-content-center align-items-center mt-5 vh-100">
        <h2>{`${day}, ${date}`}</h2>
        {greeting}
        

      </Container>
    </div>
  );
};

const getGreeting = (date) => {
  const hour = date.getHours();
  let greeting = '';
  if (hour >= 5 && hour < 12) {
    greeting = <h1>Good Morning Student!</h1>;
  } else if (hour >= 12 && hour < 18) {
    greeting = <h1>Good Afternoon Student!</h1>;
  } else {
    greeting = <p>Good Evening Student!</p>;
  }
  return greeting;
};

export default StudentDashboard;