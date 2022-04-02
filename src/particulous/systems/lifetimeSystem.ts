import { ParticleWorld } from "../entities"

export const lifetimeSystem = (world: ParticleWorld) => {
  const { entities } = world

  return (dt: number) => {
    for (const entity of entities) {
      entity.lifetime += dt
    }
  }
}
