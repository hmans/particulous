export type SizeComponent = {
  size: number
}

export const size = (size = 1): SizeComponent => ({
  size
})
