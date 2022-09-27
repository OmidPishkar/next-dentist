import Image from "next/image"

const ServicesCard = ({title , text , imgSrc}) => {
    return (
        <article className="cursor-pointer w-full max-w-[285px] h-[360px] border border-[#18194519] rounded-[32px] hover:shadow-lg px-[16px] pt-[16px] pb-[32px]">
            <Image alt='service' src={imgSrc}/>

            <h4 className="text-center font-bold text-[20px] mt-[24px] mb-[8px]">{title}</h4>

            <p className="text-[16px] opacity-60 font-medium text-center">{text}</p>

        </article>
    )
}

export default ServicesCard