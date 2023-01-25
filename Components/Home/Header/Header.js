import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
export default function Header() {
  return (
    <nav className="sticky top-0 flex items-center justify-center md:justify-between flex-wrap bg-gray-900 p-6 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-dark md:flex">
      <ul className="navbar-nav flex space-x-8 list-style-none  text-1xl md:items-center ">
        <li>
          <a href="#about">About me</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>
        <Link href="#contact">
          <li>
            <a>Contact </a>
          </li>
        </Link>
      </ul>
      <div className="flex">
        <div className="sm:py-4 md:items-center flex place-items-center ">
          <p className="uppercase text-sm tracking-wides md:mt-30 mr-10 sm:mr-0  text-[#EEE3CB]">
            Abdul Mumin Tarofdar
          </p>
        </div>
        <div className="md:flex pl-2 justify-cente z-10 md:items-center flex place-items-center">
          <a href="https://www.linkedin.com/in/abdultarofdar/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="hover color: red"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
