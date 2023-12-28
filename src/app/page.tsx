import { useEffect } from 'react'

export default function Home() {
  let a = 1

  useEffect(() => {
    console.log(a)
  }, [a])

  return (
    <main className="m-1 flex">
      <span>dsadasdas</span>
    </main>
  )
}
