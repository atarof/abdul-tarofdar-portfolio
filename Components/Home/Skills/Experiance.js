
import { React, useState} from 'react'
import data from './data.json'
import Card from '../Card/card'
import Modal from '../Modal/Modal'
export default function Tools() { 
  const [show, setShow] = useState(false)
  return (
    <div>
      <h2 className="text-2xl tracking-widest uppercase text-[#EEE3CB] sm:text-center">
        Experiance
      </h2>
      <div className="py-6 px-10 grid grid-cols-3 gap-4 place-content-around max-w-full place-items-center sm:grid-cols-1 text-ellipsis flex-column ">
        <Card
          cardTitle={data[0]['experiance 1'].title}
          date={data[0]['experiance 1'].date}
          summary={data[0]['experiance 1'].Summary}
          responsibilities={data[0]['experiance 1'].responsbilities}
        ></Card>
        <Card
          cardTitle={data[1]['experiance 2'].title}
          date={data[1]['experiance 2'].date}
          summary={data[1]['experiance 2'].Summary}
          responsibilities={data[1]['experiance 2'].responsbilities}
        ></Card>
        <Card
          cardTitle={data[2]['experiance 3'].title}
          date={data[2]['experiance 3'].date}
          summary={data[2]['experiance 3'].Summary}
          responsibilities={data[2]['experiance 3'].responsbilities}
        ></Card>
      </div>
    </div>
  )


}