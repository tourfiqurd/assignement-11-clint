import React, { useRef } from 'react';
import "./add.css"

const AddPromotions = () => {
    const nameRef = useRef()
    const descRef = useRef()
    const imageRef = useRef()
    const priceRef = useRef()
    const handleAddUser = (e) => {
        const name = nameRef.current.value
        const desc = descRef.current.value
        const img = imageRef.current.value
        const price = priceRef.current.value
        const newuser = { name: name, img: img, taka: price, desc: desc }



        var answer = window.confirm("Save data?");
        if (answer) {
            alert("added To Ui")
        }
        else {
            alert("Command Dissmissed")
            return
        }

        e.preventDefault()
        fetch("http://localhost:5000/users", {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newuser)
        })


    }

    return (
        <div>
            <form onSubmit={handleAddUser} class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <h1 className="text-center p-2"> Please Fill Out This Form to Add Your PROMOTIONS</h1>
                <div class="card card0 border-0">
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <div class="card1 pb-5">

                                <img width="100%" src="https://image.freepik.com/free-vector/online-app-tourism-traveler-with-mobile-phone-passport-booking-buying-plane-ticket_74855-10966.jpg" alt="" /> </div>
                            <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card2 card border-0 px-4 py-5">
                                <div class="row px-3">
                                    <label class="mb-1">
                                        <h6 class="mb-0 text-sm">Tour Name</h6>
                                    </label>
                                    <input ref={nameRef} class="mb-4" type="text" name="email" placeholder="Enter a valid toot Name" />
                                </div>


                                <div class="row px-3">
                                    <label class="mb-1">
                                        <h6 class="mb-0 text-sm">ImageUrl</h6>
                                    </label>
                                    <input ref={imageRef} class="mb-4" type="text" name="email" placeholder="Enter a valid image address" />
                                </div>
                                <div class="row px-3">
                                    <label class="mb-1">
                                        <h6 class="mb-0 text-sm">Price</h6>
                                    </label>
                                    <input ref={priceRef} class="mb-4" type="text" name="email" placeholder="Enter Your Tour Price In Range" />
                                </div>

                                <div class="row px-3">
                                    <label class="mb-1">
                                        <h6 class="mb-0 text-sm">Email Address</h6>
                                    </label>
                                    <textarea ref={descRef} name="" id="" cols="30" rows="10"></textarea>
                                </div>

                                <div class="row mb-3 px-3 "> <button type="submit" class="btn btn-blue text-center">Post</button> </div>

                            </div>
                        </div>
                    </div>

                </div>
            </form>

        </div>
    );
};

export default AddPromotions;