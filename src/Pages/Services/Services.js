import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="my-5">Our Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;