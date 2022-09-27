import Image from "next/image"
import { useState } from "react"


const NavbarList = [
    {id: 1 ,  title: 'About Us' , to: '/about'},
    {id: 2 ,  title: 'Services' , to: '/our-services'},
    {id: 3 ,  title: 'Blogs' , to: '/blogs'},
    {id: 4 ,  title: 'Contact Us' , to: '/contact-us'},
]

const Navbar = () => {
    const [showMenu , setShowMenu] = useState(false)

    return (
        <nav className="max-w-[1280px] mx-auto w-full py-[32px] px-2 relative
        flex justify-between items-center">
            
            
            <a href="/">
                <Image src={require("../public/images/logo.png")} alt='logo'/>
            </a>

            <ul className="hidden lg:flex gap-x-[60px]">
                {NavbarList.map(navLink => {
                    return <li className="flex justify-center items-center"
                     key={navLink.id}>
                        <a className="p-2 text-[#181945] font-[700] text-[14px] leading-[18px]" 
                        href={navLink.to}>
                            {navLink.title}
                        </a>
                    </li>
                })}
            </ul>

            <div className="flex gap-x-2">
                
                <button className="bg-[#583FBC] text-white rounded-[12px] px-[10px] sm:px-[25px] py-[15px] font-[500] text-[14px] leading-[18px] tracking-[-0.02em]">Book appointment</button>

                <button onClick={ () => setShowMenu(value => !value)}
                className="block lg:hidden
                bg-[#583FBC] text-white rounded-[12px] px-[10px] sm:px-[25px] py-[15px] font-[500] text-[14px] leading-[18px] tracking-[-0.02em]">Menu</button>

            </div>


            <ul className={`${showMenu ? 'flex' : 'hidden'} flex-col lg:hidden gap-[60px] bg-[#583FBC] w-[250px] py-10
            absolute top-[100px] right-[10px] rounded-xl z-50`}>
                {NavbarList.map(navLink => {
                    return <li className="flex justify-center items-center"
                     key={navLink.id}>
                        <a className="p-2 text-white font-[700] text-[14px] leading-[18px]" 
                        href={navLink.to}>
                            {navLink.title}
                        </a>
                    </li>
                })}
            </ul>
        
        </nav>
    )
}

export default Navbar