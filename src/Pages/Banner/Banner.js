import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/slilde1.jpg';
import image2 from '../../images/slide2.jpg';
import image3 from '../../images/slide3.jpg';

const Banner = () => {
    return (

        // Using Carousel

        <div className="">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Our specialists</h3>
                        <p>All are always ready to serve you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Modern technology</h3>
                        <p>We offer you a modern technological service</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Operation Theatre</h3>
                        <p>
                            We try to keep your health to the ultimate possession.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
};

export default Banner;