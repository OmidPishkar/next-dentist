import { useState } from 'react'
import Image from 'next/image'

const FAQ = ({title , paraph}) => {
    const [height ,setHeight] = useState('113px')

    
    const chevrounDown = <Image alt='icon1'  src={require("../public/images/faq-chevron.png")}/>
    const chevrounUp = <Image alt='icon1' className='rotate-180'  src={require("../public/images/faq-chevron.png")}/>

    const handleHeight = () => {
        if(height === '113px'){
            setHeight('max-content')
        }else {
            setHeight('113px')
        }
    }

    return (
        <div style={{height: `${height}`}} className="border mx-auto border-[#96A0B5] rounded-2xl mb-2 px-[30px] pb-5 w-full max-w-[919px] p-1 overflow-hidden">
            <div onClick={handleHeight} className='min-h-[113px] w-full flex items-center justify-between cursor-pointer'>
                <h1 className='text-[18px] md:text-[24px] font-bold pl-2'>{title}</h1>

                {height === '113px' ? chevrounDown : chevrounUp}
            </div>

            <p className='text-[#96A0B5] max-w-[651px]'>{paraph}</p>
        </div>
    )
}

export default FAQ