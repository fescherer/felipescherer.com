'use client'

import { useState } from 'react'

type ILanguage = {
  id: string
  text: string
}

const availableLanguages: ILanguage[] = [{ id: 'en', text: 'english' }, { id: 'pt-br', text: 'português' }]

export function Resume() {
  const [selectedLanguage, setSelectedLanguage] = useState(availableLanguages[0])

  return (
    <div className="m-auto my-4 flex max-w-5xl flex-col gap-2">
      <h2 className="font-title text-3xl text-on-layer-0-l1">View/Download my Resume</h2>
      <p>Thank you for your interest in my work. By clicking on the download button, you&apos;ll gain access to a detailed document that highlights my educational background, work history, key achievements, and areas of expertise. Whether you&apos;re a potential employer, collaborator, or simply curious about my career trajectory, my CV/resume offers valuable insights.</p>

      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <p>
          You are seeing the
          <strong className="text-brand-primary">{` ${selectedLanguage.text} `}</strong>
          version.
        </p>

        <div className="flex gap-1 rounded border border-layer-2">
          {availableLanguages.map(language => (
            <button onClick={() => setSelectedLanguage(language)} key={language.id} type="button" className={`px-4 py-2 capitalize ${language.id === selectedLanguage.id ? 'bg-brand-primary text-brand-on-primary' : 'bg-transparent'}`}>{language.text}</button>
          ))}
        </div>
      </div>

      <object data={`/resume/felipe-scherer-resume-${selectedLanguage.id}.pdf`} width="80%" height="1000" className="mx-auto my-4 w-full md:w-10/12">
        <embed src={`/resume/felipe-scherer-resume-${selectedLanguage.id}.pdf`} width="80%" height="1000px" className="w-full" />
      </object>
    </div>
  )
}
