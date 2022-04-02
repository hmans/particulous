import { World } from "miniplex"
import { Vector3 } from "three"
import { ParticleEntity } from "../particles"

const tmpVec3 = new Vector3()

export const velocitySystem = (world: World<ParticleEntity>) => {
  const { entities } = world.archetype("transform", "velocity")

  return (dt: number) => {
    for (const { transform, velocity } of entities) {
      transform.position.add(tmpVec3.copy(velocity).multiplyScalar(dt))
    }
  }
}
