import React from 'react';

const Footer = () => {
    return (
        <div className='bg-secondary p-3'>
            <footer>
                <h1 className='text-center'>Education Center</h1>
                <div className='d-flex justify-content-center'>
                    <div className='contactAddress-left'> 
                        <small>Mirpur, DOHS</small> <br />
                        <small>Dhaka, Bangladesh</small>
                    </div>
                    <div className='contactAddress-right'> 
                        <small>Phone: <a href="tel:203213210">203213210</a></small> <br />
                        
                    </div>
                    
                </div>
                <p className="text-center pt-5 mb-0"><small >All © in 2021</small></p>
                
            </footer>
        </div>
    );
};

export default Footer;