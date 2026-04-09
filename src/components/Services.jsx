import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import Servicecard from './Servicecard';
const Services = () => {
    const servicesdata = [
        {
            title: 'Advertising',
            description: 'We create compelling ad campaigns that resonate with your target audience, driving engagement and conversions.',
            icon: assets.ads_icon
        },
        {
            title: 'content marketing',
            description: 'Our content marketing services help you create engaging and valuable content that attracts and retains your target audience.',
            icon: assets.marketing_icon 
        
        },
        {
            title: 'content writing',
            description: 'Our content writing services help you create high-quality, engaging content that resonates with your audience and drives results.',
            icon: assets.content_icon
        },
        {
            title: 'social media',
            description: 'Our social media services help you build a strong online presence, engage with your audience, and drive traffic to your website.',
            icon: assets.social_icon
        },
    ];
  return (
     <section id="services">
    <div className='relative flex flex-col items-center gap-7 px-4 
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-10 dark:hidden' />
        <Title title='How can we help you?' description='From stratergy to execution, We craft digital solutions tht move your buisness forward.' />
        
        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesdata.map((serive,index)=>{
                return <Servicecard key={index} Service={serive}/>
            })}
        </div>
    </div>
    </section>
  )
}

export default Services
