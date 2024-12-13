import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import styles from './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'anex'.split('')
  const jobArray = 'Software Engineer'.split('')
  const interestArray = 'FullStack | DevOps | Web3'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>П</span>
            <span className={letterClass}>р</span>
            <span className={letterClass}>и</span>
            <span className={letterClass}>в</span>
            <span className={letterClass}>е</span>
            <span className={`${letterClass} _12`}>т,</span>
            <br />
            <span className={`${letterClass} _13`}>Я</span>
            <img src={LogoTitle} alt="Sudip Banerjee" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />
          </h1>
          <h2>
            Оптимизация бизнес процессов | Внедрение искуственного интелекта | Боты | Telegram web app | Сайты любой сложности
          </h2>
          <Link to="/contact" className="flat-button">
            КОНТАКТЫ
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
