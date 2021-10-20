import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Service from '../Service/Service';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';



const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            {/* <Header></Header> */}
            <Container>
                <h1>Services</h1>
                <div>
                    <>
                        <CardGroup>
                        {
                            services.map(service => <Service key={service.key} service = {service}></Service>)
                        }
                        </CardGroup>
                    </>
                </div>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Services;