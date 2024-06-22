
import React from 'react';
import { Form, Button, Row, Col,Container } from 'react-bootstrap';
function Register() {

  return (
<Container className="mt-5 p-4 rounded" style={{ backgroundColor: '#f8f9fa', maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Register</h2>
      <Form>
        <Form.Group as={Row} controlId="formRole" className="mb-3">
          <Col sm={12}>
            <Form.Control as="select" className="role-field" placeholder="Role">
              <option>Volunteer</option>
              <option>Parent</option>
              <option>Instructor</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formUsername" className="mb-3">
          <Col sm={12}>
            <Form.Control type="text" className="username-field" placeholder="Username" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPassword" className="mb-3">
          <Col sm={12}>
            <Form.Control type="password" className="password-field" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formAge" className="mb-3">
          <Col sm={12}>
            <Form.Control type="number" className="age-field" placeholder="Age" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formGender" className="mb-3">
          <Col sm={12}>
            <Form.Control as="select" className="gender-field" placeholder="Gender">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPhoneNumber" className="mb-3">
          <Col sm={12}>
            <Form.Control type="text" className="phone-field" placeholder="Phone Number" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formEmail" className="mb-3">
          <Col sm={12}>
            <Form.Control type="email" className="email-field" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formUploadImage" className="mb-3">
          <Col sm={12}>
            <Form.Label>Upload Image (Parents Only)</Form.Label>
            <Form.Control type="file" className="upload-field" />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Register