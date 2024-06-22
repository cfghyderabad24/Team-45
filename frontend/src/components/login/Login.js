import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Login() {
  return (
    <Container className="mt-5 p-4 bg-light rounded w-50">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="mb-4 text-primary text-center">Login</h1>
          <Form>
            <Form.Group controlId="formRole" className="mb-3">
              <Form.Control as="select" placeholder="Role">
                <option>Parent</option>
                <option>Instructor</option>
                <option>Admin</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Control type="text" placeholder="Enter your username" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login