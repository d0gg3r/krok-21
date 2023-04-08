import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      {/* <Helmet>
        <title>Krok - Home</title>
      </Helmet> */}
      <section className="w-screen h-screen bg-gradient-to-r from-indigo-500 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col backdrop-blur-lg bg-white bg-opacity-20 drop-shadow-lg p-10 rounded">
          <img
            src="https://static.wixstatic.com/media/5922a2_d0d989ccd15a4679985143b8bbf1ce54~mv2.gif"
            alt=""
          />
          <h1 className="text-3xl font-extralight">ТЕСТУВАННЯ #1</h1>
          <div className="mt-8">
            <Link
              to={'/test'}
              className="cursor-pointer border-solid border border-black py-2 rounded px-8 hover:bg-black hover:text-white transition-all duration-200 ease-in"
            >
              Start
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
