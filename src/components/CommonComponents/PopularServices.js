import React from 'react'
import menimage from '../../images/menimage.png'
import image12 from '../../images/image123.png'

const PopularServices = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold text-center mb-2">Popular Services</h2>
            <div className="h-1 w-40 bg-yellow-400 mx-auto mb-8"></div>
            <img src={image12} alt='' className='mx-auto h-3/4 w-3/4' /> 
        </div>
    )
}

export default PopularServices
