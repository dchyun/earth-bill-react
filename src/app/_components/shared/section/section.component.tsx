type SectionProps = {
  children: any,
  className?: string,
  containerType?: 'default' | 'fluid',
  backgroundColor?: 'white' | 'black' | 'primary',
  textColor?: 'base' | 'white' | 'primary',
}

enum ContainerTypes {
  default = 'container',
  fluid = 'container-fluid',
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
  className,
  containerType,
  backgroundColor,
  textColor,
}: SectionProps) {

  function getContainerClass() {
    switch(containerType) {
      case 'fluid':
        return ContainerTypes.fluid;
      case 'default':
      default:
        return ContainerTypes.default;
    }
  }

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
    <div className={'section ' + (className ? className + ' ' : '') + getBackgroundColorClass() + ' ' + getTextColorClass()}>
      <div className={getContainerClass()}>
        {children}
      </div>
    </div>
  )
}
