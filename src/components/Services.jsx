import { useState } from "react";
import icon from "../assets/spo.jpeg";
const Services=()=>{
    useState([
        {
            id:"",
            title:"",
            desc:"",
            actionButton:{
                title:"",
                link:"",
            },
        },
    ]);
    return (
        <>
            <div className="main-container py-14">
                <h1 className="text-4xl font-bold text-center underline">My Services</h1>
                <div className="services-container space-x-5 px-10 flex mt-12">
                    <div className="services1 cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl  space-y-4">
                        <i class="text-5xl fa-solid fa-server"></i>
                        <h1 className="text-3xl">Backend Development</h1>
                        <p>Backend development is a significant aspect of web and software development that focuses on building and maintaining the server-side components of an application. These server-side components handle data processing, business logic, and the interaction with databases. </p>
                        <button className="px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg">Check</button>
                        </div>
                    <div className="services2 cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl  space-y-4" >
                        <i class="text-5xl fa-brands fa-html5"></i>
                        <h1 className="text-3xl">Web Development</h1>
                        <p>Web development is the process of creating websites or web applications that are accessible on the internet. Web development can involve front-end development, back-end development, or a combination of both.</p>
                        <button className="px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg">Check</button>
                    </div>
                    <div className="services3 cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl  space-y-4" >
                        <img className='mx-auto' src={icon} />
                        <h1 className="text-3xl">SharePoint Development</h1>
                        <p>SharePoint development offers the flexibility to create tailored solutions that meet the unique requirements of organizations, from simple intranet sites to complex enterprise applications.</p>
                        <button className="px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg">Check</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;