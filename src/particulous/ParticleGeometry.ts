import { BufferAttribute, BufferGeometry } from "three"

export class ParticleGeometry extends BufferGeometry {
  positions: Float32Array
  colors: Float32Array
  alphas: Float32Array
  sizes: Float32Array

  constructor(public maxParticles: number = 5000) {
    super()

    this.positions = new Float32Array(maxParticles * 3)
    this.colors = new Float32Array(maxParticles * 3)
    this.alphas = new Float32Array(maxParticles)
    this.sizes = new Float32Array(maxParticles)

    this.setAttribute("position", new BufferAttribute(this.positions, 3))
    this.setAttribute("color", new BufferAttribute(this.colors, 3))
    this.setAttribute("size", new BufferAttribute(this.sizes, 1))
    this.setAttribute("alpha", new BufferAttribute(this.alphas, 1))
  }
}
