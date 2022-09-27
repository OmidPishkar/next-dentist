import Image from "next/image"
import Doctor from "../components/Doctor"
import FAQ from "../components/FAQ"
import Link from 'next/link'

const doctors = [
    {id: 1 , bgColor: '#DBEFFA' , name: 'Dianne Russell' , src: require("../public/images/doctor1.png")},
    {id: 2 , bgColor: '#DBDEFA' , name: 'Esther Howard' , src: require("../public/images/doctor2.png")},
    {id: 3 , bgColor: '#F6DBFA' , name: 'Darrell Steward' , src: require("../public/images/doctor3.png")},
    {id: 4 , bgColor: '#FADBE2' , name: 'Jenny Wilson' , src: require("../public/images/doctor4.png")},
]

const faqs = [
    {id: 1 , title: 'Is there any cost or obligation if l request an offer?' , paraph: 'I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors. '},
    {id: 2 , title: 'What kind of construction services will be purchased?' , paraph: 'I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors. '},
    {id: 3 , title: 'How Do I Print My Auto Insurance ID Card?' , paraph: 'I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors. '},
    {id: 4 , title: 'How Do I Know What Deductible Applies To My Policy?' , paraph: 'I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors. '},
    {id: 5, title: 'If I Am Moving, Will I Need To Request A New Agent?' , paraph: 'I see Coint being a long-term part of my  business structure. Not just for this business, but also our future endeavors. '},

]

const About = () => {
    return (
        <div className="max-w-[1280px] w-full mx-auto px-2">
            
            
            <header className="w-full h-max flex flex-col md:flex-row gap-[85px] my-[100px]">
                <div className="w-full md:w-1/2 flex flex-col items-center  md:items-start">
                    <h1 className="text-[64px] font-bold text-center md:text-left"> 
                        About Us
                    </h1>

                    <p className="opacity-60 text-[18px] leading-[28px] mt-[32px] mb-[70px] px-5 text-center md:text-left">
                        We want you to feel amazing about your oral wellness. Not just twice a year, but every time you take a bite, tell a joke, laugh, or share a kiss.
                    </p>


                    <Link href='/contact-us'>
                        <button className="px-[77px] py-[20px] rounded-[16px] bg-[#583FBC] text-white font-bold text-[16px]">
                        Contact Us
                        </button>
                    </Link>
                </div>


                <div className="flex items-center justify-center w-full md:w-1/2">
                    <Image src={require("../public/images/Group 13910.png")} alt='group'/>
                </div>
            </header>


            <div className="flex flex-col md:flex-row mb-[200px] md:items-center">
                <div className="relative w-full md:w-1/2 h-max">
                    <Image className="sticky z-10" src={require("../public/images/image1.png")} alt='image1'/>
                
                    <div className="w-full max-w-[400px] h-full md:h-[306px] absolute top-[-30px] left-[-30px] bg-[#DBEFFA] rounded-[32px]"></div>
                </div>

                <div className="w-full md:w-1/2 md:pl-[105px] mt-[60px] md:mt-0 flex flex-col items-center md:items-start">
                    <h6 className="mb-[16px] text-[#583FBC] font-bold text-[12px] text-center md:text-left">OUR PRIORITY</h6>
                    <h1 className="text-[64px] font-bold text-center md:text-left"> 
                        About Us
                    </h1>

                    <p className="opacity-60 text-[18px] leading-[28px] mt-[32px] mb-[70px] px-5 text-center md:text-left">
                        We want you to feel amazing about your oral wellness. Not just twice a year, but every time you take a bite, tell a joke, laugh, or share a kiss.
                    </p>


                    <button className="px-[77px] py-[20px] rounded-[16px] bg-[#583FBC] text-white font-bold text-[16px]">
                    Book an appointment
                    </button>
                </div>
            </div>


            <div className="h-max relative pt-[96px] flex flex-col items-center mb-[150px]">
                <div className="absolute top-0 left-0 w-full h-[700px] bg-[#DBDEFA] rounded-[32px]"></div>



                <h1 className="mb-[16px] text-[#583FBC] font-bold text-[12px] text-center sticky z-20">SAFETY</h1>
                <p className="text-6xl sm:text-[64px] font-bold text-center sticky"> 
                    We put the safety first
                </p>

                <p className="opacity-60 text-[18px] leading-[28px] mt-[32px] mb-[96px] px-5 text-center">
                    Lorem ipsum is placeholder text commonly used in the<br/>graphic, print, and publishing industries for previewing layouts<br/>and visual mockups.
                </p>


                <Image src={require("../public/images/image2.png")} alt='image2'/>


            </div>

            <div className="px-2">
                <h6 className="mb-[16px] text-[#583FBC] font-bold text-[12px] text-center md:text-left">MEET OUR TEAM</h6>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 mb-[100px]">
                    <h1 className="text-[48px] font-bold text-center md:text-left max-w-[540px]"> 
                        Get to know the dentalist dental Team
                    </h1>

                    <p className="opacity-80 text-[18px] leading-[28px] max-w-[510px] px-5 text-center md:text-left">
                        We want you to feel amazing about your oral wellness. Not just twice a year, but every time you take a bite, tell a joke, laugh, or share a kiss.
                    </p>
                </div>

                <div className="flex h-max flex-wrap gap-[20px] items-center justify-center mb-[250px]">
                    {doctors.map( doctor => {
                        return <Doctor
                            key={doctor.id}
                            name={doctor.name}
                            bgColor={doctor.bgColor}
                            src={doctor.src}
                        />
                    })}
                </div>

            </div>


            <div className="mb-[200px]">
                <h6 className="mb-[16px] text-[#583FBC] font-bold text-[12px] text-center">FAQ</h6>
                <h1 className="text-[48px] font-bold text-center mb-[61px]"> 
                    Frequently asked question
                </h1>

                {faqs.map(faq => {
                    return <FAQ key={faq.id} title={faq.title} paraph={faq.paraph}/>
                })}
            </div>

        </div>
    )
}

export default About