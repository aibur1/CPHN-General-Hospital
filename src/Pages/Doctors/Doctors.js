import React from 'react';
import './Doctors.css';
import doc1 from '../../images/doctors/1.jpg';
import doc2 from '../../images/doctors/2.jpg';
import doc3 from '../../images/doctors/3.jpg';
import doc4 from '../../images/doctors/4.jpg';
import doc5 from '../../images/doctors/5.jpg';
import doc6 from '../../images/doctors/6.jpg';
import doc7 from '../../images/doctors/7.jpg';
import doc8 from '../../images/doctors/8.jpg';
import doc9 from '../../images/doctors/9.jpg';


const Doctors = () => {
    return (
        <div>
                <h2>LOOK OUR SPECIALISTS</h2>
                <div className="doctors">
                    <div className="">
                        <img src={doc1} alt="" srcset="" />
                        
                        <h3>Dr.Khansama</h3>
                        <h6>Dermatologist</h6>
                    </div>
                    <div>
                        <img src={doc2} alt="" srcset="" />
                        <h3>Dr.Morshell</h3>
                        <h6>Psychiatrist</h6>
                    </div>
                    <div>
                        <img src={doc3} alt="" srcset="" />
                        <h3>Dr.Ana-Noor</h3>
                        <h6>Ophthalmologist</h6>
                    </div>
                    <div>
                        <img src={doc4} alt="" srcset="" />
                        <h3>Dr.Krish-Hosh</h3>
                        <h6>Otolaryngologist</h6>
                    </div>
                    <div>
                        <img src={doc5} alt="" srcset="" />
                        <h3>Dr.Nobnic-Mars</h3>
                        <h6>Nephrologist</h6>
                    </div>
                    <div>
                        <img src={doc6} alt="" srcset="" />
                        <h3>Dr.Rosmirra</h3>
                        <h6>Neuroligst</h6>
                    </div>
                    <div>
                        <img src={doc7} alt="" srcset="" />
                        <h3>Dr.Fluemena</h3>
                        <h6>Anesthesiologist</h6>
                    </div>
                    <div>
                        <img src={doc8} alt="" srcset="" />
                        <h3>Dr.Jaklmanse</h3>
                        <h6>Radiologist</h6>
                    </div>
                    <div>
                        <img src={doc9} alt="" srcset="" />
                        <h3>Dr.Klumins-Barr</h3>
                        <h6>Surgeon</h6>
                    </div>
                </div>
        </div>
    );
};

export default Doctors;