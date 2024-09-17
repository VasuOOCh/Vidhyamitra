import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import Link from 'next/link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => {
  return (
    <section className="flex items-center h-full">
      <div className="flex gap-12 p-8 w-full">
        {/* Contact info */}
        <div className='flex flex-col flex-1 gap-4 bg-[#ff5d3062] text-white rounded-2xl p-4 py-8 text-lg'>

          <h1 className='text-white font-extrabold text-3xl'>Connect <span className='text-[var(--dark)]'>with us.</span></h1>

          <div className='flex flex-col text-[var(--dark)] font-semibold'>
            <div className='flex gap-4 p-2 items-center'>
              <EmailIcon className='text-[var(--dark)]' />
              <p>contact@vidyamitra.in</p>
            </div>
            <div className='flex gap-4 p-2 items-center'>
              <LanguageIcon className='text-[var(--dark)]' />
              <p>www.vidyamitra.in</p>
            </div>
            <div className='flex gap-4 p-2 items-center'>
              <LocalPhoneIcon className='text-[var(--dark)]' />
              <p>+91-7004695641</p>
            </div>
            <div className='flex gap-4 p-2 items-center'>
              <LocationOnIcon className='text-[var(--dark)]' />
              <p>Incubation Center, NIT Patna
                Patna,Bihar</p>
            </div>
          </div>

          {/* social links */}
          <div className='flex gap-4 p-2'>
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
            <LinkedInIcon />
          </div>

        </div>

        {/* Map section */}
        <div className='flex-1 rounded-2xl'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5219761145554!2d85.1694198751782!3d25.620796077440726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sNational%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1726587180077!5m2!1sen!2sin" width="600" height="450" className='border-0 rounded-2xl' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact