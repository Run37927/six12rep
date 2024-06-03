import React from 'react'
import Image from "next/image";

function Banner() {
    return (
        <div className="flex items-center justify-center -mt-[2.6rem] bg-black">
            <Image
                src="/banner.jpg"
                alt="banner"
                width={900}
                height={468}
                quality={95}
                priority={true}
                className='pointer-events-none select-none object-cover'
            />
        </div>
    )
}

export default Banner