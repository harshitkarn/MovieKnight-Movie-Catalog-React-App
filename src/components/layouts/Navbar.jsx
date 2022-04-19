import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import bars from '../../resources/bars.png';
import close from '../../resources/close.png';
import { useRef, useState } from 'react';
function NavBar(){
    const navHidden = useRef(null);
    const [isNavVisible, setNavIsVisible] = useState(false);
    function navBarOpener(){
      if(navHidden.current.style.display === "" || navHidden.current.style.display === "none")
        navHidden.current.style.display = "block";
      else
        navHidden.current.style.display = "none";
      setNavIsVisible(!isNavVisible);
    }
    return (
        <header className={classes.header}>
          <div className={classes.logo}>
            <Link to='/'>MovieKnight</Link>
            <img src={isNavVisible?close:bars} alt="bars" onClick={navBarOpener}/>
          </div>
          <nav className={classes.nav} ref={navHidden}>
              <ul>
                  <li>
                    <Link to='/'>Top Rated</Link>
                  </li>
                  <li>
                      <Link to='/popular'>Popular</Link>
                  </li>
                  <li>
                      <Link to='/now-playing'>Now Playing</Link>
                  </li>
                  <li>
                    <Link to='/upcoming'>Upcoming</Link>
                  </li>
              </ul>
          </nav>
        </header>
      );
}

export default NavBar;