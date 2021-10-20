import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className=" text-white footer-bg">

                <div className="d-flex container footer p-5" >

                    <div className="col-md-3">
                        <h3>Doctors</h3>

                        <p>Dr. Nick Sims</p>
                        <p>Dr. Max Turner-Ann</p>
                        <p> Dr. Amy Adams-Williams</p>
                        <p>Dr. Michael Linden-Richard</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Services</h3>
                        <p>Cardiac Clinic</p>
                        <p>Outpatient Surgery</p>

                        <p>Gynaecological Clinic</p>
                        <p>Outpatient Rehabilitation</p>

                    </div>
                    <div className="col-md-3">
                        <h3>Connect Us</h3>

                        <p>333-444-222</p>
                        <p>clinic.cmsmasters.net</p>
                        <p>medical-clinic@mail.com</p>
                        <p>Marion street New York , USA</p>
                    </div>
                    <div>

                    </div>
                </div>
                <p> <i class="fas fa-copyright"></i> CPHD General © 2021 / All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;