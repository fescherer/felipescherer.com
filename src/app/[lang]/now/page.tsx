import { getDictionary } from '@/get-dictionary'
import { RootLayoutType } from '@/types/Page'
import Link from 'next/link'

export default async function Now({ params }: RootLayoutType) {
  const dictionary = await getDictionary(params.lang)
  const t = dictionary.now

  return (
    <div className="prose m-auto max-w-5xl p-4">
      <h2>{t.inspiration.title}</h2>

      <p>
        {t.inspiration.text1}
        <Link target="_blank" className="design-link mx-1" href="https://sive.rs/">Derek Sivers</Link>
        {t.inspiration.text2}
        <Link className="design-link ml-1" href="https://nownownow.com/" target="_blank">nownownow.com</Link>
        .
        {' '}
        {t.inspiration.text3}
        {' '}
        24 October, 2024.
      </p>

      <h2>{t.currently.title}</h2>

      {[t.currently.item1, t.currently.item2, t.currently.item3, t.currently.item4].map(item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}
