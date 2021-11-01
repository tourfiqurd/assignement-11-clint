import React from 'react';
import { Link } from 'react-router-dom';

const SingleOrder = (props) => {
    const { _id, img, taka, desc, name } = props.order
    const description = desc?.slice(0, 150)
    const handleDelete = () => {
        fetch('http://localhost:5000/orders/' + _id, {
            method: 'DELETE',
            body: JSON.stringify(_id) // We send data in JSON format
        }
        )
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
    }
    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-sm-5" style={{ background: " #868e96" }}>
                    <img src={img} className="card-img-top h-100" alt="..." />
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <Link to="/" ><button className="btn btn-primary stretched-link" onClick={handleDelete}>Delete</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleOrder;