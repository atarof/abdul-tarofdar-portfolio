
import { React, useState} from 'react'
import data from './data.json'
import Card from '../Card/card'
export default function Tools() { 
  
  
  const edata = data

  return (
    <div className="">
      <h2 className="px-6 text-2xl tracking-widest uppercase text-[#EEE3CB] sm:text-center">
        Experiance
      </h2>
      <div className="py-6 px-10 grid lg:grid-cols-3 gap-4 place-content-around h-full w-full place-items-center md:grid-cols-2 sm:grid-cols-1 text-ellipsis flex-column">
        {edata.map((data =>
          <Card key={data.id}
            cardTitle={data.title}
            date={data.date}
            summary={data.Summary}
            responsibilities={data.responsbilities}
            technologies={data.technologies}
          ></Card>
        ))}
      </div>
    </div>
  )


}