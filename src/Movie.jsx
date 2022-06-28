import React from 'react'

export default function Movie(props) {
  return (
    <>
        <li className='bg-slate-800 flex flex-col items-center justify-center m-8 rounded-xl p-4'>
            <h2 className='text-4xl text-yellow-500 mb-2 font-bold'>{props.title}</h2>
            <p className='text-gray-400 font-light mb-1 font-[poppins]'>{props.release}</p>
            <h4 className='text-xl text-gray-200 font-light font-[poppins]'>{props.openingText}</h4>
        </li>
    </>
  )
}
