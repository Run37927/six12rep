import React from 'react'
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

async function Navbar() {

    return (
        <nav className="sticky h-20 inset-x-0 top-0 z-30 w-full bg-black">
            <MaxWidthWrapper>
                <div className='flex h-20 items-center justify-between'>
                    <Link href='/' className='flex z-40 font-semibold text-lg'>
                        <Image
                            src="/logo_color.png"
                            alt="logo"
                            width={148}
                            height={70}
                            quality={95}
                            priority={true}
                            className='pointer-events-none select-none object-cover'
                        />
                    </Link>

                    <div className='text-white items-center space-x-4 font-semibold'>
                        <Link href='/'>
                            HOME
                        </Link>
                        <Link href='/about'>
                            PORTFOLIO
                        </Link>
                        <Link href='/contact'>
                            SERVICES
                        </Link>
                        <Link href='/blog'>
                            TEAM
                        </Link>
                        <Link href='/blog'>
                            CONTACT
                        </Link>
                    </div>

                    <div>
                        <span className='text-[#00ADEF]'>
                            Call 604-704-9970
                        </span>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar