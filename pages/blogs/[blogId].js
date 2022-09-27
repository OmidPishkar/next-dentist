import { getAllBlogs } from '../../blog-data'
import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogId = () => {
    const allBlogs = getAllBlogs()
    
    const route = useRouter()
    const thisId = route.query.blogId
    
    const thisBlog = allBlogs.filter(blog => {
        return blog.id == thisId
    })

    const result = thisBlog[0]

    return (
        <div className='max-w-[1280px] mt-[70px] mb-[150px] px-2 mx-auto'>
            
            <div className='md:ml-[110px]'>
                
                <h6 className='mb-[16px] text-[#583FBC] text-xs font-bold text-center sm:text-left'>{result.category}</h6>

                <h1  className="text-[35px] lg:text-[48px] font-bold mb-[35px] text-center sm:text-left w-full max-w-[710px]">Stay updated with our latest news </h1>
            
                <div className='w-max flex h-[50px] gap-[16px] items-center mx-auto sm:mx-0'>
                    <Image width='48px' height='48px' src={result.authorImg} alt='profile'/>
                    <div className='flex-1 flex flex-col'>
                        <h1 className='text-[16px] font-bold'>{result.authorName}</h1>
                        <span className='opacity-50 text-[12px]'>{result.year}</span>
                    </div>
                </div>

                <p className='opacity-50 text-[16px] mt-[34px] mb-[64px] max-w-[950px] text-center sm:text-left sm:leading-8'>
                    {result.paraphOne}
                </p>
            
            </div>
            
            <div className='my-[64px]'>
                <Image width='1280px' height='600px' alt='banner' src={result.img} />
            </div>
            

            <p className='opacity-50 text-[16px] max-w-[950px] mx-auto text-center'>
                {result.paraphTwo}
            </p>
        
        </div>
    )
}

export default BlogId