import React from 'react';
import { Link } from 'react-router-dom';

const SinglePromotion = (props) => {
    const { _id, img, taka, desc, name } = props.data
    const description = desc?.slice(0, 150)
    return (
        <div>
            <div className="m-4">
                <div className="card" style={{ maxWidth: "500px" }}>
                    <div className="row g-0">
                        <div className="col-sm-5" style={{ background: " #868e96" }}>
                            <img src={img} width="500px" className="card-img-top h-100" alt="..." />
                        </div>
                        <div className="col-sm-7">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{description}</p>
                                <Link to="/add"><button onClick={() => props.handleMyOrders({ _id, img, taka, desc, name })} className="btn btn-success">Book Now</button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SinglePromotion;