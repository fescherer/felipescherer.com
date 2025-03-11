import { RootLayoutType } from '@/@types/Page'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import Image from 'next/image'
import { Typewriter } from './components/typewritter.component'
import Link from 'next/link'
import { YoutubeIcon } from '@/lib/icons/social/youtube.icon'
import { LinkedinIcon } from '@/lib/icons/social/linkedin.icon'
import { OWNER_CONFIGS } from '@/lib/_felipescherer.com/owner.config'
import { GithubIcon } from '@/lib/icons/social/github.icon'
import { LucideArrowDown } from 'lucide-react'
import QRCode from 'react-qr-code'

export default async function HomePage({ params: { lang } }: RootLayoutType) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="m-auto pt-8 max-w-3xl">
      <div className="flex flex-col items-center gap-4">
        <Image src="/perfil.jpg" width={2128} height={2128} alt="Felipe Scherer Photo" className="rounded-full size-80 border-primary border-4" />
        <h1 className="font-title text-5xl">Felipe Scherer</h1>
        <Typewriter items={dictionary.homepage.meet.typewriter} />

        <div className="flex flex-wrap justify-center gap-3 pt-6 text-[#fff] md:justify-start">
          <Link href="https://youtube.com/@fennectales" target="_blank" className="rounded-full bg-primary p-2 transition-all hover:brightness-75">
            <YoutubeIcon className="size-6" />
          </Link>

          <Link href={OWNER_CONFIGS.linkedin_link} target="_blank" className="rounded-full bg-primary p-2 transition-all hover:brightness-75">
            <LinkedinIcon className="size-6" />
          </Link>

          <Link href={OWNER_CONFIGS.github_link} target="_blank" className="rounded-full bg-primary p-2 transition-all hover:brightness-75">
            <GithubIcon className="size-6" />
          </Link>
        </div>
      </div>

      <Link href="#about" className="my-12 flex size-10 mx-auto animate-bounce items-center justify-center rounded-full border-2 border-on-layer-0-l2 backdrop-blur-sm transition-all hover:border-brand-primary hover:text-brand-primary hover:animation-paused">
        <LucideArrowDown />
      </Link>

      <div id="about" className="pt-14 space-y-4">
        <h2 className="font-title border-b border-primary">About me</h2>

        <div className="flex gap-4">
          <Image src="/perfil.jpg" width={2128} height={2128} alt="Felipe Scherer Photo" className="size-80" />

          <div className="space-y-4">
            <p>
              Meu nome é Felipe Scherer, criador da Fennec Tales Studio e um desenvolvedor de software com mais de 5 anos de experiência  entregando soluções inovadoras entre diversas plataformas. Minha  experiência vai da web até aplicações mobile, com forte enfâse na  experiência do usuário e performance.
            </p>

            <p>Atualmente, estou  expandindo minhas habilidades no desenvolvimento de jogos. Empenhado com aprendizado continuo, estou sempre me atualizando com tendências da  indústria para garantir a maior qualidade nos resultados</p>
          </div>
        </div>
      </div>

      <div id="about" className="pt-14 space-y-4">
        <h2 className="font-title border-b border-primary">About me</h2>

        <div className="flex gap-4">

          <div className="space-y-4 flex flex-col">
            <p>
              Com mais de 5 anos de experiência de desenvolvimento de software, carrego um diploma de bacharelado em  Ciência da Computação e multiplus certificados de cursos tech. Atualmente, estou cursando uma pós graduação com especialização em algoritmos.
            </p>

            <p className="font-medium">Idiomas: Inglês e Português</p>
            <Link href="/resume" className="bg-primary text-on-primary p-4 rounded-lg self-center hover:brightness-90 transition-all">Ver currículo completo</Link>
          </div>

          <div className="rounded-sm bg-[#fff] p-4">
            <QRCode value={`https://www.felipescherer.com/${lang}/resume`} />
          </div>
        </div>
      </div>

    </div>
  )
}
