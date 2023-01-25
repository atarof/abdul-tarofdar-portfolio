
import { React, useState} from 'react'
import data from './data.json'
import Card from '../Card/card'
export default function Tools() { 
  return (
    <div>
      <h2 className="px-6 text-2xl tracking-widest uppercase text-[#EEE3CB] sm:text-center">
        Experiance
      </h2>
      <div className="py-6 px-10 grid grid-cols-3 gap-4 place-content-around max-w-full place-items-center sm:grid-cols-1 text-ellipsis flex-column ">
        <Card
          cardTitle={data[0]['experiance 1'].title}
          date={data[0]['experiance 1'].date}
          summary={data[0]['experiance 1'].Summary}
          responsibilities={data[0]['experiance 1'].responsbilities}
          technologies={data[0]['experiance 1'].technologies}
        ></Card>
        <Card
          cardTitle={data[1]['experiance 2'].title}
          date={data[1]['experiance 2'].date}
          summary={data[1]['experiance 2'].Summary}
          responsibilities={data[1]['experiance 2'].responsbilities}
          technologies={data[1]['experiance 2'].technologies}
        ></Card>
        <Card
          cardTitle={data[2]['experiance 3'].title}
          date={data[2]['experiance 3'].date}
          summary={data[2]['experiance 3'].Summary}
          responsibilities={data[2]['experiance 3'].responsbilities}
          technologies={data[2]['experiance 3'].technologies}
        ></Card>
        <Card
          cardTitle={data[3]['experiance 4'].title}
          date={data[3]['experiance 4'].date}
          summary={data[3]['experiance 4'].Summary}
          responsibilities={data[3]['experiance 4'].responsbilities}
        ></Card>
        <Card
          cardTitle={data[4]['experiance 5'].title}
          date={data[4]['experiance 5'].date}
          summary={data[4]['experiance 5'].Summary}
          responsibilities={data[4]['experiance 5'].responsbilities}
        ></Card>
        <Card
          cardTitle={data[5]['experiance 6'].title}
          date={data[5]['experiance 6'].date}
          summary={data[5]['experiance 6'].Summary}
          responsibilities={data[5]['experiance 6'].responsbilities}
        ></Card>
      </div>
    </div>
  )


}