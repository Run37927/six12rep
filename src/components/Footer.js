import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-black pt-14'>
            <div className='mx-auto w-full max-w-screen-xl px-4 sm:px-[5rem]'>
                <Image
                    src="/logo_color.png"
                    alt="logo"
                    width={148}
                    height={70}
                    quality={95}
                    priority={true}
                    className='pointer-events-none select-none object-cover mb-5'
                />

                <div className='flex flex-col text-white text-sm tracking-wide pl-4 sm:pl-0'>
                    <p>210-4259 Canada Way</p>
                    <p>Burnaby, BC</p>
                    <p>V5G 4W6 Canada</p>

                    <p className='mt-6'>Tel 604-525-8884</p>
                    <p>Fax 604-525-8804</p>
                </div>

                <div className='flex flex-col pl-4 sm:pl-0 sm:flex-row sm:items-center sm:justify-between mt-28 sm:mt-4'>
                    <div className='flex items-center gap-2'>
                        <FaFacebook className='h-12 w-12 text-white bg-[#EA5736] p-2' />
                        <FaInstagramSquare className='h-12 w-12 text-white bg-[#EA5736] p-2' />
                        <FaSquareXTwitter className='h-12 w-12 text-white bg-[#EA5736] p-2' />
                        <FaLinkedin className='h-12 w-12 text-white bg-[#EA5736] p-2' />
                    </div>

                    <div className='flex flex-wrap mt-5 sm:mt-0 text-[#00ADEF] space-x-3 sm:space-x-9 font-semibold tracking-wider'>
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
                </div>

                <p className='text-[0.5rem] sm:text-xs text-white text-center py-4'>
                    COPYRIGHT 2021 SIX12 Creaive Inc. is a full service creative marketing and design agency.
                </p>
            </div>
        </footer>
    )
}

export default Footer