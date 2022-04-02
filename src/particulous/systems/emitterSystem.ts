import { ParticleWorld } from "../entities"

export const emitterSystem = (world: ParticleWorld) => {
  const { entities } = world.archetype("emitter")

  return () => {
    for (const { emitter, transform } of entities) {
      /* Spawn a particle */
      const entity = world.createEntity(emitter.factory())
    }
  }
}
