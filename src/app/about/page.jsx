import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className="flex items-center h-full">
      <div className="flex flex-col gap-12 p-8">
        {/* About us */}
        <div className='flex gap-4'>
          <div className="flex gap-12 flex-col items-start border-b-2 py-4 flex-1">
            <div className="text-7xl font-bold">
              Our <span className='text-white'>Vision and <br /> Mission</span> 
            </div>

            <ul className='flex flex-col gap-2 text-xl font-semibold list-disc pl-6'>
              <li>
              Enhancing School and Empowering Students.
              </li>
              <li>Enhancing schools and students through comprehensive, innovative, and holistic support.</li>
            </ul>
          </div>

          {/* Image section */}
          <div className='relative h-[400px] w-[400px]'>
            <Image src={'/problem.png'} alt='sample' className='object-cover' sizes='100%' fill />
          </div>
        </div>

        <div className="text-lg text-[var(--light)]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sequi aliquam earum, doloribus harum modi, saepe fugiat itaque magni iure animi corrupti, ducimus aperiam consequuntur at. Deserunt reprehenderit vitae velit.
        </div>
      </div>
    </section>

  )
}

export default About