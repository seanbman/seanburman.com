import type { CSSProperties } from 'react'
import type { ProjectImage, ScreenshotCrop } from '../pages/work/projects'

type CroppedImageProps = {
  image: ProjectImage
  crop: ScreenshotCrop
}

export default function CroppedImage({ image, crop }: CroppedImageProps) {
  const imageStyle = {
    width: `${(image.width / crop.width) * 100}%`,
    transform: `translate(${-((crop.x / image.width) * 100)}%, ${-((crop.y / image.height) * 100)}%)`,
  } as CSSProperties

  return <div className="image-crop">
    <img className="image-crop__image" src={image.src} alt={image.alt} width={image.width} height={image.height} style={imageStyle} />
  </div>
}
