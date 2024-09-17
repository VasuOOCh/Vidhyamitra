import React from 'react'

const Services = () => {
  return (
    <section className='flex items-center justify-center h-full'>
      <div className='text-white flex text-center w-[80%]'>

        {/* Column 1 */}
        <div className='text-lg flex-1'>
          {/* Head */}
          <div className='bg-white text-black font-bold table-block'>For students :</div>

          {/* Body */}
          <div className='table-block'>Career Guidance and Skill Development</div>
          <div className='table-block'>Mentorship Programs</div>
          <div className='table-block'>Resources and Materials</div>
          <div className='table-block'>Competitions and Enrichment Opportunities</div>
          <div className='table-block'>Mental Health and Well-Being</div>
        </div>

        {/* Column 2 */}
        <div className='flex-1 text-lg'>
          {/* Head */}
          <div className='bg-white text-black font-bold table-block'>For Schools:</div>

          {/* Body */}
          <div className='table-block'>Networking Opportunities</div>
          <div className='table-block'>Technical Support (Tech-Integration & Innovation)</div>
          <div className='table-block'>Branding and Promotional Strategies</div>
          <div className='table-block'>Event Planning and Management</div>
          <div className='table-block'>Professional Development</div>
        </div>

      </div>
    </section>
  )
}

export default Services