type RowProps = {
  children: any,
  className?: string,
  paddingTop?: 'sm' | 'md' | 'lg',
  paddingBottom?: 'sm' | 'md' | 'lg',
  backgroundColor?: 'white' | 'black' | 'primary',
  textColor?: 'base' | 'white' | 'primary',
}

enum RowBackgroundColors {
  white = '',
  black = 'bg-neutral-high',
  primary = 'bg-primary-high',
}

enum RowTextColors {
  base = '',
  white = 'text-white',
  primary = 'text-primary',
}

export default function Row({
  children,
  className,
  paddingTop,
  paddingBottom,
  backgroundColor,
  textColor,
}: RowProps) {

  function getBackgroundColorClass() {
    switch(backgroundColor) {
      case 'black':
        return RowBackgroundColors.black;
      case 'primary':
        return RowBackgroundColors.primary;
      case 'white':
      default:
        return RowBackgroundColors.white;
    }
  }

  function getTextColorClass() {
    switch(textColor) {
      case 'white':
        return RowTextColors.white;
      case 'primary':
        return RowTextColors.primary;
      case 'base':
      default:
        return RowTextColors.base;
    }
  }

  const paddingTopClass = 'rt-' + paddingTop;
  const paddingBottomClass = 'rb-' + paddingBottom;

  return (
    <div className={'row ' + (className ? className : '') + ' ' + getBackgroundColorClass() + ' ' + getTextColorClass() + ' ' + (paddingTop ? paddingTopClass : '') + ' ' + (paddingBottom ? paddingBottomClass : '')}>
      {children}
    </div>
  )
}
