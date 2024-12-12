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
            <br />
          </h1>
          <p>
            У меня есть прочный фундамент как в области разработки, так и в операционной деятельности, благодаря
            основное внимание уделяется созданию бесшовных и эффективных систем. Мой опыт
            включает автоматизацию процессов развертывания, разработку масштабируемых
            приложений и работа с облачными технологиями для обеспечения
            надежные решения.
          </p>
          <p>
            Мой набор навыков охватывает DevOps, машинное обучение, полномасштабную
            разработку и облачную инфраструктуру. Я твердо намерен остаться
            обновленный в соответствии с последними достижениями и постоянно совершенствующий свой
            опыт, необходимый для эффективного решения сложных задач.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
