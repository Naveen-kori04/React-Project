import React from 'react'
import { company_logos } from '../assets/assets'
const Trustedby = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-24 lg:px-40 gap-10 text-gray-700 dark:text-white/80'>
      <h3 className='font-semibold'>Trusted by Leading Companies</h3>
      <div className='flex items-center justify-center flex-wrap gap-10 m-4'> 
        {company_logos.map((element,index) =>{
            return <img key={index} src={element} className='max-h-5 sm:max-h-6 dark:drop-shadow-xl' alt="" />
        })}
      </div>
    </div>
  )
}

export default Trustedby
