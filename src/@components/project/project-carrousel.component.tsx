'use client'

import { IProject } from '@/@data/projects.data'
import { useState } from 'react'

/* TODO
Add carrousel animation, this probably will need a 3th party lib

Add time function to pass the images from like 10 seconds
*/

type ProjectCarrouselProps = {
  project: IProject
}

export function ProjectCarrousel({ project }: ProjectCarrouselProps) {
  const imagePath = `/projects/${project.type.id}/${project.id}`
  const [photoSelected, setPhotoSelected] = useState(0)

  return (
    <div className="relative flex w-full overflow-hidden rounded-sm bg-layer-1 p-2 min-w-80 md:min-w-150">
      {/* <Image alt={project.images[photoSelected]} height={40} width={40} src=  /> */}

      <div className="h-[28rem] w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagePath}/${project.images[photoSelected]})` }} />

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {
          project.images.map((photo, index) => (
            <button key={photo} onClick={() => setPhotoSelected(index)} type="button" className={`size-5 cursor-pointer rounded-full border border-primary hover:bg-brand-hover-primary ${photoSelected === index ? 'bg-primary' : 'bg-base-200'}`} />
          ))
        }
      </div>
    </div>
  )
}
