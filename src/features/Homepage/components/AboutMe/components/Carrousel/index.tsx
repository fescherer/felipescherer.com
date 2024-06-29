'use client'

import { useState } from 'react'

/* TODO
Add carrousel animation, this probably will need a 3th party lib
*/
const photos = [
  'bg-[url(/felipe-scherer/photo-flower.webp)]',
  'bg-[url(/felipe-scherer/smile.webp)]',
  'bg-[url(/felipe-scherer/photo-flower-sunflower.webp)]',
  'bg-[url(/felipe-scherer/coconout.webp)]',
]

export function Carrousel() {
  const [photoSelected, setPhotoSelected] = useState(0)

  return (
    <div className="relative overflow-hidden rounded ">
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
