const initializeArrayWithRange = (end: number, start = 0, step = 1) =>
  Array.from(
    {length: Math.ceil((end - start + 1) / step)},
    (_v, i) => i * step + start,
  )

const HOURS = new Array(12).fill(null).map((_, i) => i + 1)
const MINUTES = initializeArrayWithRange(55, 0, 5).map((m) =>
  m.toString().padStart(2, '0'),
)

export {HOURS, MINUTES}
