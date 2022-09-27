import Image from "next/image"

const Riviews = ({srcImage , username , comment , rate}) => {
    const star1 = (<ul className="flex items-center gap-[8px] flex-wrap">
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-empty.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-empty.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-empty.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-empty.png")}/></li>
    </ul>)

    const star2 = (<ul className="flex items-center gap-[8px] flex-wrap">
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-empty.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-empty.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-empty.png")}/></li>
    </ul>)

    const star3 = (<ul className="flex items-center gap-[8px] flex-wrap">
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-empty.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-empty.png")}/></li>
    </ul>)

    const star4 = (<ul className="flex items-center gap-[8px] flex-wrap">
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-empty.png")}/></li>
    </ul>)

    const star5 = (<ul className="flex items-center gap-[8px] flex-wrap">
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    <li><Image alt='star'  src={require("../public/images/star-gold.png")}/></li>
    </ul>)

    const stars = (rate) => {
        if(rate === 1){
            return star1
        } else if(rate === 2){
            return star2
        } else if(rate === 3){
            return star3
        } else if(rate === 4){
            return star4
        } else if(rate === 5){
            return star5
        }
    }

    return (
        <div className="relative max-w-[400px] w-full h-[327px]">
            <div  className='absolute left-1/2 -top-[40px] border-[5px] border-[#D9EBFA] rounded-full w-[85px] h-[85px] -translate-x-1/2'>
                <Image alt='star'  width='80px' height='80px' src={srcImage}/>

            </div>

            <div className="max-w-[400px] h-max sm:h-[287px] bg-white rounded-[32px] flex flex-col justify-center items-center px-5 pb-[12px] sm:pb-0">
                <h1 className="text-center text-[18px] font-bold mb-[8px] mt-[50px] sm:mt-0">{username}</h1>

                <p className="text-[16px] leading-[26px] opacity-50 text-center w-full max-w-[322px] mb-[32px]">{comment}</p>

                {stars(rate)}
            </div>

        </div>
    )
}

export default Riviews