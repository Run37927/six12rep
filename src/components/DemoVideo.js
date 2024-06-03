import React from 'react';

function DemoVideo() {
    return (
        <section className='w-full relative pb-[145%] sm:pb-[56.25%] h-0'>
            <iframe
                src="https://player.vimeo.com/video/573129133?h=fd2f7d23e7&autoplay=1&muted=1"
                className='absolute top-0 left-0 w-full h-full'
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            />
            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(30,115,190,1)]  sm:bg-[rgba(30,115,190,0.7)] flex justify-center items-center'>
                <p className='font-bold text-[4rem] sm:text-[10rem] leading-tight text-white text-center hover:text-[#00ADEF]'>
                    DESIGN<span className='block'>IN</span>MOTION
                </p>
            </div>
        </section>
    );
}

export default DemoVideo;