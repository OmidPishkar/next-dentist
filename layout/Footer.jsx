import Image from "next/image"

const Footer = () => {
    return (
        
        <footer className="min-h-[600px] w-screen max-w-full bg-[#041434] px-[80px] py-[100px]">
            
            
            
            
            <div className="w-full mb-[117px] flex flex-col gap-y-24 lg:flex-row">
                
                
                <div className="w-full lg:w-2/5 h-max">
                    
                    <div className=" pr-2">
                        <Image src={require("../public/images/logo-light.png")}/>
                        <p className="text-[#ffffff99] mt-[32px] leading-[28px] text-[18px] break-words text-center lg:text-left">
                            Dental Care Seattle is a top-rated local practice for cosmetic,<br/>preventative, and restorative dentistry on First Hill
                        </p>
                    </div>

                    <div className="mt-[64px]">
                        <p className="uppercase text-[#ffffff99] text-[12px] text-center lg:text-left">
                            FOllow us on
                        </p>


                        <ul className="flex gap-[48px] mt-[24px] justify-center lg:justify-start">
                            <li><Image src={require("../public/images/facebook.png")}/></li>
                            <li><Image src={require("../public/images/twitter.png")}/></li>
                            <li><Image src={require("../public/images/instagram.png")}/></li>
                        </ul>
                    </div>

                </div>
                
                
                <ul className="w-full lg:w-1/5 items-center lg:items-start h-max flex flex-col gap-[24px]">
                    <li className="text-[#ffffff99] text-[12px]">
                        Quick Links
                    </li>
                    <li className="text-white text-[14px]">
                    About Us
                    </li>
                    <li className="text-white text-[14px]">
                    Dental Services
                    </li>
                    <li className="text-white text-[14px]">
                    Dentist
                    </li>
                    <li className="text-white text-[14px]">
                    Blog
                    </li>
                    <li className="text-white text-[14px]">
                    FAQs
                    </li>
                </ul>
                
                
                
                <ul className="w-full lg:w-2/5 h-max flex flex-col gap-y-[32px]">
                    <li  className="text-[#ffffff99] text-[12px] text-center lg:text-left">Contact & Information</li>    

                    <li className="flex items-center gap-x-[24px] flex-col justify-center lg:flex-row lg:justify-start">
                        <Image src={require("../public/images/phoneIcon.png")}/>
                        <div>
                            <span className="text-[#ffffff99] text-[14px] block text-center my-3 lg:text-left">Phone Number</span>
                            <h5 className="text-[18px] text-white text-center lg:text-left">+98 901 031 0040</h5>
                        </div>
                    </li>

                    <li className="flex items-center gap-x-[24px] flex-col justify-center lg:flex-row lg:justify-start">
                        <Image src={require("../public/images/timeIcon.png")}/>
                        <div>
                            <span className="text-[#ffffff99] text-[14px] block text-center my-3 lg:text-left">Open Hour</span>
                            <h5 className="text-[18px] text-white text-center lg:text-left">09:00 AM - 18:00 PM</h5>
                        </div>
                    </li>

                    <li className="flex items-center gap-x-[24px] flex-col justify-center lg:flex-row lg:justify-start">
                        <Image src={require("../public/images/locIcon.png")}/>
                        <div>
                            <span className="text-[#ffffff99] text-[14px] block text-center my-3 lg:text-left">Clinic Address</span>
                            <h5 className="text-[18px] text-white text-center lg:text-left">35 West Dental Street California 1004</h5>
                        </div>
                    </li>

                </ul>                
            
            
            </div>





            <div className="w-full flex items-center justify-between flex-col sm:flex-row gap-y-4">
                <p className="text-[#ffffff99] text-[16px] font-[500]">
                    &copy;OJR. All Right Reserved
                </p>

                <div className="text-white flex gap-6 ">
                    <button className="text-[12px] sm:text-base">Terms Of Use</button>

                    <button className="text-[12px] sm:text-base">Privacy Policy</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer