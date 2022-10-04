import { React } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import ParticleBackground from '../Background/ParticleBackground'
export default function About() {
  return (
    <div className="w-full text-center">
      <div className="max-w-[1240px] w-full h-screen mx-auto p-8 flex z-index:0">
        <div>
          <p className="py-4 text-[#E94560] text-lg">
            Helping delivery teams build great digital products
          </p>

          <h1 className="py-4 text-6xl">
            Hi I'm <span className="py-4 text-[#EEE3CB]">Abdul</span>{' '}
            <span className="animate-waving-hand">👋🏻</span>
          </h1>
          <h1 className="py-2 text-6xl">A QA enginner. </h1>
          <p className="py-4 max-w-[70%] m-auto">
            A product focused QA and test consultant with a decade of experiance
            working with large digital products and services across the private
            and public sector.
          </p>
          <p className="py-7">Find out more!</p>

          <div className="z-10">
            <Link href="#skills">
              <a>
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  size="6x"
                  className=" hover:text-[#FEF5AC] "
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
