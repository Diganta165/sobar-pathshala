import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Service = (props) => {
    console.log('service', props.service);
    const {image, name, price} = props.service;
    return (
        <div className='p-3'>
            <CardGroup>
            <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                </CardGroup>
        </div>
    );
};

export default Service;