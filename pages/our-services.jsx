import Image from 'next/image'
import React from 'react'
import Symptoms from '../components/Symptoms'


const SYMPTOMS = [
  {id:1 , title: 'Spontaneous pain' , text: 'Spontaneous pain even when youre not eating or drinking' , src: require("../public/images/Group 833.png")},
  {id:2 , title: 'Discoloration of tooth' , text: 'Spontaneous pain even when youre not eating or drinking' , src: require("../public/images/Group 846.png")},
  {id:3 , title: 'Middle night pain' , text: 'Spontaneous pain even when youre not eating or drinking' , src: require("../public/images/Group 847.png")},
  {id:4 , title: 'Tenderness in gums' , text: 'Spontaneous pain even when youre not eating or drinking' , src: require("../public/images/Group 848.png")},
  {id:5 , title: 'Extreme sensitivity' , text: 'Spontaneous pain even when youre not eating or drinking' , src: require("../public/images/Group 849.png")}
]

const Services = () => {
  return (
    <div className='w-full mx-auto max-w-[1392px] mt-[47px] mb-[200px]'>

      <div className='w-full h-max mb-[187px] relative'>

        <div className='absolute w-full mx-auto h-full max-h-[600px] rounded-[48px] bg-[#DBEFFA] bottom-0 lg:top-0 left-0'></div>

        <div className=' flex flex-col-reverse gap-y-8 lg:gap-0 lg:flex-row items-center 
        pt-6 sm:pt-[67px] px-4 sm:px-[126px] w-full min-h-[626px] h-max sticky z-10'>

          <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pr-[90px] pb-5 lg:pb-0 text-center lg:text-left'>
            <h1 className='font-bold text-[32px] sm:text-[48px] md:text-[64px]'>Root canals</h1>
            
            <p className='leading-[28px] opacity-60 mt-[32px] mb-[72px]'>
              Root canals have gotten a bad reputation, but us dentists dont know why! These are the types of treatments that actually make you feel better!
            </p>
            
            <button className=" bg-[#583FBC] text-white rounded-[12px] px-[39px] py-[20px] font-[500] text-[16px] leading-[18px] tracking-[-0.02em]">
            Book an appointment
            </button>

          
          </div>

          <div className='w-full lg:w-1/2 flex items-center justify-center relative'>
            <Image className='sticky z-20' src={require("../public/images/banner-service.png")}/>

            <div  className='absolute right-6 w-[100px] sm:w-max lg:right-[-49px] bottom-0 z-30 motion-rotate-left'>
              <Image src={require("../public/images/tooth-service-icon.png")}/>
            </div>

            <div  className='hidden sm:block absolute left-[-49px] top-0 z-30 motion-rotate-left'>
              <Image src={require("../public/images/Ellipse 4.png")}/>
            </div>

            <div  className='hidden sm:block absolute right-[-49px] bottom-1/2 z-30 motion-rotate-left'>
              <Image src={require("../public/images/Ellipse 4.png")}/>
            </div>

            <div  className='hidden sm:block absolute left-[-49px] bottom-6 z-10'>
              <Image src={require("../public/images/pattern-point.png")}/>
            </div> 

          </div>

        </div>

      </div>


      <div className='bg-[#FADBE2] rounded-[48px] min-h-[904px] mb-[200px] py-[100px]'>
        <h6 className='text-center text-[#583FBC] font-bold text-[12px] mb-[16px]'>SYMPTOMS</h6>
        <h1 className='text-center max-w-[900px] text-[30px] px-2 sm:px-0 sm:text-[48px] font-bold mx-auto mb-[24px]'>Sign and symptoms you need root canal</h1>
        <p className='max-w-[839px] mx-auto text-center text-[18px] opacity-80 leading-[28px] mb-[108px]'>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>


        <div className='w-full max-w-[872px] mx-auto flex flex-wrap h-max gap-[72px] justify-center'>
          {SYMPTOMS.map(symp => {
            return <Symptoms key={symp.id} img={symp.src} title={symp.title} text={symp.text}/>
          })}
        </div>


      </div>

      <div className='mb-[68px] px-2'>
        <h6 className=' text-[#583FBC] font-bold text-[12px] mb-[16px] text-center md:text-left'>GALLERY</h6>
        <div className='flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-0'>
          <h1 className='text-[30px] sm:text-[48px] font-bold max-w-[475px] text-center md:text-left'>Some proof about our services for you</h1>
          <p className='text-[18px] opacity-80 pr-5 text-center md:text-left'>
            Lorem ipsum is placeholder text commonly used in the<br/>graphic, print, and publishing industries for previewing layouts<br/>and visual mockups.
          </p>
        </div>

        <div className='flex items-center justify-center gap-[40px] flex-wrap mt-[100px]'>
          <Image src={require("../public/images/service1.png")} alt='service'/>
          <Image src={require("../public/images/service2.png")} alt='service'/>
          <Image src={require("../public/images/service3.png")} alt='service'/>
          <Image src={require("../public/images/service4.png")} alt='service'/>
          <Image src={require("../public/images/service5.png")} alt='service'/>
          <Image src={require("../public/images/service6.png")} alt='service'/>
        </div>
        
      </div>

    </div>
  )
}

export default Services