import { React } from 'react'

export default function AboutMe() {
  return (
    <div className="w-full px-6 sm:center-content">
      <div class="lg:my-8 ">
        <h2 className="text-4xl tracking-widest uppercase text-[#EEE3CB]">
          About me
        </h2>
        <h4 class="pt-3 font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
          QA engineer | analyst | lead
        </h4>
        <p class="pt-3 font-body leading-relaxed text-grey-20 max-w-lg">
          Hi and welcome! I have spent the last 10 years helping delivery teams
          build great digital products and services. I have worked in large
          digital transformation projects in the private and public sector
          helping assure quality in cross functional agile teams. Although my
          main focus is quality assurance and testing, the last few years have
          seen me focus more on front-end frameworks like React, Next.js and
          testing frameworks such as Cypress and Testcafe. More recently I have
          been involved in the public sector working on an array of digital
          services from design through to delivery. I am always looking to add
          value to teams taking a pragmatic, flexible and collaborative approach
          to testing
        </p>

        <div class="w-3/4 sm:w-3/4 lg:pt-10 sm:py-5">
          <div>
            <div class="flex items-end justify-between">
              <h4 class="font-body font-semibold uppercase text-white">
                Test stratergy & Planning
              </h4>
              <h3 class="font-body text-1xl font-bold text-primary"></h3>
            </div>
            <div class="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                class="h-3 rounded-full bg-[#EEE3CB]"
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>

          <div class="pt-6">
            <div class="flex items-end justify-between">
              <h4 class="font-body font-semibold uppercase text-white">
                End to End test automation
              </h4>
              <h3 class="font-body text-1xl font-bold text-primary"></h3>
            </div>
            <div class="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                class="h-3 rounded-full  bg-[#EEE3CB]"
                style={{ width: '90%' }}
              ></div>
            </div>
          </div>
          <div class="pt-6">
            <div class="flex items-end justify-between">
              <h4 class="font-body font-semibold uppercase text-white">
                Defect management
              </h4>
              <h3 class="font-body text-1xl font-bold text-primary"></h3>
            </div>
            <div
              class="mt-2 h-3 w-full rounded-full bg-lila"
              style={{ width: '70%' }}
            >
              <div class="h-3 rounded-full  bg-[#EEE3CB]"></div>
            </div>
          </div>
          <div class="pt-6">
            <div class="flex items-end justify-between">
              <h4 class="font-body font-semibold uppercase text-white">
                QA process refinement
              </h4>
              <h3 class="font-body text-1xl font-bold text-primary"></h3>
            </div>
            <div
              class="mt-2 h-3 w-full rounded-full bg-lila"
              style={{ width: '85%' }}
            >
              <div class="h-3 rounded-full  bg-[#EEE3CB]"></div>
            </div>
          </div>
          <div class="pt-6">
            <div class="flex items-end justify-between">
              <h4 class="font-body font-semibold uppercase text-white">
                Test reporting and analysis
              </h4>
              <h3 class="font-body text-1xl font-bold text-primary"></h3>
            </div>
            <div
              class="mt-2 h-3 w-full rounded-full bg-lila"
              style={{ width: '75%' }}
            >
              <div class="h-3 rounded-full  bg-[#EEE3CB]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
