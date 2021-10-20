import React from 'react';
import './Partners.css';
import partner1 from '../../images/partners/1.jpg';
import partner2 from '../../images/partners/2.jpg';
import partner3 from '../../images/partners/3.jpg';
import partner4 from '../../images/partners/4.jpg';
import partner5 from '../../images/partners/5.jpg';

const Partners = () => {
    return (
        <div className="partner-bg">
            <h2>Our Beloved Partners</h2>
             <p>An increasingly common model of physician/hospital partnership is the surgery center joint venture, in which a physician group and a hospital each own a percentage of the ASC and benefit from its profits.To identify the hospital, you can store the institute indicator of the insurance provider in the Inst. Ind. field in the hospital master record. In Germany, the institute indicator is assigned by the Federal Office for Statistics.</p>
             <div>
                 <div className="my-5 partners-info">
                       <img src={partner1} alt="" srcset="" />
                       <img src={partner2} alt="" srcset="" />
                       <img src={partner3} alt="" srcset="" />
                       <img src={partner4} alt="" srcset="" />
                       <img className="last-child" src={partner5} alt="" srcset="" />
                 </div>
             </div>
        </div>
    );
};

export default Partners;