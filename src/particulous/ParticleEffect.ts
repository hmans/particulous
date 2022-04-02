import { World } from "miniplex"
import { BufferAttribute, BufferGeometry, Points } from "three"
import { Entity } from "./entities"
import { ParticleGeometry } from "./ParticleGeometry"
import {
  ageSystem,
  animationSystem,
  emitterSystem,
  flushQueueSystem,
  lifetimeSystem,
  movementSystem
} from "./systems"

export class ParticleEffect extends Points {
  geometry: ParticleGeometry

  /* The ECS world this effect is using. */
  world = new World<Entity>()

  /* A collection of archetypes we'll be using here and there. */
  archetypes = {
    particles: this.world.archetype("particle")
  }

  /* A default list of systems we will be executing on every update. This
     is where users can hook in their own logic! */
  systems = [
    ageSystem(this.world),
    lifetimeSystem(this.world),
    animationSystem(this.world),
    emitterSystem(this.world),
    movementSystem(this.world),
    flushQueueSystem(this.world)
  ]

  constructor(public maxParticles: number = 5000) {
    super()
    this.geometry = new ParticleGeometry(maxParticles)
  }

  update(dt: number) {
    this.updateSystems(dt)
    this.updateGeometry()
  }

  private updateGeometry() {
    const { attributes } = this.geometry
    const { entities } = this.archetypes.particles

    /* Positions */
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i]
      const i3 = i * 3

      this.geometry.positions[i3] = entity.transform.position.x
      this.geometry.positions[i3 + 1] = entity.transform.position.y
      this.geometry.positions[i3 + 2] = entity.transform.position.z

      this.geometry.colors[i3] = entity.particle.color.r
      this.geometry.colors[i3 + 1] = entity.particle.color.g
      this.geometry.colors[i3 + 2] = entity.particle.color.b

      this.geometry.sizes[i] = entity.particle.size

      this.geometry.alphas[i] = entity.particle.alpha
    }

    attributes.position.needsUpdate = true
    attributes.color.needsUpdate = true
    attributes.size.needsUpdate = true
    attributes.alpha.needsUpdate = true

    /* Apply attribute arrays to geometry */
    this.geometry.computeBoundingSphere()
  }

  private updateSystems(dt: number) {
    for (const system of this.systems) {
      system(dt)
    }
  }
}
