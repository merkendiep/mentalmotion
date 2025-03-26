import React from "react"

const Hero = () => {
  return (
    <div
      className="hero py-10 flex justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/images/portrait-people-with-plants.jpeg"
          alt=""
          className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
        />

        <div className="text-center lg:text-start">
          <span className="badge badge-outline badge-lg">students peer support center</span>

          <h1 className="font-urbanist text-3xl font-black uppercase md:text-7xl">
            Door studenten
            <span className="text-base-content/30"> Voor studenten</span>
          </h1>

          <p className="py-6 font-urbanist lg:max-w-lg">
            Door middel van peer support zorgen wij voor een mentaal gezonder Utrecht!
          </p>

          <div className="flex gap-2 max-lg:justify-center">
            <a
              href="#contact"
              className="btn btn-neutral md:btn-lg rounded-full font-urbanist shadow-md">
              Get Started
            </a>

            <a href="/" className="btn btn-ghost md:btn-lg rounded-full font-urbanist font-light">
              Read success stories
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
