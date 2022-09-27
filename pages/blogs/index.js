import { useState } from "react"
import Blog from "../../components/Blog"
import { getAllBlogs } from '../../blog-data'
import Image from 'next/image'


const Blogs = () => {
    const [ userSearch , setUserSearch ] = useState('')
    const blogs= getAllBlogs()
    
    const searched = blogs.filter(blog => {
        return blog.title.toLowerCase().includes( userSearch.toLowerCase() )
    })

    const handleSearch = event => {
        event.preventDefault()

        const inputValue = event.target.userSearch.value

        setUserSearch(inputValue)
    }


    return (
        <div className='max-w-[1280px] w-full mx-auto px-2'>
            
            
            <div className='w-full mt-[40px] mb-[200px] flex flex-col-reverse lg:flex-row'>


                <div className='w-full lg:w-1/2 flex flex-col justify-between items-center lg:items-start'>
                    <h1 className='text-[40px] sm:text-[64px] font-bold text-center lg:text-left'>News & Articles</h1>
                    
                    <p className='text-center sm:text-left w-full max-w-[400px] mt-[32px] mb-[72px] font-[500] opacity-70'>
                        Stays updated with our latest blog and news and get healthy tips & trick for oral health
                    </p>


                    {/* search and show result */}
                    <form onSubmit={handleSearch} 
                    className='max-w-[440px] min-h-[60px] bg-white border border-[#18194519] rounded-[16px] flex sm:items-center flex-col sm:flex-row'>
                        
                        <input name='userSearch' type="text" placeholder='Search article or news...' className='text-[14px] text-[#18194599] flex-1 m-[6px] px-[20px] py-2 sm:py-0 h-full outline-none font-semibold' />
                        
                        <button className='font-bold m-[6px] text-[14px] text-white bg-[#583FBC] px-[18px] py-[13px] rounded-[12px] flex items-center justify-center sm:justify-start gap-x-[10px]'>
                            <span>Search</span>
                            <Image src={require("../../public/images/Search.png")} alt='search'/>
                        </button>
                    </form>

                </div>


                <div className='w-full flex justify-center lg:justify-start lg:w-1/2 p-5'>
                    <Image src={require("../../public/images/blog-banner.png")} alt='banner' />
                </div>
            
            
            </div>

            <div className="flex flex-wrap gap-[30px] justify-center items-center mb-[96px]">
            {searched.map(blog => {
                return (
                    // <p>{blog.title}</p>
                    <Blog 
                    key={blog.id}
                    id={blog.id}
                    src={blog.img} 
                    title={blog.title} 
                    cat={blog.category} 
                    comment={blog.comment} 
                    day={blog.day} 
                    month={blog.month}/>   
                )
            })}
            </div>
        
        
        </div>
    )
}

export default Blogs