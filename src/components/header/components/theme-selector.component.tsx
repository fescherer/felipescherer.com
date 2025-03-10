'use client'

import { DropdownMenuComponent, Separator } from '@/components/primitives'
import { LucideChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { themes } from '@/themes/themes.theme'
import { setCookie } from 'cookies-next'
import { cn } from '@/utils/cn.function'
import { PropsWithLocale } from '@/types/language'

interface ThemeSelectorProps {
  theme: string
}

export function ThemeSelectorComponent({ theme, lang }: PropsWithLocale<ThemeSelectorProps>) {
  const [themeSelected, setThemeSelected] = useState(theme)

  useEffect(() => {
    if (document.getElementsByTagName('html')[0].getAttribute('data-theme') === '') {
      // This need some attention on the future because causes a flick effect
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        setTheme('dark')
      else if (window.matchMedia('(prefers-color-scheme: light)').matches)
        setTheme('light')
      else setTheme('dark')
    }
  }, [])

  function setTheme(theme: string) {
    setThemeSelected(theme)
    setCookie('data-theme', theme)
    document.getElementsByTagName('html')[0].setAttribute('data-theme', theme)
  }

  return (
    <DropdownMenuComponent trigger={(
      <>
        {themes.find(theme => theme.id === themeSelected)?.icon || ''}
        <LucideChevronDown />
      </>
    )}
    >
      <ul>
        {themes.map((themeItem, index) => (
          <li key={themeItem.id} className={cn({ 'text-primary': themeSelected === themeItem.id })}>
            <button
              data-theme={themeItem.id}
              aria-label={`Change theme to ${themeItem.id}`}
              type="button"
              className={`flex flex-col gap-2 rounded-sm border-2 bg-layer-0 p-2 text-xs capitalize ${themeSelected === themeItem.id ? 'border-brand-primary' : 'border-transparent'}`}
              onClick={() => setTheme(themeItem.id)}
            >
              <div>
                <span className="h-2 w-8 text-on-layer-0-l1">
                  {themeItem.text[lang]}
                </span>
              </div>

              <div className="flex gap-2">
                <div className="h-4 w-6 rounded-xs bg-layer-1" />
                <div className="h-4 w-6 rounded-sm bg-brand-primary" />
                <div className="h-4 w-6 border bg-brand-secondary" />
              </div>

            </button>

            {index % 2 === 0 && <Separator />}
          </li>
        ))}
      </ul>
    </DropdownMenuComponent>
  )
}
