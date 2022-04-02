type LifetimeValue<T> = (t: number) => T

export type AlphaOverLifetimeComponentData = LifetimeValue<number>

export type AlphaOverLifetimeComponent = {
  alphaOverLifetime: AlphaOverLifetimeComponentData
}

export const alphaOverLifetime = (
  alphaOverLifetime: AlphaOverLifetimeComponentData
): AlphaOverLifetimeComponent => ({
  alphaOverLifetime
})
