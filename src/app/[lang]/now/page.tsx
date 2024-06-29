import Link from 'next/link'

export default function Now() {
  return (
    <div className="prose m-auto max-w-5xl p-4">
      <h2>Inspiration</h2>

      <p>
        This page was inspired by
        <Link target="_blank" className="design-link mx-1" href="https://sive.rs/">Derek Sivers</Link>
        and
        <Link className="design-link ml-1" href="https://nownownow.com/" target="_blank">nownownow.com</Link>
        . Last updated 25 March, 2024.
      </p>

      <h2>I am currently</h2>

      <p>
        Working as web developer, using React and NextJS.
      </p>

      <p>
        Going regularly to gym and running on weekends.
      </p>

      <p>
        Writing my
        <Link className="design-link ml-1" href="https://fennectales.com" target="_blank">blog</Link>
        .
      </p>

      <p>
        Studying drawing, chinese, artificial intelligence and game development.
      </p>

    </div>
  )
}
