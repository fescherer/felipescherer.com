'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const dict = [
  {
    title: 'Essa página não foi encontrada',
    back: 'Voltar a página inicial',
  },
  {
    title: 'This page was not found',
    back: 'Go back to homepage',
  },
]

export function NotFoundComponent() {
  const path = usePathname()
  const lang = path.split('/')[1]
  const langIndex = lang === 'pt' ? 0 : 1
  const t = dict[langIndex]

  return (
    <div className="">
      <Image src="/not-found.svg" width={360} height={360} alt={t.title} />
      <h2>{t.title}</h2>
      <Link href="/">{t.back}</Link>
    </div>
  )
}
