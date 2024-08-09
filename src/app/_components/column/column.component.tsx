type ColumnProps = {
  children: any,
  className?: string,
  baseWidth: number,
  tabletWidth?: number,
  desktopWidth?: number,
}

export default function Column({
  children,
  className,
  baseWidth = 12,
  tabletWidth,
  desktopWidth,
}: ColumnProps) {

  const baseColumnClass = 'col-' + baseWidth;
  const tabletColumnClass = 'col-md-' + tabletWidth;
  const desktopColumnClass = 'col-lg-' + desktopWidth;

  return (
    <div className={(className ? className : '') + ' ' + baseColumnClass + ' ' + (tabletWidth ? tabletColumnClass : '') + ' ' + (desktopWidth ? desktopColumnClass : '')}>
      {children}
    </div>
  )
}
