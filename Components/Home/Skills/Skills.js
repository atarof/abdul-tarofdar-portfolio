import { React } from 'react'
import Experiance from './Experiance'
import Tools from './Tools'
import AboutMe from './AboutMe'
export default function Skills() {
 
  return (
    <div
      id="skills"
      className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:mt-24 md:mt-[-24px] sm:scroll-mt-[4rem]"
    >
      <AboutMe />
      <div>
        <Tools />
        <Experiance />
      </div>
    </div>
  )
}