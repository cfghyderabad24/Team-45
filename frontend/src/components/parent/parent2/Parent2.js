import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, ListGroup, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CustomProgressBar from '../../ProgressBar/CustomProgressBar';

function UserDetails() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector(state => state.parentInstructorLogin);

  useEffect(() => {
    if (currentUser && currentUser.username) {
      // Fetch user data from the database using Axios (Replace the URL with your API endpoint)
      axios.get(`http://localhost:8000/parent-api/getinfo/${currentUser.username}`)
        .then(response => {
          setUser(response.data.user);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!user) {
    return <div className="text-center my-5">User not found</div>;
  }

  const therapies = [
    'Speech Therapy',
    'Occupational Therapy',
    'Physical Therapy',
    'Behavioral Therapy',
    'Cognitive Therapy'
  ];

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card className="p-4 shadow" style={{ maxWidth: '600px', width: '100%' }}>
        <Card.Header as="h3" className="text-center text-primary">{user.username}</Card.Header>
        <Card.Body>
          <Row>
            <Col md={12}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5><strong>Username:</strong> {user.username}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5><strong>Attendance:</strong> {user.attendance}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5><strong>Total Sessions:</strong> {user.total_sessions}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <CustomProgressBar percentage={((user.attendance * 100) / user.total_sessions)} />
                </ListGroup.Item>
              </ListGroup>
              <h2 className="text-info mt-4">Therapies Assigned:</h2>
              <ol className="text-left text-info">
                {therapies.map((therapy, index) => (
                  <li key={index} className="my-2">
                    <h4>{therapy}</h4>
                  </li>
                ))}
              </ol>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserDetails;
