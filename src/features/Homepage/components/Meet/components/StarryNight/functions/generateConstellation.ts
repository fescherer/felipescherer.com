type IStar = {
  id: number
  cx: string
  cy: string
  r: number
  color: string
}

export function generateConstellation(starsQuantity: number): IStar[][] {
  const starsColors = ['#BDD9F3', '#F4F4F8', '#FFFDDC', '#FFEFC7', '#FFDCDC']
  let constellation: IStar[][] = []
  for (let i = 0; i < starsQuantity; i++) {
    let stars: IStar[] = []
    for (let i = 0; i < 200; i++) {
      const cx = Math.round(Math.random() * 10000) / 100 + '%'
      const cy = Math.round(Math.random() * 10000) / 100 + '%'
      const r = Math.round((Math.random() + 0.5) * 10) / 10
      const color = Math.floor((Math.random() * starsColors.length))
      stars = [...stars, { id: i, cx, cy, r, color: starsColors[color] }]
    }

    constellation = [...constellation, stars]
  }
  return constellation
}
