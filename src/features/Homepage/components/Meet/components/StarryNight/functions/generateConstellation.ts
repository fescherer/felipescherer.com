type IStar = {
  id: number
  cx: string
  cy: string
  r: number
}

export function generateConstellation(starsQuantity: number): IStar[][] {
  let constellation: IStar[][] = []
  for (let i = 0; i < starsQuantity; i++) {
    let stars: IStar[] = []
    for (let i = 0; i < 200; i++) {
      const cx = Math.round(Math.random() * 10000) / 100 + '%'
      const cy = Math.round(Math.random() * 10000) / 100 + '%'
      const r = Math.round((Math.random() + 0.5) * 10) / 10
      stars = [...stars, { id: i, cx, cy, r }]
    }

    constellation = [...constellation, stars]
  }
  return constellation
}
