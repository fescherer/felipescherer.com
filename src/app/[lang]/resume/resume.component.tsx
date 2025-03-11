'use client'

import { Locale, i18nWithName } from '@/lib/i18n/i18n-config'
import { useState } from 'react'

type ResumeProps = {
  lang: Locale
  translations: {
    'title': string
    'text': string
    'en-version': string
    'pt-version': string
  }
}

export function ResumeComponent({ lang, translations }: ResumeProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(lang)

  return (
    <div className="m-auto my-4 flex max-w-5xl flex-col gap-2">
      <h2 className="font-title text-3xl text-on-layer-0-l1">{translations.title}</h2>
      <p>{translations.text}</p>

      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <strong className="font-medium">
          {selectedLanguage === 'en' ? translations['en-version'] : translations['pt-version']}
        </strong>

        <div className="flex gap-1 rounded-sm border border-layer-2">
          {i18nWithName.locales.map(language => (
            <button onClick={() => setSelectedLanguage(language.id)} key={language.id} type="button" className={`px-4 py-2 capitalize ${language.id === selectedLanguage ? 'bg-brand-primary text-brand-on-primary' : 'bg-transparent'}`}>{language.name}</button>
          ))}
        </div>
      </div>

      <object data={`/resume/felipe-scherer-resume-${selectedLanguage}.pdf`} width="80%" height="1000" className="mx-auto my-4 w-full md:w-10/12">
        <embed src={`/resume/felipe-scherer-resume-${selectedLanguage}.pdf`} width="80%" height="1000px" className="w-full" />
      </object>
    </div>
  )
}
