import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="px-3 py-5 bg-neutral-800 lg:py-10">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center text-center">
          <p className="text-4xl font-bold md:text-7xl text-red-600">CRMS</p>
          <p className="text-2xl font-bold md:text-4xl">Criminal Record Management System</p>
          <p className="mt-2 text-sm md:text-lg">
            **Organize, track, and analyze crime data efficiently**
          </p>
          
          <ul className="mt-4 list-disc text-left text-gray-300">
            <li>Streamlined record-keeping for crimes and investigations.</li>
            <li>Enhanced criminal identification and tracking.</li>
            <li>Improved resource allocation and case management.</li>
            <li>Data-driven insights for crime prevention and analysis.</li>
          </ul>
          <Link href="/auth/sign-up">  {/* Link to sign-up page */}
            <button className="text-lg md:text-xl bg-orange-500 text-white py-2 px-5 mt-10 hover:bg-zinc-800 border hover:border hover:border-orange-500">
              Sign Up to Explore More
            </button>
          </Link>
        </div>
        <div className="order-1 lg:order-2">
          <img
            className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
            src="/Crime-Investigation-Management-System.jpg"
            alt="Crime scene investigation"
          />
        </div>
        
      </div>
    </section>
  )
}

export default Hero
