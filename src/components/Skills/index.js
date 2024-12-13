import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Навыки'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
                letterClass={letterClass}
                strArray={skillsArray}
                idx={15}
            />
            <br/>
          </h1>
          <p>
            У меня богатый опыт в frontend-разработке современных веб-приложений, с глубоким пониманием JavaScript
            экосистемы и фреймворков. Я специализируюсь на создании высокопроизводительных пользовательских интерфейсов,
            уделяя особое внимание оптимизации, масштабируемости и качеству кода. Мой опыт включает работу с React,
            Vue.js, TypeScript и современными инструментами сборки для создания отказоустойчивых веб-приложений.
          </p>
          <p>
            Мой технический стек охватывает все аспекты современной frontend-разработки: от построения компонентной
            архитектуры до внедрения микрофронтендов. Я постоянно изучаю новые технологии и подходы, что позволяет мне
            создавать инновационные решения с использованием передовых практик отрасли. Особое внимание уделяю
            производительности приложений и оптимизации пользовательского опыта.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud/>
        </div>
      </div>

      <Loader type="pacman"/>
    </>
  )
}

export default Skills
