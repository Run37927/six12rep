import React from 'react';

function DemoVideo() {
    return (
        <section className='w-full' style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
                src="https://player.vimeo.com/video/573129133?h=fd2f7d23e7&autoplay=1&muted=1"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
            />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(30, 115, 190, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <p className='font-bold text-[10rem] leading-tight text-white text-center hover:text-[#00ADEF]'>
                    DESIGN<span className='block'>IN</span>MOTION
                </p>
            </div>
        </section>
    );
}

export default DemoVideo;