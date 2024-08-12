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
      <div className="row header bg-primary-high text-white m-0 py-3 px-4">
        <div className="col-10 col-md-12 col-lg-9 d-flex align-items-center justify-content-evenly">
          <div className="header__icon mr-5">
            <a href="https://earthbill.org">
              <picture>
                <source srcSet={'/logo-transparent.png'} media="(min-width: 576px)"/>
                <img src={'/logo-transparent.png'} alt=""/>
              </picture>
              <span className="sr-only">The Earth Bill</span>
            </a>
          </div>
          <ul className='header__nav-items list-unstyled d-flex justify-content-between w-100'>
            {children.map((menuItem: TopNavMenuItemProps) => {
              if (!menuItem.desktopHidden) {
                return menuItem
              }
            })}
          </ul>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-end d-md-none d-block">
          <button className={mobileMenuOpen ? 'btn btn-hamburger open' : 'btn btn-hamburger'} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded={mobileMenuOpen ? 'true' : 'false'} onClick={handleHamburgerMenuClick}>
            <svg viewBox="0 0 32 32"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
          </button>
        </div>
      </div>
      <div className={"hamburger-menu flex-column align-items-start ml-auto p-4 " + (mobileMenuOpen ? 'open' : '')} aria-labelledby="dropdownMenuButton">
        <ul className='list-unstyled'>
          {children.map((menuItem: TopNavMenuItemProps) => {
            if (!menuItem.mobileHidden) {
              return menuItem
            }
          })}
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
    <li>
      <Link href={href} target={target} className={'header__nav-item d-md-flex link-no-underline ' + (active ? 'active' : '')}>
        {children}
      </Link>
    </li>
  )
}
