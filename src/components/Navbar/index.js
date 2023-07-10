// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value

      const onChangingTheme = () => {
        toggleTheme()
      }

      const backgroundColor = isDarkTheme ? 'darkTheme' : 'lightTheme'
      const logoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const linkColor = isDarkTheme ? 'darkLink' : 'lightLink'

      return (
        <nav className={`navbar-container ${backgroundColor}`}>
          <div className="header-component">
            <img src={logoImage} className="logo-image" alt="website logo" />
            <ul className="unorder-list">
              <li>
                <Link to="/" className={`link-item ${linkColor}`}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className={`link-item ${linkColor}`}>
                  About{' '}
                </Link>
              </li>
            </ul>
            <button type="button" data-testid="theme" className="button">
              <img
                src={themeImage}
                className="theme-image"
                alt="theme"
                onClick={onChangingTheme}
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
