// Write your code here

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const backColor = isDarkTheme ? 'dark' : 'light'
      const textColor = isDarkTheme ? 'darkText' : 'lightText'

      return (
        <>
          <Navbar />
          <div className={`home-container ${backColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="home-image"
              alt="not found"
            />
            <h1 className={`${textColor}`}>Lost Your Way</h1>
            <p className={`${textColor}`}>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
