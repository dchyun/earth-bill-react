import { forwardRef } from "react";
import './link-card.component.scss';

type LinkCardProps = {
  children: any,
  className?: string,
  href?: string,
  target?: '_self' | '_blank' | '_parent' | '_top',
  srOnlyCopy?: string,
  height?: '100' | 'auto',
}

const LinkCard = forwardRef(({
  children,
  className,
  href,
  target,
  srOnlyCopy,
  height,
}: LinkCardProps, ref: any) => {
  return (
    <a className={'link-card ' + (height === '100' ? 'h-100 ' : '') + (className ? className : '')} ref={ref} href={href} target={target}>
      {children}
      {srOnlyCopy && <span className='sr-only'>{srOnlyCopy}</span>}
      {target === '_blank' && <span className='sr-only'>opens in a new window</span>}
    </a>
  )
})

export default LinkCard
