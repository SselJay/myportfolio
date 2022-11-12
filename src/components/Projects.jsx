import React from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import tgp from '../assets/tgp.mp4';
import onlypans from '../assets/onlypans.mp4';
import codify from '../assets/codify.mp4';

export default function Projects() {
  AOS.init();
  return (
    <div id='projects'  
         className="mt-10 
                    mb-20 
                    md:pt-20 
                    sm:pt-16
                    lg:pl-0
                    md:ml-56
                    
                    max-w-[1000px]
                    relative
                    ">

<div className='flex 
                      gap-4
                      justify-center
                      
                      '>

      <div className='md:before:content-[""]
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


        <h1 className=' 
                     font-poppins 
                   text-green-100 
                     text-2xl
                     sm:text-4xl 
                     font-semibold 
                     text-center
                     md:text-end
                     border-b-2
                     p-5
                     lg:border-none
                     lg:p-0
                     
                     '>
                     
                    My Projects
                     
                     </h1>
        </div>



<div className="flex 
                flex-col
                lg:flex-row
                gap-10
                ">
    <div  data-aos="fade-right"
            data-aos-delay="400" 
            data-aos-duration='1400'
          className="overlay-hidden 
                     rounded-lg
                     
                     ">
        <video autoPlay 
               muted 
               loop 
               src={tgp}
               className='my-10 
                          rounded
                          w-full
                          h-auto
                          p-5
                          lg:p-0
                          mx-auto
                          relative
                          
                          '>
               </video>

               <a href="https://sseljay.github.io/" 
     target={'https://sseljay.github.io/'}>

    <div  data-aos="fade-left"
            data-aos-delay="200" 
            data-aos-duration='1400'
          className=' absolute
                     ml-auto
                     mr-auto
                     left-0
                     right-0  
                     text-center     
                     font-poppins 
                   text-green-100 
                     text-xl
                     sm:text-3xl 
                     font-semibold py-5 px-12 
                     lg:top-[60px]
                     drop-shadow-sm
                     
                     lg:left-[600px]
                     lg:min-w-max
                     rounded-lg
                   bg-[#1a1a1a]
                   hover:bg-slate-800
                     max-w-sm
                     '>
                   
           The Green Project

    </div>
  </a> 

    </div>
    <div  data-aos="fade-left"
            data-aos-delay="200" 
            data-aos-duration='1400'
          className="font-poppins 
                    max-w-96
                    p-16
                    md:p-0
                    mt-5
                    md:mt-20 
                    lg:max-w-xs
                    lg:mt-44 
                    text-justify 
                    font-extralight
                    text-sm
                    md:text-base
                    mx-auto
                    ">


    The Green Project is focused on spreading knowledge on the current situation of our worlds environmental crisis. 

    <br/><br/>
    
    I have built this project using Html, Css, Bootstrap and a touch of Media Query. I chose my primary color to be white, secondary color to be black and green as my accent color to keep everything simple and neat.
    </div>
  </div>










<div className="flex 
                flex-col-reverse
                lg:flex-row
                gap-10
                ">
                <div  data-aos="fade-right"
            data-aos-delay="200" 
            data-aos-duration='1400'
          className="font-poppins 
                    max-w-96
                    p-16
                    md:p-0
                    mt-5
                    md:mt-20 
                    lg:max-w-xs
                    lg:mt-44 
                    text-justify 
                    font-extralight
                    text-sm
                    md:text-base
                    mx-auto
                    ">


Onlypans is a restaurant located in Makati, it is really popular as it became a part of Makati's night life which is why we've decided to develop the Onlypans website.

<br/><br/>

My part for this project is basically the front-end development. I chose white as primary color, black as secondary and red for our accent color since Onlypans restaurant's color is red. We used a json server for this and a third party API for the CRUD functionality.
    </div>
    <div  data-aos="fade-left"
            data-aos-delay="400" 
            data-aos-duration='1400'
          className="overlay-hidden 
                     rounded-lg
                     
                     ">
        <video autoPlay 
               muted 
               loop 
               src={onlypans}
               className='my-10 
                          rounded
                          w-full
                          h-auto
                          p-5
                          lg:p-0
                          mx-auto
                          relative
                          
                          '>
               </video>
               <a href="https://sseljay.github.io/" 
     target={'https://sseljay.github.io/'}>

    <div  data-aos="fade-right"
            data-aos-delay="200" 
            data-aos-duration='1400'
          className=' absolute
                     ml-auto
                     mr-auto
                     left-0
                     right-0  
                     text-center     
                     font-poppins 
                   text-green-100 
                     text-xl
                     sm:text-3xl 
                     font-semibold py-5 px-12 
                     lg:top-[620px]
                     drop-shadow-sm
                     lg:right-[500px]
                     lg:min-w-max
                     rounded-lg
                   bg-[#1a1a1a]
                   hover:bg-slate-800
                     max-w-sm
                     md:hidden
                     block
                     '>
                   
           Onlypans

    </div>
  </a> 
    </div>
    
  </div>

  







  <a href="https://sseljay.github.io/" 
     target={'https://sseljay.github.io/'}>

    <div  data-aos="fade-right"
            data-aos-delay="200" 
            data-aos-duration='1400'
          className=' absolute
                     ml-auto
                     mr-auto
                     left-0
                     right-0  
                     text-center     
                     font-poppins 
                   text-green-100 
                     text-xl
                     sm:text-3xl 
                     font-semibold py-5 px-12 
                     lg:top-[620px]
                     drop-shadow-sm
                     hidden
                     lg:block
                     lg:right-[500px]
                     lg:min-w-max
                     rounded-lg
                   bg-[#1a1a1a]
                   hover:bg-slate-800
                     max-w-sm
                     '>
                   
           Onlypans

    </div>
  </a> 










  <div className="flex 
                flex-col
                lg:flex-row
                gap-10
                ">
    <div  data-aos="fade-right"
            data-aos-delay="400" 
            data-aos-duration='1400'
          className="overlay-hidden 
                     rounded-lg
                     
                     ">
        <video autoPlay 
               muted 
               loop 
               src={codify}
               className='my-10 
                          rounded
                          w-full
                          h-auto
                          p-5
                          lg:p-0
                          mx-auto
                          relative
                          
                          '>
               </video>

               <a href="https://sseljay.github.io/" 
     target={'https://sseljay.github.io/'}>

    <div  data-aos="fade-left"
            data-aos-delay="200" 
            data-aos-duration='1400'
          className=' absolute
                     ml-auto
                     mr-auto
                     left-0
                     right-0  
                     text-center     
                     font-poppins 
                   text-green-100 
                     text-xl
                     sm:text-3xl 
                     font-semibold py-5 px-12 
                     lg:top-[60px]
                     drop-shadow-sm
                     
                     lg:left-[600px]
                     lg:min-w-max
                     rounded-lg
                   bg-[#1a1a1a]
                   hover:bg-slate-800
                     max-w-sm
                     '>
                   
           Codify ph

    </div>
  </a> 

    </div>
    <div  data-aos="fade-left"
            data-aos-delay="200" 
            data-aos-duration='1400'
          className="font-poppins 
                    max-w-96
                    p-16
                    md:p-0
                    mt-5
                    md:mt-20 
                    lg:max-w-xs
                    lg:mt-44 
                    text-justify 
                    font-extralight
                    text-sm
                    md:text-base
                    mx-auto
                    ">


Codify is our group's freelancing website. We developed this website to open up a medium for business owners that wants to have a website for their businesses. 

<br/><br/>

The technologies we used for this project are Reactjs, Material UI and Redux for our frontend. We then used Laravel as our API and Mysql for database.

<br/><br/>

My part on this project is the development of our Laravel API. And I also took some parts on the front-end development.
    </div>
  </div>


</div>
  )
}
