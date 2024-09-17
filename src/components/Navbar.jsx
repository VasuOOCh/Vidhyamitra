'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    
    const routes = [
        {
            name : "Home",
            link : "/",
        },
        {
            name : "About",
            link : "/about",
        },
        {
            name : "Services",
            link : "/services",
        },
        {
            name : "Partners",
            link : "/partners",
        },
        {
            name : "Contact",
            link : "/contact",
        }
    ]
    return (
        <section className='w-fit h-full flex flex-col items-center gap-16 ' >

            {/* Logo */}
            <div className='relative h-24 w-24 '>
                <Image src={'/vmcLogo.png'} fill className='object-contain' sizes='100%' alt='logo' />
            </div>

            {/* Links section */}
            <nav className='flex flex-col gap-4 text-lg font-bold'>
                {
                    routes.map((route,index) => (
                        <Link key={index} className={`p-2 m-4 ${pathname == route.link ? "border-b-4" : ""}`} href={route.link}>{route.name}</Link> 
                    ))
                }
            </nav>
        </section>
    )
}

export default Navbar