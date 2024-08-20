import './image-resource.component.scss';
import Link from 'next/link';

type ImageResourceProps = {
  src: string,
  alt: string,
}

const ImageResource = ({
  src,
  alt,
}: ImageResourceProps) => {
  return (
    <div className='image-resource'>
      <img
        className='image-resource__image'
        loading='lazy'
        src={src}
        alt={alt}
      />
      <Link className='image-resource__link link-primary' href={src} download={true}>Save image</Link>
    </div>
  )
}

export default ImageResource
