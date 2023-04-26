import Modal from '../Modal/Modal'
import { React, useState } from 'react'
export default function Card({ cardTitle, date, summary, responsibilities, technologies }) {
  const [show, setShow] = useState(false)

  return (
    <div className="flex-1 h-full">
      <div className="p-6 max-w-sm  rounded-lg  bg-gray-800 border-gray-200 shadow-md dark:border-gray-700 ">
        <a href="#">
          <h5 className="mb-2 text-1xl font-semibold tracking-tight dark:text-white">
            {cardTitle}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {date}
        </p>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400  flex flex-wrap "></p>
        <button
          className="bg-pink-700 text-white hover:bg-[#EEE3CB] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            setShow(true)
          }}
        >
          Read more
        </button>
        <Modal
          date={date}
          summary={summary}
          technologies={technologies}
          cardTitle={cardTitle}
          displayModal={show}
          responsibilities={responsibilities}
          onClose={() => setShow(false)}
        />
      </div>
    </div>
  )
}
