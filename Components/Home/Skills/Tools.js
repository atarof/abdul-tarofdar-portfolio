import { React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Testcafe, Cypress, Nextdotjs } from '@icons-pack/react-simple-icons'

import {
  faAws,
  faJs,
  faWordpress,
  faGithub,
  faReact,
  faJira,
} from '@fortawesome/free-brands-svg-icons'


export default function Tools() {
    return (
      <div className="my-8 px-6">
        <h2 className="text-2xl tracking-widest uppercase text-[#EEE3CB] sm:text-center">
          Tools | Tech
        </h2>
        <div className="py-6 grid grid-cols-3 gap-4 place-content-around max-h-full max-w-full place-items-center">
          <div className="text-center">
            <FontAwesomeIcon icon={faJs} size="2x" />
            <div>Javscript</div>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faReact} size="2x" />
            <div>React.js</div>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faAws} size="2x" />
            <div>Amazon web service</div>
          </div>
          <div className="text-center">
            <Testcafe className="mx-10" size={32} />
            <div>TestCafe</div>
          </div>
          <div className="text-center">
            <Cypress className="mx-10" size={32} />
            <div>Cypress</div>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <div>GitHub</div>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faWordpress} size="2x" />
            <div>Wordpress</div>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faJira} size="2x" />
            <div>JIRA</div>
          </div>
          <div className="text-center">
            <Nextdotjs className="mx-10" size={32} />
            <div>Next.js</div>
          </div>
        </div>
      </div>
    )

}