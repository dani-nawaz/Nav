import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import logo from '../logo.svg'
const Wrapper = styled.nav`
  background: #fffffe;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: hsl(205, 78%, 60%);
    background: transparent;
    border-color: transparent;
    transition: all 250ms ease-in;
    cursor: pointer;
  }
  .logo {
    height: 40px;
  }
  .nav-toggle:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: all 250ms ease-in;
  }
  .social-icons {
    display: none;
  }
  .show-container {
    height: 10rem;
  }
  .links a {
    color: var(--clr-primary-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    display: block;
    padding: 0.5rem 1rem;
    transition: all 250ms ease-in;
  }
  .links a:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-5);
    padding-left: 1.5rem;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
      transition: all 250ms ease-in;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
      border-bottom: 1px solid black;
    }
    .social-icons {
      display: flex;
    }
    .social-icons a {
      margin: 0 0.5rem;
      color: var(--clr-primary-5);
      transition: all 250ms ease-in;
    }
    .social-icons a:hover {
      transform: scale(1.1);
      filter: brightness(1.2);
    }
  }
`
const NavBar = ({ links, social }) => {
  const [showContainer, setShowContainer] = useState(false)
  const LinksRef = useRef(null)
  const LinksContainerRef = useRef(null)
  useEffect(() => {
    const containerHeight = LinksRef.current.getBoundingClientRect().height
    if (showContainer) {
      LinksContainerRef.current.style.height = `${containerHeight}px`
    } else {
      LinksContainerRef.current.style.height = '0px'
    }
  }, [showContainer])
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='' className='logo' />
          <button
            className='nav-toggle'
            onClick={() => {
              setShowContainer(!showContainer)
            }}
          >
            <FaBars />
          </button>
        </div>
        <div
          ref={LinksContainerRef}
          className={`${
            showContainer ? 'links-container show-container' : 'links-container'
          }`}
        >
          <ul className='links' ref={LinksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

export default NavBar
