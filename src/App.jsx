import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Heropage from './components/Heropage';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import logo from '../public/plogotealmax.svg';
import burger from '../public/menu.svg';
import instaimg from '../public/instagramnewv1.png';
import facebookimg from '../public/facebook--v1.png';
import linkedinimg from '../public/linkedin.svg';
import resumecvpdf from '../public/mycv.pdf'
import x from '../public/x.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect( () => {
          const btn = document.querySelector('.mobile-button');
          const x = document.querySelector('.mobile-x-button');
          const sidebar = document.querySelector('.sidebar');

          btn.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
          });

          x.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
          });
  });
          
  AOS.init();

  return (
    <div className="relative 
                    min-h-screen 
                    md:flex 
                    m-0 
                    p-0">
                    
    {/* mobile menu */}
      <div className='bg-gray-800 
                      text-gray-100 
                      flex 
                      justify-between 
                      md:hidden
                      sticky
                      top-0
                      z-10
                      '>
        <div id='#hero' className='p-4 focus:outline-none 
                                  px-5'>
                  <img 
                      className='rounded-full
                                  h-9
                                  w-9
                                  hover:bg-[#5b5b5b]
                                    hover:bg-opacity-70
                                    transition
                                  ' 
                      src={logo} 
                      alt="" 
                    />
        </div>

                <button title='mobileview'
                        className='mobile-button 
                                  focus:outline-none 
                                  focus:bg-gray-700
                                  hover:bg-gray-100
                                  hover:bg-opacity-20
                                  transition
                                  px-5
                                  '>

                  <img src={burger} 
                      alt="" 
                      className='  
                                  h-7 
                                  w-7
                                  '
                                  />
                </button>
              </div>

                <div className=" sidebar 
                            z-20
                          border-blue-50 
                          text-blue-50 
                            w-33
                            fixed
                            inset-y-0
                            left-0
                            transform
                            -translate-x-full
                            transition
                            duration-200
                            ease-in-out
                            md:translate-x-0
                            ">

        <button className='flex justify-end md:hidden'>
          <img src={x} alt="" 
              className='x-color 
                          mobile-x-button 
                          transition hover 
                          w-6
                          h-6
                          text-end
                          justify-end
                          flex
                          object-right
                          ml-40
                          ' />
        </button>

                  <a href="">
                  <img data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="100"
                      data-aos-offset="0"
                      src={logo} 
                      alt=""
                      className='mt-8 
                                  mb-10 
                                  mx-auto 
                                  h-12 
                                  w-12
                                  
                                  hover:bg-[#5b5b5b]
                                    hover:bg-opacity-70
                                    transition
                                    rounded-full'
                                  />
                  </a>
                  {/* </div> */}
                  <nav className='font-courier 
                                  text-start
                                  '>

        <div data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="200"
            data-aos-duration="500">
                    <a href="#about"
                      className='block 
                                  py-5 
                                  px-4 
                                  link 
                                  transition
                                  link-underline-about 
                                  relative
                                  text-[#00E7FF]
                                  '>
                      
                      • About
                      </a>
        </div>

        <div data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="300"
            data-aos-duration="500">
                    <a href="#certifications" 
                      className='block 
                                  py-5 
                                  px-4 
                                  link 
                                  link-underline-certification 
                                  link-underline-blue-100
                                  text-[#00E7FF]
                                  '>
                                  
                      • Certifications
                      </a>
        </div>

        <div data-aos="fade-right"
             data-aos-easing="linear"
             data-aos-delay="400"
             data-aos-duration="500">
                    <a href="#projects" 
                      className='block 
                                  py-5 px-4 
                                  link 
                                  link-underline-projects 
                                  link-underline-blue-100
                                  text-[#00E7FF]
                                  '>
                    
                    • Projects
                    </a>
        </div>
        <div data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="500"
            data-aos-duration="500">
                    <a href="#technologies" 
                      className='block 
                                  py-5 
                                  px-4 
                                  link 
                                  link-underline-technologies 
                                  link-underline-blue-100
                                  text-[#00E7FF]
                                  '>
                                  
                      • Technologies
                      
                      </a>
        </div>

        <div data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="600"
            data-aos-duration="500">
                    <a href="#contact" 
                      className='block 
                                  py-5 
                                  px-4 
                                  link 
                                  link-underline-contact 
                                  link-underline-blue-100
                                  text-[#00E7FF]
                                  '>
                      
                      • Contact
                      </a>
        </div>

        <div data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="700"
            data-aos-duration="500">

          <a href={resumecvpdf} 
            target={resumecvpdf}>

            <button className='     font-courier 
                                    transition
                                  hover:bg-[#5b5b5b]
                                    hover:bg-opacity-70  
                                    rounded 
                                  text-[#00E7FF]
                                    
                                    px-3
                                    text-lg 
                                    border-2 
                                    border-[#00E7FF]
                                    mt-72
                                    flex
                                    ml-5
                                    fixed

                                    '>
            
            Resume
            </button>
            </a>
            </div>
                  </nav>
                </div>

                {/* MAIN CONTENT */}

              <div 
              className=" 
                        border-blue-50
                          flex-1">


                <Heropage />
                <About />
                <Certifications />
                <Projects />
                <Technologies />
                <Contact />
                <Footer />
              </div>

        {/* ////////////////////////////////////////////////////////////////////// */}

              <div 
              className="
                        border-blue-50
                          w-32
                          p-5">


        <div data-aos="fade-in"
                      data-aos-easing="linear"
                      data-aos-delay="0"
                      data-aos-duration="1000"
            className="fixed border-opacity-80 border-blue-100 h-20 top-0 right-[80px] border hidden md:block">
            </div>

        <div data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-delay="1900"
                      data-aos-duration="500" className='fixed right-[65px]'>

        <a href="https://www.facebook.com/1dip6green1/" target={'https://www.facebook.com/1dip6green1/'}>
        <img className='social-media-animation mt-32 h-8 w-8' src={facebookimg} alt="" />
        </a>
        </div>

        <div data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-delay="1700"
                      data-aos-duration="500" className='fixed right-[65px]'>
        <img className='social-media-animation mt-20 h-8 w-8' src={instaimg} alt="" />
        </div>


        <div data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-delay="2000"
                      data-aos-duration="500" className='fixed right-[65px]
                      mt-44
                      '>

        <a href="https://www.linkedin.com/in/russel-jay-buan/" 
          target={'https://www.linkedin.com/in/russel-jay-buan/'}> 
        <img className='social-media-animation h-8 w-8' src={linkedinimg} alt="" />
        </a>
        </div>

        <div data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-delay="1700"
                      data-aos-duration="500"
                      className='fixed right-[73px]  bottom-64'
                      >

        <a className='text-xs tracking-widest font-courier russel-email h-8 w-8 hidden md:block' href="mailto:russeljaybuan@gmail.com">russeljaybuan@gmail.com</a>
        </div>




            <div className="fixed 
                            border-opacity-80 
                            border-blue-100 
                            h-20 
                            bottom-0 
                            right-[80px] 
                            border 
                            hidden 
                            lg:block
                            animate-fadeIn
                            animation-delay-2000
                            ">
              
            </div>


              </div>

      
    </div>
  )
}

export default App
