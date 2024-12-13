/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
  faAws,
  faDocker,
  faGitAlt,
  faGolang,
  faJsSquare,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const aboutArray = 'Обо мне'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
                letterClass={letterClass}
                strArray={aboutArray}
                idx={15}
            />
          </h1>
          <p>
            Я опытный фронтенд-разработчик с более чем 5-летним стажем в создании современных веб-приложений. Я
            специализируюсь на разработке высокопроизводительных пользовательских интерфейсов, использовании современных
            JavaScript-фреймворков и оптимизации клиентской части приложений. Мой опыт охватывает весь спектр
            фронтенд-разработки: от архитектуры приложений до тонкой настройки производительности.
          </p>
          <p>
            Я постоянно совершенствую свои навыки и следую последним тенденциям в области веб-разработки. Будь то
            создание сложных SPA-приложений или оптимизация производительности существующих систем, я всегда стремлюсь к
            созданию качественных и масштабируемых решений, уделяя особое внимание пользовательскому опыту и
            техническому совершенству.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE"/>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529"/>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9"/>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGolang} color="#5ED4F4"/>
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
