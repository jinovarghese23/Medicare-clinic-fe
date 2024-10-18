import React from 'react'
import { useNavigate } from 'react-router-dom'

function Banner() {
    const navigate=useNavigate()
    return (
        <>
            <section className="bg-gray-900 mb-7 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            The Best

                            <span className="sm:block"> Medical Services </span>
                        </h1>


                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button onClick={()=>navigate('/login')} className='mt-10 mb-10 text-xl bg-pink-600 text-white px-10 py-4 rounded-full font-light hidden:md:block'>Create account</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner