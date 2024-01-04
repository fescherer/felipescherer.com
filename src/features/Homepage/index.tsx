import { AboutMe, Blog, Meet, Projects } from './components'

export function Homepage() {
  return (
    <main className="flex flex-col">
      <Meet />
      <AboutMe />
      <Blog />
      <Projects />
    </main>
  )
}
