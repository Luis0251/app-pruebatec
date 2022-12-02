import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/Movie2_37185.png'


const headerNav = [
  {display : 'Home',
    path:'/' },
  {
    display : 'Movies',
    path: '/movie'
  }
]


const Header = () => {
  const {pathname} = useLocation();
  const headerRef = React.useRef(null);
  const active = headerNav.findIndex(e=> e.pathname === pathname);
  

  return (
    <div ref={headerRef} className='header' >
      <div className='header_wrap container'>
          <div color='logo'>
            <img src={logo} alt=""/>
            <Link to="/">Movies</Link>
          </div>
          <ul className="header__nav">
            {
              headerNav.map((e,i)=>(
               <li key={i} className={`${i === active ? 'active' : '' }`} >
                  <Link to ={e.path}>
                    {e.display}
                  </Link>
               </li> 
              ))
            }
          </ul>
      </div>
    </div>
  )
}

export {Header}