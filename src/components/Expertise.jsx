import bannerBackground from "../assets/bannerbg.jpg";
const Expertise = () => {
return <>
        <div className="main-container mt-2">
            <h1 className="mb-16 text-5xl font-bold text-center underline">My Expertise</h1>
            {/* box section */}
            <div 
                    // style={
                    //     {
                    //         backgroundImage: `url(${bannerBackground})`,
                    //         backgroundSize:'cover'
                    //     }}
            className="box-container flex items-center my-16">

                <div
                     style={
                        {
                            backgroundImage: `url(${bannerBackground})`,
                            backgroundSize:'cover'
                        }}
                 className="flex text-white justify-center">
                    {/* text container */}
                    <div className="w-2/3 text-center space-y-4">
                    <h1 className="text-4xl font-bold">I love these technologies</h1>
                    <p  className="font-bold">Java backend technologies encompass a wide range of tools, frameworks, and libraries used for building server-side applications in the Java programming language. These technologies are essential for creating robust, scalable, and efficient backend systems to power web applications, APIs, and various services.</p>
                    <button className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">Hire Me</button>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    {/* skills container */}
                    <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Core Java</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Java 8</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Spring MVC</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Spring Security</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Spring ORM</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Spring Boot</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">MySQL</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Hibernate</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Maven</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Git</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">STS</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Swagger</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">ReactJS</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Angular</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Azure Cloud</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">AWS Cloud</p>
                        <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Deploying on Cloud</p>

                    </div>
                    
                </div>

            </div>
        </div>
    </>;
};

export default Expertise;

