/* TODO Update images in background of each card */

import Link from 'next/link'
import { CardWrapper } from './card-wrapper.component'
import { SERVICES } from '@/utils/data/services.data'

export function ServicesSection() {
  return (
    <CardWrapper direction="collumn" id="services">
      <h2 className="text-center text-4xl leading-loose tracking-wider text-on-layer-0-l1">
        Services
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {
          SERVICES.map(card => (
            <div key={card.title} className="rounded border border-brand-primary p-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-brand-primary p-3 text-[#fff]">
                  {card.icon}
                </div>

                <h3 className="text-xl font-medium">
                  {card.title}
                </h3>
              </div>

              <p className="mt-4">
                {card.text}
              </p>
            </div>
          ))
        }
      </div>

      <div className="mt-6 flex flex-col items-center space-y-2">
        <p className="text-lg">Do you have a great project idea?</p>
        <p>I would love to build for you!</p>

        <p>
          Get in touch in a
          <strong>free</strong>
          {' '}
          call!
        </p>
      </div>

      <Link href="/about#contact" className="btn btn-primary my-6">
        EMAIL ME
      </Link>
    </CardWrapper>
  )
}
