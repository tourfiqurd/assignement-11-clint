import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleOrder from '../SingleOrder/SingleOrder';
import SinglePromotion from '../SinglePromotion/SinglePromotion';
import "./Home.css"

const Home = () => {

    const [promotions, setPromotions] = useState()
    const [orders, setOrders] = useState()
    useEffect(() => {
        fetch("https://frightening-warlock-39024.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setPromotions(data))

    }, [])
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])

    const handleMyOrders = (data) => {
        fetch("http://localhost:5000/orders", {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ data })
        })

    }
    console.log(promotions);
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide py-3" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img height="520px" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/travel/wp-content/uploads/sites/2/2018/04/p-17.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img height="520px" src="http://www.nicdarkthemes.com/themes/travel/wp/demo/travel/wp-content/uploads/sites/2/2018/04/parallax-2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img height="520px" src="https://i.pinimg.com/originals/90/e7/e5/90e7e5b26fde5b46741321f84b7b4004.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide py-3" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                    </div>
                    <div className="carousel-item">

                    </div>
                    <div className="carousel-item">

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="text-center">
                <h3>SUMMER CORE PLANS</h3>


            </div>
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                                    <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                                            Private Projects</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                                            Phone Support</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
                                        </li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                                            Reports</li>
                                    </ul>
                                    <div className="d-grid">
                                        <Link to="/" className="btn btn-primary text-uppercase">Button</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">

                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                                    <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                                            Reports</li>
                                    </ul>
                                    <div className="d-grid">
                                        <Link to="/" className="btn btn-primary text-uppercase">Button</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                                    <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong>
                                        </li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
                                            Subdomains</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
                                    </ul>
                                    <div className="d-grid">
                                        <Link to="/" className="btn btn-primary text-uppercase">Button</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center  p-1">
                <h2>Your Orders</h2>
                <p>BEST TRAVEL PACKAGES AVAILABLE</p>
                <Link to="/add" className="btn btn-outline-primary">Add New Order</Link>
            </div>

            <div className="main-containerd">
                {promotions?.map(promotion => <SinglePromotion key={promotion._id} data={promotion} handleMyOrders={handleMyOrders}></SinglePromotion>)}
            </div>
            <div>


            </div>
            <div className="chair-back">
                <div className="text-center">
                    <h5>SUMMER PROMOTION</h5>
                    <h1>SANTORINI - GREEK ISLAND TOUR</h1>
                    <h5>1000 $ for person - 6 night</h5>
                    <button className="btn btn-success">More Details</button>
                </div>



            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="text-center  p-1">
                <h2>OUR DESTINATIONS</h2>
                <p>CHOOSE YOUR NEXT DESTINATION</p>
            </div>
            <img width="100%" src="https://image.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg" alt="" />

            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="DESTINATIONS-back">
                <div className="text-center text-white d-md-flex justify-md-content-center align-md-items-center">
                    <div className="p-5">
                        <h1>75</h1>
                        <h5>DESTINATIONS</h5>

                    </div >
                    <div className="p-5">
                        <h1>149</h1>
                        <h5>TOURS PACK</h5>

                    </div>
                    <div className="p-5">
                        <h1>32</h1>
                        <h5>CRUISES</h5>

                    </div>
                    <div className="p-5">
                        <h1>24</h1>
                        <h5>HOUR SUPPORT</h5>

                    </div>
                </div>


            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>

    );
};

export default Home;