type IComet = {
  id: number
  angle: string
  cx: string
  cy: string
  rx: number
  ry: number
  delay: string
}

// TODO Make comets random generated.
// The main problem is when changing the cx or cy the rotations calc gets weird. We need to find a way to generate these number automaticaly
export function generateComets(): IComet[] {
  const comet1: IComet = {
    id: 1,
    angle: '-135',
    cx: '0',
    cy: '0',
    delay: '0',
    rx: 150,
    ry: 2,
  }

  const comet2 = {
    id: 2,
    angle: '20',
    cx: '100%',
    cy: '0',
    delay: '-3.3s',
    rx: 150,
    ry: 2,
  }

  const comet3 = {
    id: 3,
    angle: '300',
    cx: '40%',
    cy: '100%',
    delay: '-8s',
    rx: 150,
    ry: 2,
  }

  return [comet1, comet2, comet3]
}
