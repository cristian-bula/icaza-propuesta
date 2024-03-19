import React from 'react'
interface Props{
    img: string,
    text: string,
    link: string
}

const AwardsCards = ({img, text="VER MÁS", link}:Props) => {
  return (
    <a className='h-64 flex flex-col justify-center items-center mb-10 hover:bg-gray-50 cursor-pointer mt-8' href={link} target='_blank'>
        <img className='w-32' src={img} alt={link} />
        <div className='flex gap-4 w-full items-center justify-center mt-5'>
          <p className='text-xs text-secundary'>{text}</p>
          <svg className='w-6 text-secundary' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
          </svg>
        </div>
    </a>
  )
}

export default AwardsCards