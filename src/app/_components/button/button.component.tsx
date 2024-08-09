import { forwardRef } from "react";
import './button.component.scss';

type ButtonProps = {
  children: any,
  type: 'primary' | 'light',
  href?: string,
  target?: '_self' | '_blank' | '_parent' | '_top',
  srOnlyCopy?: string,
}

const Button = forwardRef(({
  children,
  type,
  href,
  target,
  srOnlyCopy,
}: ButtonProps, ref: any) => {
  return (
    <a className={type === 'light' ? 'btn-pill-light' : 'btn-pill'} ref={ref} href={href} target={target}>
      {children}
      {srOnlyCopy && <span className='sr-only'>{srOnlyCopy}</span>}
    </a>
  )
})

export default Button
