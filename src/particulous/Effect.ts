import { World } from "miniplex"
import { BufferAttribute, BufferGeometry, Color, Object3D, Points } from "three"

type TransformComponent = {
  transform: Object3D
}

type ColorComponent = {
  color: Color
}

type ParticleEntity = TransformComponent & ColorComponent

const transform = (): TransformComponent => ({ transform: new Object3D() })
const color = (): ColorComponent => ({ color: new Color() })

const defaultParticle = () => ({ ...transform(), ...color() })

export class Effect extends Points {
  world: World<ParticleEntity> = null!

  private positions: Float32Array
  private colors: Float32Array
  private alphas: Float32Array
  private sizes: Float32Array

  constructor(public maxParticles: number = 5000) {
    super()
    this.world = new World()

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

    /* test */
    this.world.createEntity(defaultParticle())

    /* Run an initial update so we have something to render in the first frame */
    this.updateGeometry()
  }

  updateGeometry() {
    const { attributes } = this.geometry
    const particles = this.world.entities

    console.log(particles)

    for (let i = particles.length; i > 0; i--) {
      const particle = particles[i - 1]

      const i3 = i * 3

      this.positions[i3] = particle.transform.position.x
      this.positions[i3 + 1] = particle.transform.position.y
      this.positions[i3 + 2] = particle.transform.position.z

      this.colors[i3] = particle.color.r
      this.colors[i3 + 1] = particle.color.g
      this.colors[i3 + 2] = particle.color.b

      this.sizes[i] = 1

      this.alphas[i] = 1
    }

    attributes.position.needsUpdate = true
    attributes.color.needsUpdate = true
    attributes.size.needsUpdate = true
    attributes.alpha.needsUpdate = true

    /* Apply attribute arrays to geometry */
    this.geometry.computeBoundingSphere()
  }

  update(dt: number) {
    for (const particle of this.world.entities) {
    }
  }
}
