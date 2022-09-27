import Image from "next/image"

const Doctor = ({bgColor , name , src}) => {
    const bg = bgColor

    return (
        <div className="h-[402px] w-full max-w-[290px]">
            <div className="h-[350px] w-full rounded-[32px] relative" 
            style={{backgroundColor: `${bg}`}}>
                <Image alt='icon1' src={src}/>
            </div>
            <h3 className="text-[#181945] mt-[24px] text-[18px] font-bold text-center">{name}</h3>
        </div>
    )
}

export default Doctor