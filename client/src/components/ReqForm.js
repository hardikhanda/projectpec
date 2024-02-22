import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './ReqForm.css';

const ReqForm = () => {
  const [formData, setFormData] = useState({
    clubName: '',
    eventName: '',
    eventDescription: '',
    eventMode: '',
    roomNumber: '',
    date: '',
    time: '',
    expectedParticipation: '',
    audience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend or perform any other actions
    console.log(formData);
  };

  return (
    <div className='form-container'>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="clubName">
        <Form.Label>Name of Club/Society</Form.Label>
        <Form.Control
          type="text"
          name="clubName"
          value={formData.clubName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="eventName">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="eventDescription">
        <Form.Label>Brief Event Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="eventMode">
        <Form.Label>Event Mode</Form.Label>
        <Form.Control
          type="text"
          name="eventMode"
          value={formData.eventMode}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="roomNumber">
        <Form.Label>Room Number</Form.Label>
        <Form.Control
          type="text"
          name="roomNumber"
          value={formData.roomNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="time">
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="expectedParticipation">
        <Form.Label>Expected Participation</Form.Label>
        <Form.Control
          type="text"
          name="expectedParticipation"
          value={formData.expectedParticipation}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="audience">
        <Form.Label>Audience</Form.Label>
        <Form.Control
          type="text"
          name="audience"
          value={formData.audience}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default ReqForm;
