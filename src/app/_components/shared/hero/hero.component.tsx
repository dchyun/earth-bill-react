import './hero.component.scss';
import Section from '../section/section.component';
import Row from '../row/row.component';
import Column from '../column/column.component';

type HeroProps = {
  children: any,
  imgSrc?: string,
  theme?: 'primary' | 'dark',
}

export default function Hero({
  children,
  imgSrc,
  theme,
}: HeroProps) {
  return (
    <div className='hero' style={{
      "--hero-img-src": `url(${imgSrc})`,
    } as React.CSSProperties}>
      <Section>
        <Row paddingTop='lg' paddingBottom='lg' className={theme === 'dark' ? 'text-editor-dark' : 'text-editor'}>
          <Column baseWidth={12} desktopWidth={6} className='offset-lg-3 d-flex flex-column align-items-center justify-content-center'>
            {children}
          </Column>
        </Row>
      </Section>
    </div>
  )
}

