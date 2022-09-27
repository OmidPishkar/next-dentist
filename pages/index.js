
import Image from "next/image"
import Blog from "../components/Blog"
import FeatuersCard from "../components/FeatuersCard"
import Riviews from "../components/Riviews"
import ServicesCard from "../components/ServicesCard"
import { getFeatureBlogs } from '../blog-data'

const ourServices = [
  {id: 1 ,src: require("../public/images/dentures.png") , title: 'Dentures' , text: 'Lorem ipsum is placeholder text commonly used in the graphic,'},
  {id: 2 ,src: require("../public/images/implants.png") , title: 'Implants' , text: 'Lorem ipsum is placeholder text commonly used in the graphic,'},
  {id: 3 ,src: require("../public/images/whitening.png") , title: 'Whitening' , text: 'Lorem ipsum is placeholder text commonly used in the graphic,'},
  {id: 4 ,src: require("../public/images/root Canal.png") , title: 'Root Canal' , text: 'Lorem ipsum is placeholder text commonly used in the graphic,'},
]

const featureCards = [
  {id: 1 ,src: require("../public/images/safety-feature.png") , title: 'Safety first' , text: 'We prioritize safety with health checks and more'},
  {id: 2 ,src: require("../public/images/hand-feature.png") , title: 'Insurance accepted' , text: 'We prioritize safety with health checks and more'},
  {id: 3 ,src: require("../public/images/chair-feature.png") , title: 'Full-service dentistry' , text: 'We prioritize safety with health checks and more'},
  {id: 4 ,src: require("../public/images/tooth-feature.png") , title: 'No judgment ever' , text: 'We prioritize safety with health checks and more'}

]

const reviews = [
  {
    id: 1 , 
    username: 'Robert Fox' , 
    comment: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ' , 
    rate: 4,
    img: require("../public/images/user-profile1.png")
  },
  {
    id: 2 , 
    username: 'Albert Flores' , 
    comment: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ' , 
    rate: 4,
    img: require("../public/images/user-profile2.png")
  },
  {
    id: 3 , 
    username: 'Bessie Cooper' , 
    comment: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts ' , 
    rate: 4,
    img: require("../public/images/user-profile3.png")
  },
]

