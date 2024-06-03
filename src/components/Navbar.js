'use client'
import React, { useState } from 'react'
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from 'next/image'
import { Menu } from 'lucide-react'

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky sm:h-20 inset-x-0 top-0 z-30 sm:w-full bg-black">
            <MaxWidthWrapper>
                <div className='flex h-20 items-center sm:justify-between'>
                    <Menu
                        className='sm:hidden text-white -ml-14'
                        size={40}
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen)
                        }}
                    />
                    <Link href='/' className='flex z-40 pl-16 small:pl-0'>
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

                    <div className='hidden sm:block text-white items-center space-x-9 font-semibold tracking-wider'>
                        <Link href='/'>
                            HOME
                        </Link>
                        <Link href='/portfolio'>
                            PORTFOLIO
                        </Link>
                        <Link href='/services'>
                            SERVICES
                        </Link>
                        <Link href='/team'>
                            TEAM
                        </Link>
                        <Link href='/contact'>
                            CONTACT
                        </Link>
                    </div>

                    <div className='hidden sm:block font-bold'>
                        <span className='text-[#00ADEF] text-lg'>
                            Call 604-704-9970
                        </span>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className='small:hidden flex flex-col gap-4 text-white font-semibold tracking-wider'>
                        <Link href='/'>
                            HOME
                        </Link>
                        <Link href='/portfolio'>
                            PORTFOLIO
                        </Link>
                        <Link href='/services'>
                            SERVICES
                        </Link>
                        <Link href='/team'>
                            TEAM
                        </Link>
                        <Link href='/contact'>
                            CONTACT
                        </Link>
                    </div>
                )}
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar