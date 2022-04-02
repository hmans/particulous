import { lifetime, particle } from "../components"
import { defaultEntity, ParticleWorld } from "../entities"

export const emitterSystem = (world: ParticleWorld) => {
  const { entities } = world.archetype("emitter")

  return (dt: number) => {
    for (const { emitter, transform } of entities) {
      /* Spawn a particle */
      const entity = world.createEntity(defaultEntity(), particle())

      if (emitter.lifetimeFactory) {
        world.addComponent(entity, lifetime(emitter.lifetimeFactory()))
      }

      entity.velocity.randomDirection()
    }
  }
}
