import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useRef } from 'react'

import '../assets/css/header.css'
import '../assets/css/mk.css'
import '../assets/css/style.css'

import "../App.css"

function Header() {
  return (
    <>
      <div className="code-fixed-nav">
        <Topbar />
        <Navbar />
      </div>

    </>
  )
}

export default Header



function Topbar() {
  function toggleMenu() {
    document.querySelector('.code-nav-links').classList.toggle('code-show');
  }

  $(document).ready(function () {
    // Toggle dropdown on button click
    $('.codingwalla-dropdown-button').click(function () {
      $('.codingwalla-dropdown-content').show();
    });

    // Close dropdown on close button click
    $('.codingwalla-close-button').click(function () {
      $('.codingwalla-dropdown-content').hide();
    });
  });


  return (
    <>
      <nav class="code-nav">
        <div class="code-logo">
          <a href="./"><img src="/assets/images/Codingwalla_new_logo.png" alt="..." /></a>
          <div class="codingwalla-dropdown">
            <button class="codingwalla-dropdown-button">Category &#9660;</button>
            <div class="codingwalla-dropdown-content">
            <button class="codingwalla-close-button" >x</button>
              <div class="codingwalla-menu-item">
                <span class="codingwalla-menu-link">Frontend Development <span class="codingwalla-arrow-down">&#9660;</span></span>
                <div class="codingwalla-submenu">
                  <Link to="#"> <i class="fa-brands fa-html5"></i>  Html Tutorials </Link>
                  <a to="css">CSS Tutorials</a>
                  <a href="#">Javascript Tutorials</a>
                  <a href="#">React js Tutorials</a>
                  <a href="#">Bootstrap Tutorials</a>
                  <a href="#">Tailwind Tutorials</a>
                  <a href="#">Html Tutorials</a>
                  <a href="#">CSS Tutorials</a>
                  <a href="#">Javascript Tutorials</a>
                  <a href="#">React js Tutorials</a>
                  <a href="#">Bootstrap Tutorials</a>
                  <a href="#">Tailwind Tutorials</a>
                </div>
              </div>


              <div class="codingwalla-menu-item">
                <span class="codingwalla-menu-link">Backend DEvelopment <span class="codingwalla-arrow-down">&#9660;</span></span>
                <div class="codingwalla-submenu">
                  <a href="#">Php Tutorials</a>
                  <a href="#">Node Js Tutorials</a>
                  <a href="#">C# Tutorials</a>
                  <a href="#">Java Tutorials</a>
                  <a href="#">Python Tutorials</a>
                </div>
              </div>


              <div class="codingwalla-menu-item">
                <span class="codingwalla-menu-link">Database <span class="codingwalla-arrow-down">&#9660;</span></span>
                <div class="codingwalla-submenu">
                  <a href="#">SQL Tutorials</a>
                  <a href="#">MySql Tutorials</a>
                  <a href="#">Mongo db Tutorials</a>
                </div>
              </div>


              <div class="codingwalla-menu-item">
                <span class="codingwalla-menu-link">AI & ML <span class="codingwalla-arrow-down">&#9660;</span></span>
                <div class="codingwalla-submenu">
                  <a href="#">Email Tutorials</a>
                  <a href="#">Phone Tutorials</a>
                  <a href="#">Location Tutorials</a>
                  <a href="#">Email Tutorials</a>
                  <a href="#">Phone Tutorials</a>
                  <a href="#">Location Tutorials</a>
                </div>
              </div>

            </div>
          </div>
          <button class="codingwalla-login-button">Login</button>
        </div>

        {/* <button class="code-menu-button" onClick={toggleMenu}>☰</button> */}



        <div class="code-nav-links">
          <ul class="nav-links">
            <li class=" dropdown">
              <a href="#" className='code-dropbtn'>Category <i className="fa-solid fa-sort-down"></i></a>
              <div className="code-dropdawn-menu">
                <button class="close-button" onClick={toggleMenu}><i class="fa-solid fa-xmark"></i></button>
                <div class="dropdown-menu" >
                  <h2>  Our Technologies </h2>
                  <div className="code-dropdown-menu-item" >
                    <div className="code-item-list1">
                      <ul>
                        <h3> Frontend </h3>
                        <li><Link to="#" target='_blank'> Learn Html </Link></li>
                        <li><Link to="" target='_blank'> Learn Css </Link></li>
                        <li><Link to=""> Learn Javascript </Link></li>
                        <li><a href=""> Learn React js </a></li>
                        <li><a href=""> Learn JQuery </a></li>
                        <li><a href=""> Learn Tailwind </a></li>
                        <li><a href=""> Learn Bootstrap 3 </a></li>
                        <li><a href=""> Learn Bootstrap 4 </a></li>
                        <li><a href=""> Learn Bootstrap 5 </a></li>
                        <li><a href=""> Learn Angular </a></li>
                        <li><a href=""> Learn Wordpress </a></li>
                        <li><a href=""> Learn TypeScript </a></li>
                        <li><a href=""> Learn JSON </a></li>

                      </ul>
                    </div>
                    <div className="code-item-list1">
                      <ul>
                        <h3> Backend </h3>
                        <li><a href=""> Learn php</a></li>
                        <li><a href=""> Learn C#</a></li>
                        <li><a href=""> Learn .Net</a></li>
                        <li><a href=""> Learn Node js</a></li>
                        <li><a href=""> Learn Larawel</a></li>
                        <li><a href=""> Learn NOde Js</a></li>
                        <li><a href=""> Learn Express ja</a></li>
                        <li><a href=""> Learn Python</a></li>
                        <li><a href=""> Learn Java</a></li>
                        <li><a href=""> Learn Django</a></li>
                        <li><a href=""> Learn FastAPI</a></li>
                      </ul>
                    </div>
                    <div className="code-item-list1">
                      <ul>
                        <h3> Databases </h3>
                        <li><a href=""> Learn SQL </a></li>
                        <li><a href=""> Learn My SQl</a></li>
                        <li><a href=""> Learn Mongo db</a></li>
                        <li><a href=""> Learn Flask</a></li>
                        <li><a href=""> Learn DBMS</a></li>
                        <li><a href=""> Learn PL/SQL</a></li>
                        <li><a href=""> Learn SQLite</a></li>
                        <li><a href=""> Learn TinyDB</a></li>
                        <li><a href=""> Learn Php MyAdmin</a></li>
                        <li><a href=""> Learn SQL Server</a></li>
                      </ul>
                    </div>

                    <div className="code-item-list1">
                      <ul>
                        <h3> AI, ML & Data Science </h3>
                        <li><a href=""> Learn Artificial Intelligence</a></li>
                        <li><a href=""> Learn Big Data Analytics</a></li>
                        <li><a href=""> Learn Machine Learning</a></li>
                        <li><a href=""> Learn Panadas</a></li>
                        <li><a href=""> Learn Statistics </a></li>
                        <li><a href=""> Learn M L With Python</a></li>
                        <li><a href=""> Learn Big Data Analytics </a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

            </li>
            <li class="dropdown">
              <a href="#" className='code-dropbtn'>Tutorials <i className="fa-solid fa-sort-down"></i></a>
              <div className='code-dropdawn-menu'>
                <button class="close-button" onClick={toggleMenu}><i class="fa-solid fa-xmark"></i></button>
                <div class="dropdown-menu">
                  <h2> Comming Soon</h2>

                </div>
              </div>

            </li>
            <li className='search-section'>
              <div className="top-items code-searchbar">
                <div className="code-search">
                  <input className="code-search-input" type="text" placeholder="Search..." />
                  <button className="code-search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </li>
            <li class="dropdown">
              <a href="#" className='code-dropbtn'>Get Certification  <i className="fa-solid fa-sort-down"></i></a>
              <div className='code-dropdawn-menu'>
                <button class="close-button" onClick={toggleMenu}><i class="fa-solid fa-xmark"></i></button>
                <div class="dropdown-menu">
                  <h2> Certification Comming Soon</h2>

                </div>

              </div>

            </li>

          </ul>

        </div>
        <div className="button-container">
          <a href="#demo-modal" className="btn code-signup-btn">Sign Up</a>
          <a href="#Logindemo-modal" className="btn code-login-btn">Login</a>
        </div>
      </nav>

    </>
  );
}


