import React from 'react'

function Hero() {
    return (
        <>
            <div className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg)",
                }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-white text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">The doctors are now just a click away</h1>
                        <p className="mb-5">
                            browse through our extensive list of trusted doctors,
                            schedule your appointment hassle-free.
                        </p>
                        <button className="btn btn-outline btn-primary">Book Appointments
                            <i class="fa-solid fa-right-long ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero