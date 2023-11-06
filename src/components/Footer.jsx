const Footer = () =>{
    return <>
        <div className="py-5 border bg-gray-100 flex justify-between px-60">

            <div>
                <p>Copyright <span><i class="fa-regular fa-copyright"></i></span> 2023 Rohit Kumar <span>All Rights Reserved</span></p>
            </div>
            <div className="space-x-5">
                <a href="/about" className="hover:underline">About</a>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
                <a href="/license" className="hover:underline">Licensing</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </div>

        </div>
    </>;


};

export default Footer;