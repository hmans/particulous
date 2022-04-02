export type LifetimeComponent = {
  lifetime: number
}

export const lifetime = (): LifetimeComponent => ({ lifetime: 0 })
