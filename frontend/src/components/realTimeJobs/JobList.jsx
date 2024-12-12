import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./JobList.css";
const JobList = ({ jobs }) => {
  return (
    <Container>
      <Row>
        {jobs.map((job, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{job.position}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                <Card.Text>
                  <strong>Location:</strong> {job.location} <br />
                  <strong>Type:</strong> {job.type}
                </Card.Text>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Apply Now
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobList;
