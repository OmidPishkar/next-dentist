const contact = () => {
    return (
        <div className="max-w-[1392px] mx-auto">
            
            <div className="w-full relative min-h-[600px] mb-[200px]">
                <div className="absolute w-full h-[600px] bg-[#DBEFFA] rounded-[48px]"></div>

                <div className="sticky z-10">
                    <h1 className="text-[45px] sm:text-[64px] font-bold text-center pt-[62px]"> 
                        Contact Us
                    </h1>

                    <p className="opacity-70 text-[18px] font-medium max-w-[550px] mx-auto text-center mt-[32px] mb-[65px]">
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    </p>

                    <form className="max-w-[840px] min-h-[704px] rounded-[48px] shadow-lg bg-white mx-auto py-[64px] px-[40px] sm:px-[110px]"
                    onSubmit={ e => e.preventDefault() }>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-[24px] sm:gap-0 sm:justify-between mb-[24px]">

                            <div className="flex flex-col gap-[12px] w-full sm:w-1/2 px-3">
                                <label htmlFor="name" className="uppercase text-[#18194599] text-[12px] font-bold">Name</label>
                                <input type="text" className="border border-[#18194519] py-[18px] px-[20px] text-[14px] rounded-[16px] outline-none" placeholder="Enter your name..." id="name" />
                            </div>

                            <div className="flex flex-col gap-[12px] w-full sm:w-1/2 px-3">
                                <label htmlFor="email" className="uppercase text-[#18194599] text-[12px] font-bold">emAIL aDDRESS</label>
                                <input type="text" className="border border-[#18194519] py-[18px] px-[20px] text-[14px] rounded-[16px] outline-none" placeholder="Your email address..." id="email" />
                            </div>

                        </div>


                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-[24px] sm:gap-0 sm:justify-between mb-[24px]">

                            <div className="flex flex-col gap-[12px] w-full sm:w-1/2 px-3">
                                <label htmlFor="service" className="uppercase text-[#18194599] text-[12px] font-bold">sERVICES</label>
                                
                                <select id="service" className="border border-[#18194519] py-[18px] px-[20px] text-[14px] text-[#18194599] rounded-[16px] outline-none">
                                    <option value="Teeth Whitening">Teeth Whitening</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-[12px] w-full sm:w-1/2 px-3">
                                <label htmlFor="department" className="uppercase text-[#18194599] text-[12px] font-bold">DEPARTMENT</label>
                                
                                <select id="department" className="border border-[#18194519] py-[18px] px-[20px] text-[14px] text-[#18194599] rounded-[16px] outline-none">
                                    <option value="Teeth Whitening">Teeth Whitening</option>
                                </select>    
                            </div>


                        </div>

                        <div>

                            <label htmlFor="text" className="block uppercase text-[#18194599] text-[12px] font-bold">MEssages</label>


                            <textarea 
                                placeholder="Enter your messages..."
                                id="text" 
                                className="border w-full min-h-[200px] max-h-[200px] border-[#18194519] rounded-[16px] p-[20px] text-[14px] mt-[12px]"
                            ></textarea>
                        </div>


                        <div className="flex flex-col sm:flex-row items-center  justify-between mt-[48px] gap-[15px] sm:gap-0">

                            <div>
                                <h6 className="text-center sm:text-left uppercase text-[#583FBC]  text-[12px] font-bold mb-1">Dental 24H Emergency</h6>
                                <h4 className="text-center sm:text-left font-bold text-[16px]">03 482 394 123</h4>
                            </div>

                            <button className="px-[20px] sm:px-[50px] py-[20px] rounded-[16px] bg-[#583FBC] text-white font-bold text-[16px]">
                                Book an appointment
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
        
    )
}

export default contact