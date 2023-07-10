// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutTheme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const backColor = isDarkTheme ? 'dark' : 'light'
      const textColor = isDarkTheme ? 'darkText' : 'lightText'

      return (
        <>
          <Navbar />
          <div className={`about-container ${backColor}`}>
            <img src={aboutTheme} className="about-image" alt="about" />
            <h1 className={`${textColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
