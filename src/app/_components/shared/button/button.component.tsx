import { forwardRef } from "react";
import './button.component.scss';

type ButtonProps = {
  children: any,
  className?: string,
  type: 'primary' | 'light',
  href?: string,
  target?: '_self' | '_blank' | '_parent' | '_top',
  srOnlyCopy?: string,
}

const Button = forwardRef(({
  children,
  className,
  type,
  href,
  target,
  srOnlyCopy,
}: ButtonProps, ref: any) => {
  return (
    <a className={(type === 'light' ? 'btn-pill-light ' : 'btn-pill ') + (className ? className : '')} ref={ref} href={href} target={target}>
      {children}
      {srOnlyCopy && <span className='sr-only'>{srOnlyCopy}</span>}
      {target === '_blank' && <span className='sr-only'>opens in a new window</span>}
    </a>
  )
})

export default Button
