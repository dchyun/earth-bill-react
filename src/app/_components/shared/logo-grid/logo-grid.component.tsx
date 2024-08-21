'use client'

import './logo-grid.component.scss';

type LogoGridProps = {
  children: any,
  className?: string,
}

export default function LogoGrid({
  children,
  className,
}: LogoGridProps) {

  return (
    <div className={'logo-grid' + (className ? ' ' + className : '')}>
      {children}
    </div>
  )
}

type LogoGridItemProps = {
  children: any,
  src: string,
  logoType?: 'square' | 'script',
}

export function LogoGridItem({
  children,
  src,
  logoType = 'square',
}: LogoGridItemProps) {
  return (
    <img className={'logo-grid__logo' + (logoType === 'script' ? ' logo__script' : ' logo__square')} src={src} alt={children} loading='lazy'/>
  )
}
