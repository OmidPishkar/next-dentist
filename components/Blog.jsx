import Image from 'next/image'
import Link from 'next/link'

const Blog = ({src , title , cat , comment , day , month , id }) => {
    return (
        <Link href={`/blogs/${id}`}>
            <div className='w-full max-w-[400px] min-h-[480px] border border-[#18194519] rounded-[32px] p-[16px] relative cursor-pointer hover:shadow-md
            flex flex-col justify-between'>

                <div className='w-[60px] h-[60px] bg-white rounded-[16px] absolute top-[32px] left-[32px] z-10 flex flex-col items-center justify-evenly'>
                    <h4 className='text-[18px] font-bold'>{day}</h4>
                    <p className='text-[#18194599] text-[14px] font-bold'>{month}</p>
                </div>


                <Image alt='icon1' src={src} height='250px'/>
                <h6 className="text-[#583FBC] uppercase text-[12px] font-bold mt-[16px] mb-[8px] text-center sm:text-left">{cat}</h6>
                <h1 className='text-[18px] font-bold mb-[12px]'>{title}</h1>

                <p className='text-[15px] opacity-50'>{comment}</p>
            </div>
        </Link>
    )
}

export default Blog