import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Handshake, Lightbulb, Rocket, ThumbsUp } from 'lucide-react'

function Introduction() {
    return (
        <section className='bg-[#f6f6f6] py-10'>
            <div className='mx-auto w-full max-w-screen-xl px-[4.5rem] flex'>
                <div className='flex flex-col items-center justify-center space-y-5'>
                    <div className='border-[4px] border-[#C0C0C0] p-4 rounded-full inline-block hover:border-[#00ADEF] hover:bg-[#00ADEF] transform transition-all duration-200 group'>
                        <Rocket className='w-20 h-20 text-[#C0C0C0] group-hover:text-white' />
                    </div>

                    <h2 className='text-[#EA5736] font-semibold tracking-wider'>OUR WORK</h2>
                    <p className='text-[#818388] text-sm tracking-wide text-center leading-7 text-balance'>From logos to food packaging, website development to online gamification – we've built up a diverse portfolio over our 30 years in business!</p>

                    <div className='!mt-14 border-2 border-[#848484] px-4 py-1 rounded hover:bg-[#848484] transform transition-all duration-200 group cursor-pointer'>
                        <p className='text-[#818388] text-[0.7rem] group-hover:text-white'>VIEW MORE</p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center space-y-5'>
                    <div className='border-[4px] border-[#C0C0C0] p-4 rounded-full inline-block  hover:border-[#00ADEF] hover:bg-[#00ADEF] transform transition-all duration-200 group'>
                        <Lightbulb className='w-20 h-20 text-[#C0C0C0] group-hover:text-white' />
                    </div>

                    <h2 className='text-[#EA5736] font-semibold tracking-wider'>WHAT WE DO</h2>
                    <p className='text-[#818388] text-sm tracking-wide text-center leading-7 text-balance'>Our team excels at combining design, marketing and technology to you achieve your business goals. Check out our list of services!</p>

                    <div className='!mt-14 border-2 border-[#848484] px-4 py-1 rounded hover:bg-[#848484] transform transition-all duration-200 group cursor-pointer'>
                        <p className='text-[#818388] text-[0.7rem] group-hover:text-white'>VIEW MORE</p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center space-y-5'>
                    <div className='border-[4px] border-[#C0C0C0] p-4 rounded-full inline-block  hover:border-[#00ADEF] hover:bg-[#00ADEF] transform transition-all duration-200 group'>
                        <Handshake className='w-20 h-20 text-[#C0C0C0] group-hover:text-white' />
                    </div>

                    <h2 className='text-[#EA5736] font-semibold tracking-wider'>MEET THE CREW</h2>
                    <p className='text-[#818388] text-sm tracking-wide text-center leading-7 text-balance'>We combine seasoned wisdom and youthful perspective to deliver effective advertising, marketing and promotional campaigns. And we're fun!</p>

                    <div className='!mt-14 border-2 border-[#848484] px-4 py-1 rounded hover:bg-[#848484] transform transition-all duration-200 group cursor-pointer'>
                        <p className='text-[#818388] text-[0.7rem] group-hover:text-white'>VIEW MORE</p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center space-y-5'>
                    <div className='border-[4px] border-[#C0C0C0] p-4 rounded-full inline-block  hover:border-[#00ADEF] hover:bg-[#00ADEF] transform transition-all duration-200 group'>
                        <ThumbsUp className='w-20 h-20 text-[#C0C0C0] group-hover:text-white' />
                    </div>

                    <h2 className='text-[#EA5736] font-semibold tracking-wider'>GIVE US A BUZZ</h2>
                    <p className='text-[#818388] text-sm tracking-wide text-center leading-7 text-balance'>We invite you to chat or meet over a cup of coffee (or non-caffeinated organic chocolate milk) and see if working together might be a good fit!</p>

                    <div className='!mt-14 border-2 border-[#848484] px-4 py-1 rounded hover:bg-[#848484] transform transition-all duration-200 group cursor-pointer'>
                        <p className='text-[#818388] text-[0.7rem] group-hover:text-white'>VIEW MORE</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction