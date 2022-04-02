export type LifetimeComponent = {
  lifetime: number
}

export const lifetime = (lifetime = 1): LifetimeComponent => ({ lifetime })
