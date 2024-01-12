'use client'

import { HABILITIES_DATA } from '@/utils/aboutme/habilities'
import Image from 'next/image'
import * as Popover from '@radix-ui/react-popover'
import { X } from 'lucide-react'
import Link from 'next/link'

export function HabilitiesSection() {
  function generateRandomPosition(index: number) {
    const itemSize = 34
    const angle = (index / HABILITIES_DATA.length) * 2 * Math.PI

    const radius = Math.random() * 16// Adjust the radius as needed

    const x = itemSize / 2 + radius * Math.cos(angle)
    const y = itemSize / 2 + radius * Math.sin(angle)

    return {
      left: `${(x / itemSize) * 100}%`,
      top: `${(y / itemSize) * 100}%`,
    }

    // return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div className="relative m-auto flex min-h-[500px] max-w-[500px] flex-wrap items-center justify-center gap-2">
      <div className="relative flex items-center justify-center p-14">
        <div className="absolute aspect-square w-[100px] bg-gradient-to-br from-brand-primary to-brand-secondary blur-3xl md:w-[200] lg:w-[200px]" />
        <span className="z-10 text-on-layer-0-l1">Stack</span>
      </div>

      {
        HABILITIES_DATA.map((hability, index) => (
          <Popover.Root key={hability.id}>
            <Popover.Trigger className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-layer-1 p-1" style={generateRandomPosition(index)}>
              <Image src={hability.icon} width={30} height={30} alt={hability.title} />
            </Popover.Trigger>

            <Popover.Anchor />

            <Popover.Portal>
              <Popover.Content className="rounded bg-layer-1 p-5 data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade" sideOffset={5}>
                <div className="flex max-w-[300px] flex-col">
                  <div className="flex justify-between pr-4">
                    <h3 className="font-title text-lg text-on-layer-0-l1">{hability.title}</h3>
                    <Image src={hability.icon} width={20} height={20} alt={hability.title} />
                  </div>

                  <p className="mt-2 indent-4 text-sm leading-6">{hability.text}</p>
                  <Link target="_blank" className="design-link mt-2 self-end text-sm" href={hability.doc}>Documentation link</Link>
                </div>

                <Popover.Close className="absolute right-2 top-2 inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full text-on-layer-0-l2 outline-none hover:text-on-layer-0-l1 focus:text-on-layer-0-l1">
                  <X size={14} />
                </Popover.Close>

                <Popover.Arrow className="fill-layer-1" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>

        ))
      }
    </div>
  )
}