export default function Home() {
  const featureBlogs = getFeatureBlogs()

  return (
    <>

      <div  className="text-[#181945] bg-lines mt-[32px] mb-[150px] max-w-[1392px] w-full min-h-[700px] bg-[#DBEFFA] mx-auto rounded-[48px] px-[30px] pt-[50px]">
        <div className="w-full flex flex-col lg:flex-row">

          <div className="w-full lg:w-1/2 mb-[36px] lg:mb-0">
            <h1 className="text-[30px] sm:text-[64px] font-bold leading-normal sm:leading-[81px] text-center lg:text-left">
              Entrust your smile<br/>to professional
            </h1>

            <p className="text-[18px] leading-[28px] mb-[72px] mt-[32px] text-center lg:text-left">
              Lorem ipsum is placeholder text commonly used in the graphic,<br/>print, and publishing industries for previewing layouts and visual mockups.
            </p>

            <div className="flex flex-col xl:flex-row w-max xl:w-full gap-y-[48px] xl:gap-y-0 xl:items-center xl:gap-x-[48px] mx-auto lg:mx-0">

              <button className="bg-[#583FBC] text-white px-[39px] py-[20px] rounded-[16px]">
                Book an appointment
              </button>

              <button className="flex items-center gap-x-[16px]">
                <Image src={require("../public/images/phoneIcon.png")} alt='icon1' width='64px' height='64px'/>
                
                <div className="flex flex-col justify-center">
                  <p className="text-[#583FBC] uppercase text-[12px] font-bold">Dental 24H Emergency</p>
                  <h6 className="text-[16px] font-bold text-left mt-[4px]">03 482 394 123</h6>
                </div>
              </button>

            </div>

          </div>


          <div className="w-full lg:w-1/2          h-full flex items-end justify-center         relative">
            <Image alt='banner2' className="sticky z-[1]" src={require("../public/images/banner-landing.png")}/>

            <div className="hover:shadow-lg cursor-pointer w-[240px] sm:w-[270px] py-2 px-[16px] bg-white rounded-[24px] h-[88px] flex items-center gap-x-[18px]
            absolute left-0 bottom-12 z-[1]">
              <Image alt='onlineDR' src={require("../public/images/online-doctor.png")} width='56px' height='56px'/>
              <div>
                <p className="text-[#181945] text-[14px] font-bold">Dr. Samantha Alice</p>
                <p className="text-[#181945] text-[12px] font-medium opacity-60">Consultant</p>
              </div>
            </div>


            <div className="absolute top-0 left-0 motion-rotate-left z-[1]">
            <Image alt='icon1' src={require("../public/images/tooth.png")}/>
            </div>

            <div className="absolute top-0 sm:bottom-0 right-0 motion-translate z-[0] sm:z-[1]">
            <Image alt='icon1' src={require("../public/images/privacy.png")}/>
            </div>

            <div className="absolute md:top-1/2 left-0 z-0">
            <Image alt='icon1' src={require("../public/images/pattern-point.png")}/>
            </div>

          </div>

        </div>
      </div>

      <div className="w-full mb-[144px] bg-white">
        <h1 className="text-center text-[20px] sm:text-[25px] md:text-[36px] sm:leading-[72px] font-medium">
          Dentalist is re-imagining what the dental experience<br/>can be and proudly setting a new standard for<br/>patient care.
        </h1>

        <div className="h-[4px] w-[120px] bg-[#583FBC] mx-auto mt-[30px] rounded-full"></div>
      </div>

      <div className="max-w-[1232px] mx-auto mt-[110px] mb-[96px] px-2">
        <h6 className="text-[#583FBC] uppercase text-[12px] font-bold mb-[16px] text-center md:text-left">Services</h6>

        <div className="flex w-full items-center justify-between flex-col md:flex-row">
          <h1 className="text-[35px] xl:text-[48px] font-bold text-center md:text-left">Feel amazing about<br/>your oral health</h1>

          <p className="max-w-[520px] opacity-60 text-lg text-center md:text-left">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>


      </div>

      <div className="max-w-[1280px] mx-auto my-[96px] flex gap-[40px] flex-wrap justify-center">
        {ourServices.map(service => {
          return <ServicesCard 
          key={service.id}
          text={service.text}
          imgSrc={service.src} 
          title={service.title}/>
        })}

      </div>
      
      
      <button className="mt-[96px] mb-[200px] mx-auto px-[30px] py-[20px] bg-[#583fbc1a] flex items-center gap-x-[16px] rounded-[16px]">
        <p className="text-[#583FBC] text-[16px] font-bold">View all service list</p>
        <Image alt='icon1' src={require("../public/images/blue-chevron-left.png")}/>
      </button>
      
      
      <div className="mt-[200px] mb-[150px] max-w-[1360px] mx-auto px-3">
        <div className="w-full flex flex-col md:flex-row">
          
          
          
          <div className="w-full md:w-1/2 h-[510px] relative">
            <div className="w-full md:w-[400px] h-full bg-[#DBEFFA] rounded-[32px] motion-translate"></div>
            <div className="absolute top-[64px] right-0">
              <Image alt='icon1' src={require("../public/images/patient-receiving-dental-treatment 1.png")}/>
            </div>
          </div>



          <div className="w-full md:w-1/2 h-[510px] md:pl-[110px] py-[64px]">
            <h6 className="text-[#583FBC] uppercase text-[12px] font-bold mb-[16px] text-center md:text-left">Dental 24H Emergency</h6>
          
            <h1 className="text-[35px] lg:text-[48px] font-bold mb-[24px] text-center md:text-left">
              Gentle, friendly treatment<br/>from our locally practice.
            </h1>

            <p className="opacity-80 mb-[72px] text-center md:text-left">
              Lorem ipsum is placeholder text commonly used in the<br/>graphic, print, and publishing industries for previewing layouts<br/>and visual mockups.
            </p>

            <button className="block mx-auto md:mx-0
            bg-[#583FBC] text-white rounded-[12px] px-[10px] sm:px-[25px] py-[15px] font-[500] text-[14px] leading-[18px] tracking-[-0.02em]">Book appointment</button>


          </div>
        
        
        
        </div>
      </div>



      <div className="max-w-[1392px] mx-auto min-h-[776px] bg-[#DBDEFA] rounded-[48px] mb-[150px]">
        <div className="w-full max-w-[902px] mx-auto px-2 pt-[96px] pb-[140px]">
          <h6 className="text-[#583FBC] uppercase text-[12px] font-bold mb-[16px] text-center md:text-left">features</h6>
          <h1 className="text-[35px] sm:text-[48px] font-bold mb-[24px] text-center md:text-left">
          Specialized  care through experience
          </h1>
          <p className="font-semibold opacity-80 text-center md:text-left">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>

          <div className="mt-[104px] flex flex-wrap justify-center items-center gap-[72px]">
            {featureCards.map(feature => {
              return <FeatuersCard key={feature.id} text={feature.text} title={feature.title} imgSrc={feature.src}/>
            })}
          </div>

        </div>
      </div>


      <div className="mt-[200px] mb-[150px] max-w-[1360px] mx-auto px-3">
        <div className="w-full flex flex-col md:flex-row">
          
          <div className="w-full md:w-1/2 h-[510px] md:pr-[110px] py-[64px]">
            <h6 className="text-[#583FBC] uppercase text-[12px] font-bold mb-[16px] text-center md:text-left">EXPERTS IN DENTAL</h6>
          
            <h1 className="text-[35px] lg:text-[48px] font-bold mb-[24px] text-center md:text-left">
            Top-notch dentistry, from<br/>Seattle&apos;s top dentists.
            </h1>

            <p className="opacity-80 mb-[32px] text-center md:text-left">
              Lorem ipsum is placeholder text commonly used in the<br/>graphic, print, and publishing industries for previewing layouts<br/>and visual mockups.
            </p>

            <ul className="flex flex-col gap-[16px] items-center md:items-start">
              <li className="flex items-center gap-[12px]">
                <Image alt='icon1' src={require("../public/images/Ellipse 98.png")}/>
                <h6 className="font-medium">Top quality dental team</h6>
              </li>
              <li className="flex items-center gap-[12px]">
                <Image alt='icon1' src={require("../public/images/Ellipse 98.png")}/>
                <h6 className="font-medium">State of the art dental services</h6>
              </li>
              <li className="flex items-center gap-[12px]">
                <Image alt='icon1' src={require("../public/images/Ellipse 98.png")}/>
                <h6 className="font-medium">Discount on all dental treatment</h6>
              </li>
            </ul>

          </div>
          
          <div className="w-full md:w-1/2 h-[510px] relative">
            <div className="w-full md:w-[400px] h-full bg-[#DBEFFA] rounded-[32px] motion-translate"></div>
            <div className="absolute top-[64px] right-0">
              <Image alt='icon1' src={require("../public/images/patient-receiving-dental-treatment 1.png")}/>
            </div>
          </div>
        
        </div>
      </div>


      <div className="full max-w-[1392px] min-h-[814px] bg-[#D9EBFA] rounded-[48px] mx-auto mb-[150px]">
        <div className="w-full h-max sm:px-[56px] px-[20px] sm:pt-[96px] pt-[40px] sm:pb-[128px] pb-[50px]">
          <h6 className="text-[#583FBC] uppercase text-[12px] font-bold mb-[16px] text-center lg:text-left">TESTIMONIAL</h6>

          <div className="flex flex-col lg:flex-row justify-between items-center mb-[91px]">
            <h1  className="text-[35px] lg:text-[48px] font-bold mb-[24px] text-center lg:text-left w-full lg:max-w-[488px]">What people have said about us</h1>

            <p className="opacity-80 mb-[40px] sm:mb-[32px] text-center max-w-[480px] lg:text-left">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts</p>
          </div>


          <div className="flex gap-[70px] sm:gap-[40px] w-full flex-wrap items-center justify-center">
            {reviews.map(riview => {
              return <Riviews key={riview.id} srcImage={riview.img} username={riview.username} comment={riview.comment} rate={riview.rate}/>
            })}
          </div>


        </div>
      </div>

      
      <div className="py-[150px]">
        <h6 className="text-[#583FBC] uppercase text-[12px] font-bold mb-[16px] text-center">blog</h6>
        <h1  className="text-[35px] lg:text-[48px] font-bold mb-[96px] text-center w-full">Stay updated with our latest news </h1>
          
        <div className="flex flex-wrap gap-[39px] items-center justify-center">
          {featureBlogs.map(blog => {
            return <Blog key={blog.id} id={blog.id} src={blog.img} cat={blog.category} title={blog.title} comment={blog.comment} day={blog.day} month={blog.month}/>
          })}
        </div>

      </div>

    </>
  )
}
