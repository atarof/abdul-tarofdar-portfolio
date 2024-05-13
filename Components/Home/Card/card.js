import Modal from '../Modal/Modal'
import { React, useState } from 'react'
export default function Card({ cardTitle, date, summary, responsibilities, technologies }) {
  const [show, setShow] = useState(false)

  return (
    <div className="flex h-full w-full ">
      <div className="h-full w-full p-8 max-w-2xl rounded-lg  bg-gray-800 border-gray-200 shadow-md dark:border-gray-700  ">
        <a href="#">
          <h5 className="flex flex-wrap mb-2 text-1xl font-semibold tracking-tight dark:text-white  sm:overflow-auto  ">
            {cardTitle}
          </h5>
        </a>
        <p className=" flex mb-3 font-normal text-gray-500 dark:text-gray-400">
          {date}
        </p>
        <button
          className=" flex  bg-[#E6CAB3] text-[#0c1928] hover:bg-[#EEE3CB] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
