import { World } from "miniplex"
import { Object3D, Points } from "three"
import { ParticleMaterial } from "./ParticleMaterial"

type TransformComponent = {
  transform: Object3D
}

type ParticleEntity = TransformComponent

const transform = (): TransformComponent => ({ transform: new Object3D() })

export class Effect extends Points {
  world: World<ParticleEntity> = null!

  constructor() {
    super()
    this.world = new World()

    /* test */
    this.world.createEntity(transform())
  }

  update(dt: number) {
    for (const particle of this.world.entities) {
    }
  }
}
