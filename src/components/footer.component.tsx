import Link from 'next/link'
import { FormComponent } from './footer-form.component'
import { OWNER_CONFIGS } from '@/utils/owner.config'

export function Footer() {
  const initialDate = new Date('2023-08-20')
  const today = new Date()

  return (
    <>
      <div id="contact" className="mt-40 flex h-20 w-full items-center justify-center rounded-t-full bg-brand-primary text-brand-on-primary">
        <h2 className="text-2xl">Contact</h2>
      </div>

      <footer className="w-full bg-brand-primary px-10 pb-10 text-brand-on-primary">
        <div className="m-auto flex max-w-3xl flex-col items-center justify-between gap-10 pb-10  md:flex-row md:items-baseline">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Drop me a message</h3>
            <p className="max-w-[32ch] text-sm opacity-80">Have a question or project idea? Reach out through the form or the email below, and I will get back to you within 48 hours. Let&apos;s connect and create something great together!</p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded bg-brand-primary p-2 text-brand-on-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                </div>
                felipescherer25@gmail.com
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded bg-brand-primary p-2 text-brand-on-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                  </svg>
                </div>
                Itatiba, São Paulo, Brazil
              </div>
            </div>
          </div>

          <FormComponent />
        </div>

        <div className="flex flex-col items-center border-t pt-10">
          <small>
            Copyright © 🞄
            {' '}
            {`${initialDate.getFullYear().toString()} - ${today.getFullYear().toString()}`}
          </small>

          <small>
            <Link aria-label={`Go to Github's ${OWNER_CONFIGS.name} page`} className="transition-all hover:text-brand-hover-primary" href={OWNER_CONFIGS.github_link} target="_blank">
              {OWNER_CONFIGS.user}
              |
              {OWNER_CONFIGS.name}
            </Link>
          </small>
        </div>

      </footer>
    </>
  )
}
