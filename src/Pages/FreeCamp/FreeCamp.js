import React from 'react';
import './FreeCamp.css';
import camp1 from '../../images/partners/icons/1.png';
import camp2 from '../../images/partners/icons/2.png';
import camp3 from '../../images/partners/icons/3.png';
import camp4 from '../../images/partners/icons/4.png';

const FreeCamp = () => {
    return (
        <div className="height">
            <h2>Special Free Camp</h2>
            <p>Every year in 1st week of summer we offer a free camp on some special treatment.where we try to provide some special services for the rural people.</p>
            <div className="camp">
                <div>
                    <img src={camp1} alt="" srcset="" />
                    <p>The neurologist treats disorders that affect the brain, spinal cord, and nerves, such as: Cerebrovascular disease, such as stroke. Demyelinating diseases of the central.</p>
                </div>
                <div>
                    <img src={camp2} alt="" srcset="" />
                    <p>Dentists diagnose and treat problems with patients' teeth, gums, and related parts of the mouth. They provide advice and instruction on taking care of the teeth and gums.</p>
                </div>
                <div>
                    <img src={camp3} alt="" srcset="" />
                    <p>Cardiologists are doctors who diagnose, assess and treat patients with diseases and defects of the heart and blood vessels (the cardiovascular system).</p>
                </div>
                <div>
                    <img src={camp4} alt="" srcset="" />
                    <p>Ophthalmologists are the only practitioners medically trained to diagnose and treat all eye and visual problems including vision services.</p>
                </div>
                
            </div>
        </div>
    );
};

export default FreeCamp;