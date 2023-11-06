import bannerImg from '../assets/profile.jpg';
import bannerBackground from "../assets/bannerbg.jpg";
import Typed from 'typed.js';
import { useRef } from 'react';
import { useEffect } from 'react';

const Banner=() =>{
    const el=useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ["Java Backend Developer", "Frontend Developer", "SharePoint Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop:true,
          });

           // Destropying
    return () => {
        typed.destroy();
      };

    }, []);

    return (
        <div
        // style={
        //     {
        //         backgroundImage: `url(${bannerBackground})`,
        //         backgroundSize:'cover'
        //     }
        // }
         className="main-container flex items-center">
            {/* first container */}
            <div  
            style={
            {
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize:'cover'
            }}
            
              className=" w-full flex justify-center ">
                {/* text */}
               <div className="w-2/3 space-y-5  ms-10">
                    <h3 className="text-3xl font-semibold">Hi, I am</h3>
                    <h1  className="text-5xl font-bold">Rohit Kumar</h1>
                    <h2 className="text-3xl ">I am a <span className="font-bold underline" ref={el}></span></h2>
                    <p>Dedicated Java Developer with 2 years of experience in designing and implementing robust Java
applications. Seeking a challenging role to apply my expertise in software development, problem-
solving, and team collaboration. Committed to delivering high-quality code and staying updated with
the latest Java technologies to contribute effectively to innovative projects and achieve professional
growth.</p>
                    <div className='icons-container flex space-x-5'>
                        <a className=' hover:bg-purple-800 cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center'>
                         <i class="fa-brands text-4xl fa-facebook"></i>
                        </a>
                        <a className=' hover:bg-purple-800 cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center'>  
                            <i class="fa-brands text-4xl fa-instagram"></i>
                            </a>
                            {/* <a className=' hover:bg-purple-800 cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center'>
                            <i class="fa-brands text-4xl fa-youtube"></i>
                            </a> */}
                            <a href="https://www.linkedin.com/in/rohit-kumar311/" className=' hover:bg-purple-800 cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center'>
                            <i class="fa-brands text-4xl fa-linkedin"></i>
                          </a>
                          <a href="https://github.com/rohitkumar502" className=' hover:bg-purple-800 cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center'>
                            <i class="fa-brands text-4xl fa-github"></i>
                            </a>
                    </div>
                    <a className='text-2xl px-1 py-1 bg-orange-500 rounded-full shadow-lg' href="/contact">Contact Me</a>
                    <br/>
               </div>
            </div>
               
        {/* second container */}

            <div className='w-full flex justify-center'>{/* image */}
                <img className='rounded-full my-2 shadow-lg w-fit' src={bannerImg} />
            </div>

        </div>
    );
};

export default Banner;