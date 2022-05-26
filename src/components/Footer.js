import React from "react";
import Link from 'react-router-dom'

export default function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Imformation</h6>
                        <hr />
                        <p className="text-white">
                            Voluptate asperiores temporibus aliquid! Id commodi nisi nostrum at in, veniam vitae. Reprehenderit amet provident ad quo facilis accusamus vero corrupti, aliquid quis sit omnis adipisci necessitatibus aliquam unde odio? Eius aliquam voluptatibus non mollitia esse. Quis.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><a href="/">Home</a></div>
                        <div><a href="/about">About</a></div>
                        <div><a href="/contact">Contacts</a></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p>+9845678945</p></div>
                        <div><p>+9874389509</p></div>
                        <div><p>myemail@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
};
