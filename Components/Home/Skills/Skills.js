import { React } from 'react'
import Experiance from './Experiance'
import Tools from './Tools'
import AboutMe from './AboutMe'
export default function Skills() {
 
  return (
    <div className="flex min-h-screen">
      <div
        id="skills"
        className="grid xl:grid-cols-2 lg:grid-cols-1 sm:gap-4 lg:mt-24 md:mt-[-24px] sm:scroll-mt-[4rem] sm:mt-[10rem] "
      >
        <AboutMe />
        <div>
          <Tools />
          <Experiance />
        </div>
      </div>
    </div>
  )
}