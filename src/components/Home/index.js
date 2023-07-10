// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const backColor = isDarkTheme ? 'dark' : 'light'
      const textColor = isDarkTheme ? 'darkText' : 'lightText'

      return (
        <>
          <Navbar />
          <div className={`home-container ${backColor}`}>
            <img src={theme} className="home-image" alt="home" />
            <h1 className={`${textColor}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
