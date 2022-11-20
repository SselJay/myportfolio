import React from 'react';
import '../App.css';

export default function Footer() {
  AOS.init();
  return (
    <div className="
                    mb-3
                    lg:pl-0
                    lg:ml-56
                    
                    max-w-[1000px]
                    ">
<h1 className="font-courier 
               mx-auto
               max-w-[600px] 
                mt-6 
                text-center
                font-extralight
                text-[#00E7FF] 
                text-[12px] 
                    ">


    2022 • Designed and Built by Russel Jay Buan <br/> Inspired by: <span><a className='hover:text-green-300 transition' href="https://brittanychiang.com/" target={'https://brittanychiang.com/'}>Brittany Chiang</a> </span> 
    </h1>

    </div>
  )
}
