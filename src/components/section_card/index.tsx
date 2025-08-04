import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className="bg-[#F0F3EA] flex items-center justify-start p-2 rounded-lg w-full z-40 gap-5">
              <Image
                src="/assets/third_section_first_icon.svg"
                alt="Description"
                width={35}
                height={35}
              />
              <p className="text-[#002F2A] font-sans text-lg">
                Pick a Crown (like “Most Likely to Go Viral”)
              </p>
            </div>
  )
}

export default index