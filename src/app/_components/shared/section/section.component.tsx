type SectionProps = {
  children: any,
  backgroundColor?: 'white' | 'black' | 'primary',
  textColor?: 'base' | 'white' | 'primary',
}

enum SectionBackgroundColors {
  white = '',
  black = 'bg-neutral-high',
  primary = 'bg-primary-high',
}

enum SectionTextColors {
  base = '',
  white = 'text-white',
  primary = 'text-primary',
}

export default function Section({
  children,
  backgroundColor,
  textColor,
}: SectionProps) {

  function getBackgroundColorClass() {
    switch(backgroundColor) {
      case 'black':
        return SectionBackgroundColors.black;
      case 'primary':
        return SectionBackgroundColors.primary;
      case 'white':
      default:
        return SectionBackgroundColors.white;
    }
  }

  function getTextColorClass() {
    switch(textColor) {
      case 'white':
        return SectionTextColors.white;
      case 'primary':
        return SectionTextColors.primary;
      case 'base':
      default:
        return SectionTextColors.base;
    }
  }

  return (
    <div className={'section ' + getBackgroundColorClass() + ' ' + getTextColorClass()}>
      <div className='container'>
        {children}
      </div>
    </div>
  )
}
