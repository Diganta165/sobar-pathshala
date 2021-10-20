import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
// import '../../images/'

const ServicesHome = (props) => {
    console.log(props.service);
    const { image, name, price } = props.service;
    return (
        <div className = "mb-5">
            
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
            
        </div>
    );
};

export default ServicesHome;