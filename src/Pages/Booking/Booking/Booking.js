import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const { serviceId } = useParams();
    const [myService, setMyService] = useState({});

    useEffect( () => {
      
      fetch('./services.json')
      .then(res => res.json())
      .then(data =>setMyService(data))
    },[])

    console.log(myService);

    useEffect( () => {
        const got = myService.find(singleService =>
            singleService.serviceId == serviceId)
            console.log(got);
    }, [myService])

    return (
        <div>
            <h2>This is booking : {serviceId} </h2>
            

        </div>
    );
};

export default Booking;