import { alphaOverLifetime, lifetime, particle, velocity } from "../components"
import { defaultEntity, ParticleWorld } from "../entities"

export const emitterSystem = (world: ParticleWorld) => {
  const { entities } = world.archetype("emitter")

  return () => {
    for (const { emitter, transform } of entities) {
      /* Spawn a particle */
      const entity = world.createEntity(emitter.factory())

      // if (emitter.lifetimeFactory) {
      //   world.addComponent(entity, lifetime(emitter.lifetimeFactory()))
      // }

      // if (emitter.velocityFactory) {
      //   entity.velocity.copy(emitter.velocityFactory())
      // }

      // /* Experimental */
      // world.addComponent(
      //   entity,
      //   alphaOverLifetime((t) => 1 - t)
      // )
    }
  }
}
