'use client'

import { useState } from 'react'

const photos = [
  'bg-[url(/felipe-scherer/photo-flower.webp)]',
  'bg-[url(/felipe-scherer/big-shoes.webp)]',
  'bg-[url(/felipe-scherer/black-white.webp)]',
  'bg-[url(/felipe-scherer/coconout.webp)]',
  'bg-[url(/felipe-scherer/dark-side.webp)]',
]

export function Carrousel() {
  const [photoSelected, setPhotoSelected] = useState(0)

  return (
    <div className="relative overflow-hidden rounded shadow-md shadow-brand-secondary">
      <div className={`${photos[photoSelected]} h-[410px] min-w-[316px] bg-layer-1 bg-cover`} />

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {
          photos.map((photo, index) => (
            <button key={photo} onClick={() => setPhotoSelected(index)} type="button" className={`h-5 w-5 rounded-full opacity-60 ${photoSelected === index ? 'bg-brand-primary' : 'bg-layer-1'}`} />
          ))
        }
      </div>
    </div>
  )
}