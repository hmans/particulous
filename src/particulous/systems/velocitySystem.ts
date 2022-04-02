import { Vector3 } from "three"
import { ParticleWorld } from "../particles"

const tmpVec3 = new Vector3()

export const velocitySystem = (world: ParticleWorld) => {
  const { entities } = world

  return (dt: number) => {
    for (const { transform, velocity } of entities) {
      transform.position.add(tmpVec3.copy(velocity).multiplyScalar(dt))
    }
  }
}
