import { ParticleWorld } from "../entities"

export const emitterSystem = (world: ParticleWorld) => {
  const { entities } = world.archetype("emitter")

  return (dt: number) => {
    for (const entity of entities) {
    }
  }
}
