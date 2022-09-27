import Image from "next/image"

const Symptoms = ({img , title , text}) => {
    return (
        <div className="sm:w-[400px] h-max sm:h-[96px]        flex flex-col sm:flex-row gap-[24px] items-center">
            <Image width='96px' height='96px' src={img} alt='sympt'/>

            <div className="h-[96px] flex flex-col gap-2">
                <h5 className="text-[20px] font-bold text-center sm:text-left">{title}</h5>
                <p className='opacity-50 text-[16px] font-medium text-center sm:text-left'>{text}</p>
            </div>


        </div>
    )
}

export default Symptoms