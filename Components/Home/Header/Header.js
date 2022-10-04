import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
export default function Header() {
  return (
    <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-gray-900 p-6 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-dark  ">
      <div className="mx-8 place-items-center flex items-center  ">
        <ul className="navbar-nav flex space-x-8 pl-30 list-style-none mr-auto text-1xl  ">
          <li> About me </li>
          <li>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </li>
          <li> Contact </li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="absolute right-20 sm:py-4 ">
        <p className="uppercase text-sm tracking-widest text-white ">
          Abdul Mumin Tarofdar
        </p>
      </div>
      <div className="flex justify-cente z-10">
        <a href="https://www.linkedin.com/in/abdultarofdar/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="hover color: red"
          />
        </a>
      </div>
    </nav>
  )
}
