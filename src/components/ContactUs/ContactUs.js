import React from 'react';
import { Input } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div >
            
            <form className="mt-5 mb-5">
                <div className="container w-50 ">
                    <h1 className="text-center text-lg-start">Contact With Us</h1>
                    <div className="mx-auto ">
                        <div className="row mt-3">
                            <div className="col-lg-6 col-sm-12 mb-2">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col-lg-6 col-sm-12 mb-2">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col ">
                                <input type="email" className="form-control" placeholder="Email" aria-label="email" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col ">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comment"></textarea>
                            </div>
                        </div>
                        <div className=" col-lg-2 pt-5 position-relative ">
                            <button className="btn btn-primary  position-absolute top-50 start-50 translate-middle" type="submit">Submit form</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;