import Image from 'next/image'
import React from 'react'

export default function Landing() {
    return (
        <div className='w-full md:flex mt-10 items-center'>
            <div className='w-full space-y-10'>
                <div className='space-y-2'>
                    <p className='w-full tracking-wider mx-width-lg text-3xl lg:text-5xl font-bold'>
                        A Modern Bank Card <br />
                        For a Modern World
                    </p>
                    <p className=''>The Modern Bank Card Embraces The Era of Contractless  Payments, Enabling
                        Swift and Effortless Transction with Just a Tap or Wave.No more Fumbling For
                        Cash or Struggling With Outdated Payment Methods.</p>
                </div>
                <button className=' border-2 bg-indigo-300 rounded-full px-4 py-1 border-black flex items-center space-x-7'>
                    <p className='text-lg font-medium'>Explore</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg>
                </button>
                <div className='font-bold flex space-x-10'>
                    <p>logo</p>
                    <p>logo</p>
                    <p>logo</p>
                    <p>logo</p>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='relative w-96 h-96'>
                    <Image
                        src="card.svg"
                        fill
                        alt='credit card'
                    />
                </div>
            </div>
        </div>
    )
}
