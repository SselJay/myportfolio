import React, { useEffect, useState } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Certifications() {
    const [tab, setTab] = useState(1);

        const toggleTab = (index) => {
            setTab(index);
        }
        AOS.init();
  return (
    <div id='certifications' 
         data-aos="fade-up"
         data-aos-delay="200" 
         data-aos-duration='1400' 
         className=" 
                    mt-10 
                    mb-36 
                    pt-44
                    md:pt-52 
                    lg:pl-0
                    md:ml-64
                    max-w-[340px]
                    md:max-w-[500px]
                    lg:max-w-[1000px]
                    mx-auto
                    ">

        <div className='flex 
                    gap-4
                    justify-center
                    pb-10
                    lg:pb-0  
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
                     
                     My Achievements
                     
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

      <div className="font-poppins 
                      flex
                      flex-col
                      lg:flex-row
                      p-2
                      ">


        <div className="flex
                        flex-row 
                        lg:flex-col 
                        border-none
                        md:border-l
                      md:border-l-blue-100
                      border-b-blue-100
                        md:border-opacity-50
                        p-5
                        gap-1
                        lg:gap-10
                        mx-auto
                        ">

            <button id='tab-button' 
                    className={tab === 1 ? "bg-[#00E7FF] text-black text-xs sm:text-sm md:text-lg rounded-lg p-1" : "bg-none text-xs sm:text-sm md:text-lg  p-1 rounded-lg"} 
                    onClick={() => toggleTab(1)} >
                    
                    Full Stack Web <br/> Development
                    </button>

            <button id='tab-button' 
                    className={tab === 2 ? "bg-[#00E7FF] text-black text-xs sm:text-sm md:text-lg rounded-lg p-1" : "bg-none text-xs sm:text-sm md:text-lg  p-1 rounded-lg"} 
                    onClick={() => toggleTab(2)} >

                    Network <br/> Administration
                    </button>
            <button id='tab-button' 
                    className={tab === 3 ? "bg-[#00E7FF] text-black text-xs sm:text-sm md:text-lg rounded-lg p-1" : "bg-none text-xs sm:text-sm md:text-lg  p-1 rounded-lg"} 
                    onClick={() => toggleTab(3)} >
                    
                    Graphics <br/> Design
                    </button>
        </div>

        <div className="font-poppins 
                        
                        flex-1 
                        lg:pr-16
                        lg:pl-16 
                        pt-5
                        ">


            <div id='htmlcss' className={tab === 1 ? "block animate-fadeIn" : "hidden"}>
                <h1 className='text-xl font-light flex gap-2 lg:gap-5'> 
                    <span className='symbols 
                                  text-sm
                                  lg:text-xl'> 
                        → 
                    </span>
                    <a className='transition 
                                text-[#00E7FF] 
                                hover:text-[#00b3c7]
                                  text-sm
                                  lg:text-xl
                                ' href='https://drive.google.com/file/d/1VSlCmdrzDaK41rEzOp7KvMPZH951pnm3/view?usp=sharing' target={'https://drive.google.com/file/d/1VSlCmdrzDaK41rEzOp7KvMPZH951pnm3/view?usp=sharing'}>
                        Top 4 student in Canvas Activities
                    </a>
                    <a className='transition text-[#00E7FF] 
                                  text-sm
                                  lg:text-xl hover:text-[#00b3c7]' href="https://kodego.ph/courses?utm_source=google&utm_medium=ppc&utm_term=kodego&utm_campaign&hsa_acc=2048530460&hsa_cam=17669936813&hsa_grp=138457831196&hsa_ad=608496230869&hsa_src=g&hsa_tgt=aud-1680655044120%3Akwd-1409508190316&hsa_kw=kodego&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZnH6SAZ2E8h1GYOdDRrnhvOfdk2Q52iZe3m1amLXCW-w7oV7xh4aERoCexEQAvD_BwE" target={'https://kodego.ph/courses?utm_source=google&utm_medium=ppc&utm_term=kodego&utm_campaign&hsa_acc=2048530460&hsa_cam=17669936813&hsa_grp=138457831196&hsa_ad=608496230869&hsa_src=g&hsa_tgt=aud-1680655044120%3Akwd-1409508190316&hsa_kw=kodego&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZnH6SAZ2E8h1GYOdDRrnhvOfdk2Q52iZe3m1amLXCW-w7oV7xh4aERoCexEQAvD_BwE'}>
                        @KodeGo
                    </a>
                </h1>
                <h1 className='font-light flex gap-5 pl-11 mt-2
                                  text-sm
                                  lg:text-xl'> 
                    <span className='symbols mt-[6px]
                                  text-xs
                                  lg:text-xl'> 
                    ► 
                    </span>
                    <a href=''>
                        General Knowledge
                    </a>
                </h1>
                <p className='mt-3 pl-20 font-extralight
                                  text-xs
                                  lg:text-xl'>
                    <span className='symbols'>
                        • &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                Fundamentals of Programming
                </p>
                <p className='mt-3 pl-20 font-extralight
                                  text-xs
                                  lg:text-xl'>
                    <span className='symbols'>
                        • &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                Complexity and different approaches of technologies
                </p>
                <p className='mt-3 pl-20 font-extralight
                                  text-xs
                                  lg:text-xl'>
                    <span className='symbols'>
                        • &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                Understanding of different programming languages syntax
                </p>
            </div>






            <div id='jscript' className={tab === 2 ? "block animate-fadeIn " : "hidden"}>
            <h1 className='text-xl font-light flex gap-5'> 
                    <span className='symbols
                                  text-sm
                                  lg:text-xl'> 
                        → 
                    </span>
                    <a className='transition text-[#00E7FF] hover:text-[#00b3c7]
                                  text-sm
                                  lg:text-xl' href="https://www.credly.com/badges/2833f38f-c51b-411f-8e29-d116e5ce0f66" target={'https://www.credly.com/badges/2833f38f-c51b-411f-8e29-d116e5ce0f66'}>
                        Implementing and Administering Cisco Solutions
                    </a>
                </h1>
            <h1 className='text-xl font-light flex gap-5'> 
                    <span className='symbols
                                  text-sm
                                  lg:text-xl'> 
                        → 
                    </span>
                    <a className='transition text-[#00E7FF] hover:text-[#00b3c7]
                                  text-sm
                                  lg:text-xl' href="https://www.credly.com/badges/34a6e790-417f-4808-9c86-84292255256e/public_url" target={'https://www.credly.com/badges/34a6e790-417f-4808-9c86-84292255256e/public_url'}>
                        Enterprise Networking, Security, and Automation
                    </a>
                </h1>
                <h1 className='text-xl font-light flex gap-5 pl-11 mt-2'> 
                    <span className='symbols mt-[6px]
                                  text-xs
                                  lg:text-xl'> 
                    ► 
                    </span>
                    <a className='
                                  text-sm
                                  lg:text-xl' href=''>
                        General Knowledge
                    </a>
                </h1>
                <p className='mt-3 pl-20 font-extralight
                                  text-xs
                                  lg:text-xl'>
                    <span className='symbols'>
                        • &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    Fundamentals of Network Security
                </p>
                <p className='mt-3 pl-20 font-extralight
                                  text-xs
                                  lg:text-xl'>
                    <span className='symbols'>
                        • &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                Basic Routing and Network Configurations
                </p>
                <p className='mt-3 pl-20 font-extralight
                                  text-xs
                                  lg:text-xl'>
                    <span className='symbols'>
                        • &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    Implementation of Network Security Protocols
                </p>
                <p className='mt-3 pl-20 font-extralight
                                  text-xs
                                  lg:text-xl'>
                    <span className='symbols'>
                        • &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    Network Design
                </p>
            </div>





            <div id='jscript' className={tab === 3 ? "block animate-fadeIn" : "hidden"}>
            <h1 className=' font-light flex gap-5
                                  text-sm
                                  lg:text-xl'> 
                    <span className='symbols'> 
                        → 
                    </span>
                    <a className='transition text-[#00E7FF] hover:text-[#00b3c7]' href="https://drive.google.com/file/d/1xiMzc4y1fYdmlAfQk_fHZx5GSSS6BeER/view" target={'https://drive.google.com/file/d/1xiMzc4y1fYdmlAfQk_fHZx5GSSS6BeER/view'}>
                        Adobe Illustrator Designer Certificate
                    </a>
                </h1>
                <h1 className=' font-light flex gap-5 pl-11 mt-2
                                  text-sm
                                  lg:text-xl'> 
                    <span className='symbols text-xs mt-[6px]'> 
                    ► 
                    </span>
                    <a href=''>
                        General Knowledge
                    </a>
                </h1>
                <p className='mt-3 pl-20 font-extralight
                                  text-xs
                                  lg:text-xl'>
                    <span className='symbols'>
                        • &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                Fundamentals of Art Designs which significantly helped me incorporate this skill to Web Development
                </p>
                <p className='mt-3 pl-20 font-extralight
                                  text-xs
                                  lg:text-xl'>
                    <span className='symbols'>
                        • &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                Complexity and different approaches of technologies
                </p>
                <p className='mt-3 pl-20 font-extralight
                                  text-xs
                                  lg:text-xl'>
                    <span className='symbols'>
                        • &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                Mastery of Tools like Adobe Illustrator and Adobe Photoshop
                </p>
            </div>
            
        </div>
      </div>
    </div>
  )
}
