import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="price-area">
            <h2 className="mb-5">OUR PRICING </h2>
            <div className="d-flex justify-content-around mb-5">
                <div className="price">
                    <h3>STANDARD</h3>
                    <h1>$150<small>  Per Year</small></h1>
                    <p>15 Test</p>
                    <p>3 Departments</p>
                    <p>15 Emergency</p>
                    <p>  No Medical Assistance</p>
                    <button className="price-btn" >Chose</button>
                </div>
                <div className="price">
                    <h3>SILVER</h3>
                    <h1>$250<small>  Per Year</small></h1>
                    <p>20 Test</p>
                    <p>5 Departments</p>
                    <p>20 Emergency</p>
                    <p>  No Medical Assistance</p>
                    <button className="price-btn" >Chose</button>
                </div>
                <div className="price">
                    <h3>PREMIUM</h3>
                    <h1>$450<small>  Per Year</small></h1>
                    <p>25 Test</p>
                    <p>10 Departments</p>
                    <p>25 Emergency</p>
                    <p> Have Medical Assistance</p>
                    <button className="price-btn">Chose</button>
                </div>
                
            </div>
        </div>
    );
};

export default Pricing;