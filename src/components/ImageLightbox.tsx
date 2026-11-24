import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { ProjectImage } from '../pages/work/projects'

type ImageLightboxProps = {
  image: ProjectImage
  children: ReactNode
  className?: string
  ariaLabel?: string
}

export default function ImageLightbox({ image, children, className = '', ariaLabel = `View larger image: ${image.alt}` }: ImageLightboxProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const close = () => {
    setOpen(false)
    window.setTimeout(() => triggerRef.current?.focus(), 0)
  }

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
      } else if (event.key === 'Tab') {
        event.preventDefault()
        closeRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return <>
    <button ref={triggerRef} type="button" className={`image-lightbox__trigger ${className}`.trim()} aria-label={ariaLabel} onClick={() => setOpen(true)}>
      {children}
    </button>
    {open && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`Image preview: ${image.alt}`} onMouseDown={event => { if (event.target === event.currentTarget) close() }}>
      <div className="image-lightbox__dialog">
        <div className="image-lightbox__header">
          <span className="image-lightbox__label">IMAGE PREVIEW</span>
          <button ref={closeRef} type="button" className="image-lightbox__close" onClick={close} aria-label="Close image preview">CLOSE</button>
        </div>
        <div className="image-lightbox__body">
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </div>
        <p className="image-lightbox__caption">{image.caption}</p>
      </div>
    </div>}
  </>
}
