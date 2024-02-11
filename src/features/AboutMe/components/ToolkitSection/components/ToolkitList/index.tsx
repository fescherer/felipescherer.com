import { SimplePopover, SimpleTooltip } from '@/components'
import { SimpleLink } from '@/components/SimpleLink'
import { IHability } from '@/types'
import { Info, Star } from 'lucide-react'
import Image from 'next/image'

type ToolkitListProps = {
  tools: IHability[]
  title: string
}

export function ToolkitList({ tools, title }: ToolkitListProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-title">{title}</h2>

      {
        tools.map(tool => (
          <div key={tool.id} className="flex items-center gap-4">
            { tool.isFavorite
              ? (
                <SimpleTooltip tooltip="This is one of my favorite tech">
                  <button type="button">
                    <span className="sr-only">This is one of my favorite tech</span>
                    <Star size={12} className="text-default-yellow" />
                  </button>
                </SimpleTooltip>
                )
              : <div className="h-3 w-3" />}

            <div className="flex items-center gap-2">
              <Image src={tool.icon} alt={`${tool.title} icon`} width={20} height={20} unoptimized />
              <SimpleLink target="_blank" href={tool.doc}>{tool.title}</SimpleLink>
              <span className="text-sm text-on-layer-0-l2">{`- ${tool.short_description}`}</span>

              <SimplePopover trigger={(
                <button type="button">
                  <Info className="cursor-pointer transition-all hover:text-brand-primary" size={16} />
                </button>
              )}
              >
                <div className="flex flex-col">
                  <p className="text-base">{tool.text}</p>
                  <SimpleLink className="self-end" href={tool.doc}>Read the docs</SimpleLink>
                </div>
              </SimplePopover>
            </div>
          </div>
        ))
      }
    </div>

  )
}
