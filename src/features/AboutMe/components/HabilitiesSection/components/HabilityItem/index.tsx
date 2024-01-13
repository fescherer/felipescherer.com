'use client'

import Image from 'next/image'
import * as Popover from '@radix-ui/react-popover'
import { X } from 'lucide-react'
import Link from 'next/link'
import { IHability } from '@/types'

type HabilityItemProps = {
  hability: IHability
  rotate: number
}

export function HabilityItem({ hability, rotate }: HabilityItemProps) {
  return (
    <Popover.Root>
      {/* TODO Remake the animation */}
      <Popover.Trigger className="pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 animate-pulse items-center justify-center overflow-hidden rounded-full border border-transparent bg-layer-1 p-1 transition-all hover:border-brand-primary hover:animation-paused" style={{ top: 0, left: 0, transform: `translate(-50%, -50%) rotate(-${rotate}deg)` }}>
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
  )
}
