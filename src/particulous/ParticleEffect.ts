import { Points } from "three"
import { ParticleWorld } from "./entities"
import { ParticleGeometry } from "./ParticleGeometry"

export class ParticleEffect extends Points {
  geometry: ParticleGeometry
  world: ParticleWorld

  constructor(public maxParticles: number = 5000) {
    super()
    this.geometry = new ParticleGeometry(maxParticles)
    this.world = this.geometry.world
  }

  update(dt: number) {
    this.geometry.updateSystems(dt)
    this.geometry.updateGeometry()
  }
}
