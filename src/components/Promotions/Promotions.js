import React, { useEffect, useState } from 'react';
import SinglePromotion from './../SinglePromotion/SinglePromotion';

const Promotions = () => {
    const [promotions, setPromotions] = useState()
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setPromotions(data))

    }, [])
    return (
        <div className="p-2">
            <h1 className="text-center ">Our Promotions</h1>
            <div className="main-containerd">

                {promotions?.map(promotion => <SinglePromotion key={promotion._id} data={promotion}></SinglePromotion>)}
            </div>

        </div>
    );
};

export default Promotions;