import React from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  AOS.init();
  return (
    <div id='contact' 
    data-aos="fade-up"
    data-aos-delay="200" 
    data-aos-duration='1400' 
         className="mt-10 
                    mb-60 
                    md:pt-20 
                    sm:pt-48
                    lg:pl-0
                    lg:ml-56
                    
                    max-w-[1000px]
                    flex
                    justify-center
                    flex-col
                    ">

<h1 className=' 
                     font-poppins 
                   text-green-100 
                     text-4xl
                     sm:text-6xl 
                     font-semibold 
                     text-center
                     
                     '>
                     
                     Get in touch.
                     
                     </h1>
    <h1 className="font-poppins 
                    mx-auto
                    max-w-[600px] 
                    mt-6 
                    text-center
                    font-extralight
                    text-sm
                    px-5
                    mb-10
                    ">


    I am so looking forward to knowing and meeting talented people. I am very excited to collab and make amazing projects. I am always available to contact so feel free and get in touch!
    </h1>
    <div className='flex justify-center'>
    <a className=' w-40'  href='mailto:russeljaybuan@gmail.com'>
    <button className='     font-courier 
                            transition
                            hover:bg-[#5b5b5b]
                            hover:bg-opacity-70
                            rounded 
                            text-[#00E7FF] 
                            py-3 
                            px-5 
                            text-lg 
                            border-2 
                            border-[#00E7FF]
                            flex
                            mx-auto
                            '>
    
    Contact me
    </button>
    </a>
    </div>
</div>
  )
}
