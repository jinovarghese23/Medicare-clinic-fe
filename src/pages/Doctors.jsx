import React from 'react'

function Doctors() {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-10 mb-10">
                <div className="h-86 rounded-lg border-stone-100 border-4">
                    <img src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        className='h-50 w-full object-cover sm:h-60 lg:h-70' alt="" />
                    <h1 className='text-white text-3xl mt-5'>Dr HAri Nath</h1>
                    <p>Dermatologist</p>
                </div>
                <div className="h-86 rounded-lg border-stone-100 border-4">
                    <img src="https://www.desunhospital.com/wp-content/uploads/2023/12/Dr.-Aditya-Varma-2-scaled.jpg"
                        className='h-50 w-full object-cover sm:h-60 lg:h-70' alt="" />
                    <h1 className='text-white text-3xl mt-5'>Dr HAri Nath</h1>
                    <p>Cardiologist</p>
                </div>
                <div className="h-86 rounded-lg border-stone-100 border-4">
                    <img src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        className='h-50 w-full object-cover sm:h-60 lg:h-70' alt="" />
                    <h1 className='text-white text-3xl mt-5'>Dr HAri Nath</h1>
                    <p>Radiologist</p>
                </div>
                <div className="h-86 rounded-lg border-stone-100 border-4">
                    <img src="https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png"
                        className='h-50 w-full object-cover sm:h-60 lg:h-70' alt="" />
                    <h1 className='text-white text-3xl mt-5'>Dr.HAri Nath</h1>
                    <p>Pediatrics</p>
                </div>
            </div>
        </>
    )
}

export default Doctors