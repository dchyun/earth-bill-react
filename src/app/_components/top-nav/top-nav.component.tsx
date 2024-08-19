'use client'

import './top-nav.component.scss';
import Link from 'next/link';
import { useState } from 'react';

type TopNavProps = {
  children: any,
}

export default function TopNav({
  children,
}: TopNavProps) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHamburgerMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <div className="w-100 sticky-top header-wrapper">
      <div className="row header bg-primary-high text-white py-3 px-4">
        <div className="col-12 header__col">
          <a href="https://earthbill.org" className="header__icon">
            <picture>
              <source srcSet={'/logo-transparent.png'} media="(min-width: 576px)"/>
              <img src={'/logo-transparent.png'} alt=""/>
            </picture>
            <span className="sr-only">The Earth Bill</span>
          </a>
          <ul className='header__nav-items list-unstyled'>
            {children}
          </ul>
          <button className={mobileMenuOpen ? 'btn btn-hamburger open' : 'btn btn-hamburger'} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded={mobileMenuOpen ? 'true' : 'false'} onClick={handleHamburgerMenuClick}>
            <svg viewBox="0 0 32 32"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
          </button>
        </div>
      </div>
      <div className={"hamburger-menu flex-column align-items-start ml-auto p-4 " + (mobileMenuOpen ? 'open' : '')} aria-labelledby="dropdownMenuButton">
        <ul className='list-unstyled'>
          {children}
        </ul>
      </div>
    </div>
  )
}

type TopNavMenuItemProps = {
  children: any,
  href: string,
  target?: '_self' | '_blank' | '_parent' | '_top',
  active?: boolean,
  desktopHidden?: boolean,
  mobileHidden?: boolean,
}

export function TopNavMenuItem({
  children,
  href,
  target,
  active,
  desktopHidden,
  mobileHidden,
}: TopNavMenuItemProps) {
  return (
    <li className={'header__nav-item' + (desktopHidden ? ' desktop-hidden' : '') + (mobileHidden ? ' mobile-hidden' : '')}>
      <Link href={href} target={target} className={'header__nav-item__link link-no-underline ' + (active ? 'active' : '')}>
        {children}
      </Link>
    </li>
  )
}
