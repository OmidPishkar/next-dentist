import Image from 'next/image'

const FeatuersCard = ({imgSrc , title , text}) => {
    return (
        <div className='w-[400px] min-h-[96px] flex flex-col sm:flex-row items-center gap-[36px]'>
            <Image alt='feature' src={imgSrc}/>

            <div>
                <h4 className='text-[20px] font-bold text-center sm:text-left'>{title}</h4>
                <p className='text-[16px] opacity-50 mt-[8px] text-center sm:text-left'>{text}</p>
            </div>
        </div>
    )
}

export default FeatuersCard