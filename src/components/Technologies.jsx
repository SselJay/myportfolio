import React from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import jslogo from '../assets/JS_logo.svg';
import bslogo from '../assets/Bootstrap_logo.svg';
import twlogo from '../assets/Tailwind_CSS_Logo.svg';
import muilogo from '../assets/material-ui.svg';
import reactlogo from '../assets/react.svg';
import nodelogo from '../assets/Node.js_logo.svg';
import phplogo from '../assets/PHP-logo.svg';
import laravellogo from '../assets/laravel-2.svg';

export default function Technologies() {
  AOS.init();
  return (
    <div id='technologies' 
         className="mt-10 
                    mb-60 
                    md:pt-32
                    md:max-w-[500px] 
                    pt-28
                    lg:pl-16
                    mx-auto
                    max-w-[500px]
                    lg:max-w-[1000px]
                    
                    ">

<div     data-aos="fade-left"
         data-aos-delay="200" 
         data-aos-duration='1400'
         className='flex 
                    gap-4
                    justify-center
                      
                      '>

      
        <h1 className=' 
                     font-poppins 
                   text-green-100 
                     text-2xl
                     sm:text-4xl 
                     font-semibold 
                     text-center
                     md:text-start
                     border-b-2
                     p-5
                     lg:border-none
                     lg:p-0
                     
                     '>
                     
                     Technologies I use
                     
                     </h1>

                     <div className='md:after:content-[""]
                      hidden 
                      lg:block 
                      top-20 
                      mt-5
                      w-96 
                      h-[1px] 
                      bg-blue-100 
                      opacity-50
                      '>

      </div>

        </div>




<div className='flex
                flex-wrap
                mx-auto
                max-w-3xl
                '>
    <div  data-aos="fade-in"
         data-aos-delay="300" 
         data-aos-duration='1400'
          className=" 
                w-40
                mx-auto
                
                ">
  <img className="w-10
                  md:w-16
                  mx-auto
                  mt-16
                  " 
       src={jslogo} 
       alt="Bootstrap"/>
  <div className="px-6 
                  py-4
                  ">
    <div className="font-poppins 
                    font-bold 
                    text-lg
                    md:text-xl 
                    mt-5 
                    mb-2 
                    text-center
                    ">
    
    Javascript
    </div>
  </div>
</div>
      

<div data-aos="fade-in"
         data-aos-delay="400" 
         data-aos-duration='1400'
          className=" 
                w-40
                mx-auto
                
                ">
  <img className="w-12
                  md:w-20
                  mx-auto
                  mt-16
                  transition
                  hover:animate-shake
                  " 
       src={bslogo}  
       alt="Bootstrap"/>
  <div className="px-6 
                  py-4
                  ">
    <div className="font-poppins 
                    font-bold 
                    text-lg
                    md:text-xl 
                    mt-5 
                    mb-2 
                    text-center
                    ">
    
    Bootstrap
    </div>
  </div>
</div>
      

<div data-aos="fade-in"
         data-aos-delay="500" 
         data-aos-duration='1400'
          className=" 
                w-40
                mx-auto
                ">
  <img className="w-10
                  md:w-16
                  mx-auto
                  mt-16
                  transition
                  hover:animate-bounce
                  " 
       src={twlogo}  
       alt="Bootstrap"/>
  <div className="px-6 
                  py-4
                  ">
    <div className="font-poppins 
                    font-bold 
                    text-lg
                    md:text-xl 
                    mt-5 
                    mb-2 
                    text-center
                    ">
    
    Tailwind Css
    </div>
  </div>
</div>
      

    <div data-aos="fade-in"
         data-aos-delay="600" 
         data-aos-duration='1400'
          className=" 
          w-40
                mx-auto
                    ">
    <img className="w-12
                    md:w-20
                    mx-auto
                    mt-16
                    " 
        src={muilogo} 
        alt="Bootstrap"/>
    <div className="px-6 
                    py-4
                    ">
        <div className="font-poppins 
                        font-bold 
                        text-lg
                        md:text-xl 
                        mt-5 
                        mb-2 
                        text-center
                        ">
        
        Material UI
        </div>
    </div>
  </div>
</div>  

<div className='flex
                flex-wrap
                mx-auto
                max-w-3xl
                '>
    <div data-aos="fade-in"
         data-aos-delay="700" 
         data-aos-duration='1400'
          className=" 
          w-40
                mx-auto
                ">
  <img className="w-10
                  md:w-16
                  mx-auto
                  mt-16
                  transition
                  hover:animate-spin
                  " 
       src={reactlogo} 
       alt="Bootstrap"/>
  <div className="px-6 
                  py-4
                  ">
    <div className="font-poppins 
                    font-bold 
                    text-lg
                    md:text-xl 
                    mt-5 
                    mb-2 
                    text-center
                    ">
    
    Reactjs
    </div>
  </div>
</div>
      

<div data-aos="fade-in"
         data-aos-delay="800" 
         data-aos-duration='1400'
          className=" 
          w-40
                mx-auto
                ">
  <img className="w-14
                  md:w-24
                  mx-auto
                  mt-16
                  bg-slate-200
                  p-3
                  rounded-lg
                  " 
       src={nodelogo}  
       alt="Bootstrap"/>
  <div className="px-6 
                  py-4
                  ">
    <div className="font-poppins 
                    font-bold 
                    text-lg
                    md:text-xl 
                    mt-3 
                    mb-2 
                    text-center
                    ">
    
    Nodejs
    </div>
  </div>
</div>
      

<div data-aos="fade-in"
         data-aos-delay="900" 
         data-aos-duration='1400'
          className=" 
          w-40
                mx-auto
                ">
  <img className="w-12
                  md:w-20
                  mx-auto
                  mt-20
                  transition
                  hover:animate-pulse
                  " 
       src={phplogo} 
       alt="Bootstrap"/>
  <div className="px-6 
                  py-4
                  ">
    <div className="font-poppins 
                    font-bold 
                    text-lg
                    md:text-xl 
                    mt-5 
                    mb-2 
                    text-center
                    ">
    
    PHP
    </div>
  </div>
</div>
      

    <div data-aos="fade-in"
         data-aos-delay="1000" 
         data-aos-duration='1400'
          className=" 
          w-40
                mx-auto
                    ">
    <img className="w-11
                    md:w-[60px]
                    mx-auto
                    mt-16
                    " 
        src={laravellogo}  
        alt="Bootstrap"/>
    <div className="px-6 
                    py-4
                    ">
        <div className="font-poppins 
                        font-bold 
                        text-lg
                        md:text-xl 
                        mt-4 
                        mb-2 
                        text-center
                        ">
        
        Laravel
        </div>
    </div>
  </div>
</div>     





    </div>
  )
}
