'use client'

import './collapse.component.scss';
import { useState, useId } from 'react';

type CollapseProps = {
  children: any,
  className?: string,
  label: string,
  theme?: 'primary' | 'dark',
}

export default function Collapse({
  children,
  className,
  label,
  theme,
}: CollapseProps) {

  const [collapsed, setCollapsed] = useState(true);

  const collapseBtnId = useId();
  const collapseId = useId();

  const handleClick = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div className={'collapse' + (className ? ' ' + className : '') + (theme === 'dark' ? ' text-editor-dark' : ' text-editor')}>
      <button
        className={'collapse__btn' + (theme === 'dark' ? ' link-light' : ' link-primary')}
        type='button'
        aria-expanded={collapsed ? 'false' : 'true'}
        aria-controls={collapseId}
        id={collapseBtnId}
        onClick={handleClick}
      >{label}</button>
      <div
        className={'collapse__panel pt-3' + (collapsed ? ' collapsed' : '')}
        id={collapseId}
        role='region'
        aria-labelledby={collapseBtnId}
      >
        {children}
      </div>
    </div>
  )
}
