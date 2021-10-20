import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, CardGroup, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import headerImage from '../../images/header-image.jpg'
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    console.log(services)

    const history = useHistory();
    const handleStartLearning = () =>{
        history.push('/services')
    }

    return (
        <div className ='mt-5'>
            <Container>
            <main className = 'd-flex justify-content-around'>
                <div>
                    <img src={headerImage} alt="" />
                </div>
                <div>
                    <h1>Take greate cources <br />from worlds best <br />Universitie Students</h1>
                    <Button onClick = {handleStartLearning} variant="dark">Start Learning Now</Button>
                </div>
            </main>

            <div className='mt-5'>
                <h1 className ='text-center '>Services</h1>
                <div className=''>
                <CardGroup className=" justify-content-center ">
                    {
                        
                           services.slice(1,5).map( service => <ServicesHome key = {service.id} service ={service}></ServicesHome>)
                        
                    }
                </CardGroup>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Home;