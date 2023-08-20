import React from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Heropage() {
  AOS.init();
  return (
    <div id='hero' className="mt-16 
                    mb-52 
                    md:pt-20 
                    pt-16 
                    sm:pl-32
                    md:pl-0
                    lg:pl-10 
                    flex-wrap
                    
                    md:max-w-[550px]
                    lg:max-w-[1000px]
                    md:ml-48
                    lg:mx-auto
                    ">

      <p data-aos="fade-down" 
         data-aos-duration='1200'
         data-aos-delay='800' 
         className='font-courier
                    text-center 
                    sm:text-start 
                    text-sm 
                    sm:text-md 
                    md:text-[15px]
                    lg:text-lg
                    sm:pl-6
                    md:pl-7 
                    logo-color 
                    mb-2'>

      Hi there! my name is
      </p>

      <p data-aos="fade-down" 
       data-aos-duration='1200'
       data-aos-delay='900'
         className='font-poppins 
                    font-semibold 
                    text-center 
                    sm:text-start 
                    text-5xl 
                    sm:text-5xl 
                    md:text-6xl 
                    lg:text-8xl 
                    text-green-200 
                    mb-3 
                    opacity-90
                    px-5
                    '>
         
         Russel Jay Buan.
      </p>

      <p data-aos="fade-down" 
      data-aos-duration='1000'
       data-aos-delay='1000'
         className='font-poppins 
                    font-semibold 
                    text-center 
                    sm:text-start 
                    text-2xl 
                    sm:text-2xl 
                    md:text-2xl 
                    lg:text-3xl 
                    text-green-50  
                    mb-7 
                    opacity-70
                    sm:pl-5
                    '>

                    Web Developer / Graphic Designer.
      </p>

      <p data-aos="fade-down"
      data-aos-duration='1200'
       data-aos-delay='1100' 
         className='font-poppins 
                    font-light 
                    sm:w-[500px] 
                    lg:w-500px
                    text-green-100 
                    mt-5 
                    px-20
                    sm:pl-6
                    text-center
                    sm:text-start
                    text-sm 
                    sm:text-md
                    md:text-[15px]
                    lg:text-lg
                    '>
      
      I love learning new tech trends and applying them to my projects! Making beautiful websites is something that I never thought that I would be interested in. Learn more about me!
      
      </p>
      <div className='flex flex-col'>
      </div>
      
    </div>
  )
}
