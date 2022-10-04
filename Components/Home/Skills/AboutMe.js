
import { React } from 'react'

export default function AboutMe() {

    return (
      <div className="w-full px-6 sm:center-content">
       
          <h2 className="text-4xl tracking-widest uppercase text-[#EEE3CB]">
            About me
          </h2>
          <h4 class="pt-6 font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
            I'm Abdul a QA engineer | analyst | lead
          </h4>
          <p class="pt-6 font-body leading-relaxed text-grey-20">
            I have a decade of experiance helping delivery teams build and
            deliver great digital products and services. I have worked in large
            digital transformation projects in the private and public sector
            helping assure quality in cross functional agile teams. Although my
            main focus is quality assurance and testing i love dabling in code
            from time to time and solving problems
          </p>

          <div class="w-3/4 sm:w-3/4 lg:pt-10 sm:py-5">
            <div>
              <div class="flex items-end justify-between">
                <h4
                  class="font-body font-semibold uppercase text-white"
                  //style={'width: 25%'}
                >
                  HTML &amp; CSS
                </h4>
                <h3 class="font-body text-1xl font-bold text-primary">85%</h3>
              </div>
              <div class="mt-2 h-3 w-full rounded-full bg-lila">
                <div class="h-3 rounded-full bg-[#EEE3CB]"></div>
              </div>
            </div>
            <div class="pt-6">
              <div class="flex items-end justify-between">
                <h4 class="font-body font-semibold uppercase text-white">
                  Python
                </h4>
                <h3 class="font-body text-1xl font-bold text-primary">70%</h3>
              </div>
              <div class="mt-2 h-3 w-full rounded-full bg-lila">
                <div class="h-3 rounded-full  bg-[#EEE3CB]"></div>
              </div>
            </div>
            <div class="pt-6">
              <div class="flex items-end justify-between">
                <h4 class="font-body font-semibold uppercase text-white">
                  Javascript
                </h4>
                <h3 class="font-body text-1xl font-bold text-primary">98%</h3>
              </div>
              <div class="mt-2 h-3 w-full rounded-full bg-lila">
                <div class="h-3 rounded-full  bg-[#EEE3CB]"></div>
              </div>
            </div>
            <div class="pt-6">
              <div class="flex items-end justify-between">
                <h4 class="font-body font-semibold uppercase text-white">
                  Figma
                </h4>
                <h3 class="font-body text-1xl font-bold text-primary">91%</h3>
              </div>
              <div class="mt-2 h-3 w-full rounded-full bg-lila">
                <div class="h-3 rounded-full  bg-[#EEE3CB]"></div>
              </div>
            </div>
          </div>
        </div>
    )





}