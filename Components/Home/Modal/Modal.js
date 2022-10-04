import { React, useState, useEffect, useRef } from 'react'

export default function Modal({
  displayModal,
  onClose,
  cardTitle,
  summary,
  date,
  responsibilities,
}) {
  const handleCloseClick = (e) => {
    console.log('close')
    onClose()
  }
  return (
    <>
      {displayModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none  dark:bg-gray-800">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">{cardTitle}</h3>
                </div>

                <div className="relative p-6 flex-auto">
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    {date}
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {summary}
                  </p>
                  <h4>Key responsibilities</h4>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleCloseClick()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
