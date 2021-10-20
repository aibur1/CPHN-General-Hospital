import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    // console.log(props)
    return (
        <div>
            <Col>
                <Card className="">

                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <h6>{description}</h6>
                        <Link to={`/booking/${id}`}>
                            <button className="btn btn-warning">See More</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;