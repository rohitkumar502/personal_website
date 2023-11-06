import { useState } from 'react';
import bannerImg from '../assets/dev.jpg'
const About = () =>{
    const[data, setData] = useState({
        image:bannerImg,
        title:"Java Backend Developer",
        desc1:`A skilled Java backend developer in 2003 is a professional with a deep understanding of Java programming and its application in building robust and efficient server-side applications. They possess strong problem-solving abilities and are well-versed in various Java frameworks and libraries, making them adept at designing and implementing scalable and high-performance backend systems.`,
        desc2:`Key attributes of a top Java backend developer include expertise in Java EE (Enterprise Edition) or Spring framework, which allows them to create web services, RESTful APIs, and microservices. They are proficient in working with databases, particularly SQL and NoSQL databases, and can design and optimize data models. Additionally, they have a solid grasp of software architecture and can craft modular, maintainable, and secure code.

        Java backend developers are adept at version control systems like Git and continuous integration/continuous deployment (CI/CD) pipelines to ensure the smooth deployment of their applications. They also possess excellent communication skills and can collaborate effectively with frontend developers, QA teams, and project managers to deliver end-to-end solutions.`,
        actionButton:{
                title:"Read More..",
                link: "/readmore"
        },
    })
    return <>
    
        <div className="main-container bg-gray-100 border py-16">
            <h1 className="text-center text-5xl underline font-bold pb-16">About Me</h1>

                <div className="main-container flex items-center ">
                    {/* image container */}
                    <div className='w-full flex justify-center'>
                        <img className='w-fit' src={data.image} alt='rohit kumar'  />
                    </div>

                    {/* text container */}
                    <div className='w-full flex justify-center'>
                       <div className='space-y-5 w-2/3'>
                       <h1 className='text-3xl  font-semibold'>{data.title} </h1>
                        <p>{data.desc1}</p>
                        <p>{data.desc2}</p>
                    
                        <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                            {data.actionButton.title}
                        </button>
                        
                       </div>

                    </div>
                </div>
        </div>
    
    </>;
};

export default About;