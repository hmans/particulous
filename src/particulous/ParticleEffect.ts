import { World } from "miniplex"
import { BufferAttribute, BufferGeometry, Points } from "three"
import { Entity } from "./entities"
import { lifetimeSystem } from "./systems/lifetimeSystem"
import { movementSystem } from "./systems/movementSystem"

export class ParticleEffect extends Points {
  /* The ECS world this effect is using. */
  world = new World<Entity>()

  /* A collection of archetypes we'll be using here and there. */
  archetypes = {
    particles: this.world.archetype("particle")
  }

  /* A default list of systems we will be executing on every update. This
     is where users can hook in their own logic! */
  systems = [lifetimeSystem(this.world), movementSystem(this.world)]

  private positions: Float32Array
  private colors: Float32Array
  private alphas: Float32Array
  private sizes: Float32Array

  constructor(public maxParticles: number = 5000) {
    super()

    /* Set up geometry */
    this.geometry = new BufferGeometry()

    this.positions = new Float32Array(maxParticles * 3)
    this.colors = new Float32Array(maxParticles * 3)
    this.alphas = new Float32Array(maxParticles)
    this.sizes = new Float32Array(maxParticles)

    this.geometry.setAttribute(
      "position",
      new BufferAttribute(this.positions, 3)
    )
    this.geometry.setAttribute("color", new BufferAttribute(this.colors, 3))
    this.geometry.setAttribute("size", new BufferAttribute(this.sizes, 1))
    this.geometry.setAttribute("alpha", new BufferAttribute(this.alphas, 1))
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

      this.positions[i3] = entity.transform.position.x
      this.positions[i3 + 1] = entity.transform.position.y
      this.positions[i3 + 2] = entity.transform.position.z

      this.colors[i3] = entity.particle.color.r
      this.colors[i3 + 1] = entity.particle.color.g
      this.colors[i3 + 2] = entity.particle.color.b

      this.sizes[i] = entity.particle.size

      this.alphas[i] = entity.particle.alpha
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
