import { useEffect, useRef, useState } from 'react'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
import { ClipLoader } from 'react-spinners'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const contactArray = 'Контакты'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value
    }

    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Сообщение успешно отправлено!', {
          position: 'bottom-center',
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })

        setTimeout(() => {
          form.current.reset()
          setLoading(false)
        }, 3800)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setLoading(false)
      toast.error('Ошибка при отправке сообщения, попробуйте снова', {
        position: 'bottom-center',
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
  }

  return (
      <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                  letterClass={letterClass}
                  strArray={contactArray}
                  idx={15}
              />
            </h1>
            <p>
              Мы открыты для новых возможностей и сотрудничества! Если вы ищете
              кого-то, кто может предложить свежие идеи и добиться впечатляющих результатов,
              давайте свяжемся друг с другом!
            </p>

            <div className="contact-form">
              <form ref={form} onSubmit={handleSubmit}>
                <ul>
                  <li className="half">
                    <input
                        placeholder="Имя"
                        type="text"
                        name="name"
                        required
                    />
                  </li>
                  <li className="half">
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        required
                    />
                  </li>
                  <li>
                    <input
                        placeholder="Вопрос"
                        type="text"
                        name="subject"
                        required
                    />
                  </li>
                  <li>
                  <textarea
                      placeholder="Сообщение"
                      name="message"
                      required
                  ></textarea>
                  </li>
                  <li>
                    <button
                        type="submit"
                        className="flat-button"
                        disabled={loading}
                    >
                      {loading ? <ClipLoader color="#fff" size={20} /> : 'ОТПРАВИТЬ'}
                    </button>
                  </li>
                </ul>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
  )
}

export default Contact