function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  const wrapperRef = useRef(null);

  const scrollManual = (amount) => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const items = [
    'Html', 'CSS', 'JS', 'C', 'C++', 'C#', 'BOOTSTRAP', 'REACT', 'MYSQL', 'JQUERY',
    'EXCEL', 'XML', 'DJANGO', 'NUMPY', 'PANDAS', 'NODEJS', 'REACT', 'MYSQL', 'JQUERY',
    'EXCEL', 'XML', 'DJANGO', 'NUMPY', 'PANDAS', 'NODEJS', 'DSA', 'TYPESCRIPT'
  ];
  return (

    <>
      <div className="scroll-container" style={{ display: 'flex', alignItems: 'center' }}>

        <button className="scroll-buttons left-btn" onClick={() => scrollManual(-200)}>
          &#8249;
        </button>
        <button className='code-sidebar-menu'>


          <div className="code-sidebar-mobile mt-3">

            <nav>
              <div>
                <div className="form-inline ml-auto">
                  <div className="sidebar-button" onClick={ToggleSidebar} >
                    <i className="fa fa-bars"></i>
                  </div>
                </div>
              </div>
            </nav>
            <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
              <div className="sd-header">
              <a className='code-footer-logo' href="/"><img src="/assets/images/Codingwalla_new_white_logo.png" alt="Footer Logo" /></a>
                <div className="Close-button" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
              </div>
              <div className="sd-body">
                <ul>
                  <h5 className="sidebar-sub-heading">HTML Tutorials</h5>
                  <li><Link className="sd-link" to='#'>Html Tutorials</Link></li>
                  <li><Link className="sd-link" to="#">Html Introduction</Link></li>
                  <li><Link to="#" className="sd-link">Html History</Link></li>
                  <li><Link to="#" className="sd-link">Html Syntax</Link></li>
                  <li><Link to="#" className="sd-link">Html comments</Link></li>
                  <li><a className="sd-link">Menu Item 6</a></li>
                  <li><a className="sd-link">Menu Item 7</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Html Syntax</a></li>
                  <li><a className="sd-link">Menu Item 5</a></li>
                  <li><a className="sd-link">Menu Item 6</a></li>
                  <li><a className="sd-link">Menu Item 7</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Html Syntax</a></li>
                  <li><a className="sd-link">Menu Item 5</a></li>
                  <li><a className="sd-link">Menu Item 6</a></li>
                  <li><a className="sd-link">Menu Item 7</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <h5 className="sidebar-sub-heading">HTML Tutorials</h5>
                  <li><a className="sd-link">Html Tutorials</a></li>
                  <li><a className="sd-link">Html Introduction</a></li>
                  <li><a className="sd-link">Html setup</a></li>
                  <li><a className="sd-link">Html Syntax</a></li>
                  <li><a className="sd-link">Menu Item 5</a></li>
                  <li><a className="sd-link">Menu Item 6</a></li>
                  <li><a className="sd-link">Menu Item 7</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <h5 className="sidebar-sub-heading">HTML Tutorials</h5>
                  <li><a className="sd-link">Html Tutorials</a></li>
                  <li><a className="sd-link">Html Introduction</a></li>
                  <li><a className="sd-link">Html setup</a></li>
                  <li><a className="sd-link">Html Syntax</a></li>
                  <li><a className="sd-link">Menu Item 5</a></li>
                  <li><a className="sd-link">Menu Item 6</a></li>
                  <li><a className="sd-link">Menu Item 7</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <h5 className="sidebar-sub-heading">HTML Tutorials</h5>
                  <li><a className="sd-link">Html Tutorials</a></li>
                  <li><a className="sd-link">Html Introduction</a></li>
                  <li><a className="sd-link">Html setup</a></li>
                  <li><a className="sd-link">Html Syntax</a></li>
                  <li><a className="sd-link">Menu Item 5</a></li>
                  <li><a className="sd-link">Menu Item 6</a></li>
                  <li><a className="sd-link">Menu Item 7</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                  <li><a className="sd-link">Menu Item 8</a></li>
                </ul>
              </div>
            </div>
            <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
          </div>

        </button>
        <div
          className="scroll-content-wrapper"
          ref={wrapperRef}
          style={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            display: 'flex',
            scrollBehavior: 'smooth',
            background: '#3068b3',
            width: '100%',
            margin: '0'
          }}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase()}`} // You can customize this to actual links
              className="item"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                margin: '0 5px',
                color: 'white',

                borderRadius: '5px',
                cursor: 'pointer',
                textDecoration: 'none',
                flex: '0 0 auto'
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <button className="scroll-buttons right-btn" onClick={() => scrollManual(200)}>
          &#8250;
        </button>
      </div>
    </>
  )
}





