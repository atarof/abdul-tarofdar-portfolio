import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { sendContactForm } from '../../../lib/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Contact() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
    clearErrors,
  } = useForm()

  const onSubmit = async () => {
    const data = { fullname, email, message }
    try {
      await sendContactForm(data)
      toast.success('Thanks your message has been submitted', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } catch (error) {
      toast.error('Sorry something went wrong please try again', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        message: '',
      })
    }
  }, [formState, reset])

  return (
    <div id="contact" className="mt-6 pt-[5rem]">
      <section className="body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-2xl tracking-widest uppercase text-[#EEE3CB] sm:text-center">
              Contact
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              If your interested in working together or have a query feel free
              to reach out!
            </p>
          </div>
          <ToastContainer />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm">
                      Name
                    </label>
                    <input
                      {...register('name', {
                        required: { value: true, message: 'Please enter name' },
                      })}
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => {
                        setFullname(e.target.value)
                      }}
                      onClick={() => clearErrors('name')}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    <span className="text-[red]">{errors?.name?.message}</span>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm">
                      Email
                    </label>
                    <input
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'Please enter email',
                        },
                      })}
                      type="email"
                      id="email"
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      onClick={() => clearErrors('email')}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm">
                      Message
                    </label>
                    <textarea
                      {...register('message', {
                        required: {
                          value: true,
                          message: 'Please enter message',
                        },
                      })}
                      id="message"
                      name="message"
                      onChange={(e) => {
                        setMessage(e.target.value)
                      }}
                      onClick={() => clearErrors('message')}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    <span className="text-[red]">
                      {errors?.message?.message}
                    </span>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-[#EEE3CB] bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <input type="submit" />
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="flex mx-auto p-2 w-1/2 pt-8 mt-8 border-t border-t-[#EEE3CB] text-center">
            <p className="leading-normal my-5 text-center flex mx-auto">
              London
              <br />
              United kingdom
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
