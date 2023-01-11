import React from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  AOS.init();
  return (
    <div id='about' 
         className=" 
                    mt-10 
                    mb-16 
                    md:pt-20 
                    pt-32
                    sm:pt-16
                    pl-0
                    lg:pl-20
                    lg:ml-56
                    mx-w-[450px]
                    md:w-[500px]
                    lg:w-[1000px]
                    md:ml-[200px]
                    mx-auto
                    ">
      
      <div data-aos="fade-right"
           data-aos-delay="200" 
           data-aos-duration='800'
           className='flex 
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
                     text-3xl
                     sm:text-4xl 
                     font-semibold 
                     text-center
                     md:text-end
                     mb-6
                     lg-mb-0
                     border-b-2
                     p-5
                     lg:border-none
                     lg:p-0
                     '>
                     
                     About Me
                     
                     </h1>
        </div>
        <div className='flex
                        flex-col
                        lg:flex-row
                        mx-auto
                        gap-8
                        pl-0
                        lg:pl-10
                        '>
            <div data-aos="fade-right"
             data-aos-delay="400" 
             data-aos-duration='1400'
             className='mt-8
                            '>
              <div className=" block
                              rounded-lg 
                              overflow-hidden 
                              h-44
                              w-52
                              md:h-64
                              md:w-72
                              lg:max-h-64 
                              lg:max-w-72
                              mx-auto
                              ">
              
                  <div className='imagebg 
                                  bg-[url(../public/profilecropped.png)] 
                                  block
                                  rounded-lg
                                  w-full
                                  h-52
                                  md:w-full 
                                  md:h-64 
                                  bg-cover 
                                  object-center
                                  mx-auto
                                  '>
                  </div>
              </div>
            </div>

            <div>    
                <p data-aos="fade-left"
             data-aos-delay="500" 
             data-aos-duration='1100'
             className=' 
                              font-poppins 
                              font-light
                              mt-4
                              md:mt-7 
                              max-w-[320px]
                              md:max-w-[450px] 
                              text-justify
                              mx-auto
                              text-sm
                              lg:text-lg
                              '>
                
                Hi! Russel here, 24. I am generally interested in designs. I majored in computer networks but unsure of my interests before then fell in love with graphics designing. 
                
                </p>
                <p data-aos="fade-left"
             data-aos-delay="600" 
             data-aos-duration='1100'
             className=' 
                              font-poppins
                              font-light 
                              mt-7 
                              max-w-[320px]
                              md:max-w-[450px]
                              text-justify
                              mx-auto
                              text-sm
                              lg:text-lg
                              '>

                Recently, I managed to understand and learn more about the industry of programming. So I've decided to learn programming and surprisingly, I find it really interesting like I've never felt this excited and ecstatic before, it's a bit weird of me since I never liked programming before but now I enjoy the struggles of it, the solving and collaborations. Suddenly, I fell in love with programming especially when I combine my passion in graphics design with it. 

                </p>
                <p data-aos="fade-left"
             data-aos-delay="650" 
             data-aos-duration='1100'
             className=' 
                              font-poppins 
                              font-light
                              mt-7 
                              max-w-[320px]
                              md:max-w-[450px] 
                              text-justify
                              mx-auto
                              text-sm
                              lg:text-lg
                              '>

                Right now I am learning different frameworks, backend and frontend. Basically improving my skillset and I'm excited for what's next! You can check out the technologies I am currently utilizing below!

                </p>
                
              </div>
            </div>
      
    </div>
  )
}
