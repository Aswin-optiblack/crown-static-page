import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
      <div className=" p-4 grid grid-cols-2 gap-4 my-20 mt-[200px]">
          <div className='relative flex items-center justify-center'>
              <Image className='-z-0 absolute bottom-[13%] left-[8%]' src='/assets/sixth_section_dots.svg' alt='polygon' width={70} height={70} />
              <Image className='z-50 absolute -top-[40%] right-[15%]' src='/assets/sixth_section_dollar.svg' alt='polygon' width={70} height={70} />
              <Image className='z-10 absolute left-[15%] -top-[30%]' src='/assets/sixth_section_background.svg' alt='polygon' width={300} height={300} />
              <Image className='z-40 absolute -top-[23%] ' src='/assets/sixth_section_image.png' alt='polygon' width={300} height={300} />
              <Image className='z-30 absolute left-[13%] top-[20%]' src='/assets/sixth_section_share.svg' alt='polygon' width={40} height={100} />

          </div>
          <div className='flex flex-col gap-10 items-start justify-center'>
              <h3 className="text-7xl font-bowlby font-[400] text-[#424242] ">
                  Lights. Crown.<br/> Cash. 🎥 💸
              </h3>
              <p className="font-sans font-[600] text-2xl text-[#424242]">
                  🎥 Use #CrownCam on TikTok and Snapchat<br /> 💰 Get cash when your video pops off<br />
                  🔥 No likes needed. Just good vibes + views.
        </p>
          </div>
    </div>
  )
}

export default index